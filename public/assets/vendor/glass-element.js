/**
 * Web Component GlassElement - Efecto de cristal líquido
 */

class GlassElement extends HTMLElement {
  constructor() {
    super();
    this.clicked = false;
    this.attachShadow({ mode: "open" });

    if (GlassElement._svgFilterSupport === undefined) {
      GlassElement._svgFilterSupport = this.detectSVGFilterSupport();
    }
  }

  detectSVGFilterSupport() {
    const testElement = document.createElement("div");
    testElement.style.backdropFilter = "blur(1px)";

    if (!testElement.style.backdropFilter) {
      return false;
    }

    const userAgent = navigator.userAgent.toLowerCase();
    const isChrome =
      /chrome|chromium|crios|edg/.test(userAgent) && !/firefox|fxios/.test(userAgent);

    if (isChrome) return true;

    try {
      testElement.style.backdropFilter = "url(#test)";
      return testElement.style.backdropFilter.includes("url");
    } catch (e) {
      return false;
    }
  }

  get hasSVGFilterSupport() {
    return GlassElement._svgFilterSupport;
  }

  static get observedAttributes() {
    return [
      "width",
      "height",
      "radius",
      "depth",
      "blur",
      "strength",
      "chromatic-aberration",
      "debug",
      "background-color",
      "responsive",
      "auto-size",
      "min-width",
      "min-height",
    ];
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    if (this.autoSize) this.setupAutoSizeObserver();
  }

  setupAutoSizeObserver() {
    const observer = new MutationObserver(() => {
      setTimeout(() => this.updateStyles(), 0);
    });
    observer.observe(this, { childList: true, subtree: true, characterData: true });

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => this.updateStyles());
      resizeObserver.observe(this.shadowRoot.querySelector(".glass-box"));
    }
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  get width() {
    return parseInt(this.getAttribute("width")) || 200;
  }
  get height() {
    return parseInt(this.getAttribute("height")) || 200;
  }
  get radius() {
    return parseInt(this.getAttribute("radius")) || 50;
  }
  get baseDepth() {
    return parseInt(this.getAttribute("depth")) || 10;
  }
  get blur() {
    return parseInt(this.getAttribute("blur")) || 2;
  }
  get strength() {
    return parseInt(this.getAttribute("strength")) || 100;
  }
  get chromaticAberration() {
    return parseInt(this.getAttribute("chromatic-aberration")) || 0;
  }
  get debug() {
    return this.getAttribute("debug") === "true";
  }
  get backgroundColor() {
    return this.getAttribute("background-color") || "rgba(255, 255, 255, 0.4)";
  }
  get autoSize() {
    return this.hasAttribute("auto-size");
  }
  get minWidth() {
    return parseInt(this.getAttribute("min-width")) || 0;
  }
  get minHeight() {
    return parseInt(this.getAttribute("min-height")) || 0;
  }

  get depth() {
    return this.baseDepth / (this.clicked ? 0.7 : 1);
  }

  setupEventListeners() {
    const glassBox = this.shadowRoot.querySelector(".glass-box");

    glassBox.addEventListener("mousedown", () => {
      this.clicked = true;
      this.updateStyles();
    });
    glassBox.addEventListener("mouseup", () => {
      this.clicked = false;
      this.updateStyles();
    });
    glassBox.addEventListener("mouseleave", () => {
      this.clicked = false;
      this.updateStyles();
    });
    document.addEventListener("mouseup", () => {
      if (this.clicked) {
        this.clicked = false;
        this.updateStyles();
      }
    });
  }

  updateStyles() {
    const glassBox = this.shadowRoot.querySelector(".glass-box");
    if (glassBox) this.applyDynamicStyles(glassBox);
  }

  applyDynamicStyles(element) {
    const { getDisplacementFilter, getDisplacementMap } = window.DisplacementUtils;

    element.style.borderRadius = `${this.radius}px`;

    if (this.autoSize) {
      element.style.backdropFilter = "none";
      element.style.background = "rgba(255, 255, 255, 0.4)";
      element.offsetWidth;
      element.offsetHeight;

      const rect = element.getBoundingClientRect();
      let actualWidth = Math.ceil(rect.width);
      let actualHeight = Math.ceil(rect.height);

      if (actualWidth === 0 || actualHeight === 0) {
        requestAnimationFrame(() => this.updateStyles());
        return;
      }

      actualWidth = Math.max(actualWidth, this.minWidth);
      actualHeight = Math.max(actualHeight, this.minHeight);
      actualWidth = Math.max(actualWidth, 50);
      actualHeight = Math.max(actualHeight, 30);

      if (this.debug) {
        element.style.background = `url("${getDisplacementMap({ height: actualHeight, width: actualWidth, radius: this.radius, depth: this.depth })}")`;
        element.style.boxShadow = "none";
        element.style.backdropFilter = "none";
      } else if (!this.hasSVGFilterSupport) {
        element.style.backdropFilter = `blur(${this.blur * 2}px)`;
        element.style.background = this.backgroundColor;
        element.style.boxShadow =
          "1px 1px 1px 0px rgba(255,255,255, 0.60) inset, -1px -1px 1px 0px rgba(255,255,255, 0.60) inset, 0px 0px 16px 0px rgba(0,0,0, 0.04)";
        element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
      } else {
        element.style.backdropFilter = `blur(${Math.round(this.blur * 0.7)}px) url('${getDisplacementFilter({ height: actualHeight, width: actualWidth, radius: this.radius, depth: this.depth, strength: this.strength, chromaticAberration: this.chromaticAberration })}') blur(${this.blur}px) brightness(1.15) saturate(1.85) contrast(1.12)`;
        element.style.background = this.backgroundColor;
        element.style.boxShadow =
          "inset 0.8px 0.8px 1.2px rgba(255,255,255, 0.45), inset -0.8px -0.8px 1.2px rgba(255,255,255, 0.22), 0 26px 80px rgba(0,0,0,0.25)";
      }
    } else {
      element.style.height = `${this.height}px`;
      element.style.width = `${this.width}px`;

      if (this.debug) {
        element.style.background = `url("${getDisplacementMap({ height: this.height, width: this.width, radius: this.radius, depth: this.depth })}")`;
        element.style.boxShadow = "none";
        element.style.backdropFilter = "none";
      } else if (!this.hasSVGFilterSupport) {
        element.style.backdropFilter = `blur(${this.blur * 2}px)`;
        element.style.background = this.backgroundColor;
        element.style.boxShadow =
          "1px 1px 1px 0px rgba(255,255,255, 0.60) inset, -1px -1px 1px 0px rgba(255,255,255, 0.60) inset, 0px 0px 16px 0px rgba(0,0,0, 0.04)";
        element.style.border = "1px solid rgba(255, 255, 255, 0.3)";
      } else {
        element.style.backdropFilter = `blur(${Math.round(this.blur * 0.7)}px) url('${getDisplacementFilter({ height: this.height, width: this.width, radius: this.radius, depth: this.depth, strength: this.strength, chromaticAberration: this.chromaticAberration })}') blur(${this.blur}px) brightness(1.15) saturate(1.85) contrast(1.12)`;
        element.style.background = this.backgroundColor;
        element.style.boxShadow =
          "inset 0.8px 0.8px 1.2px rgba(255,255,255, 0.45), inset -0.8px -0.8px 1.2px rgba(255,255,255, 0.22), 0 26px 80px rgba(0,0,0,0.25)";
      }
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: ${this.autoSize ? "inline-block" : "block"};
                }
                .glass-box {
                    background: rgba(255, 255, 255, 0.4);
                    box-shadow: 1px 1px 1px 0px rgba(255,255,255, 0.60) inset, -1px -1px 1px 0px rgba(255,255,255, 0.60) inset, 0px 0px 16px 0px rgba(0,0,0, 0.04);
                    cursor: pointer;
                    transition: transform 0.1s ease;
                    position: relative;
                    ${this.autoSize ? `display: inline-block; width: fit-content; min-width: ${this.minWidth}px; min-height: ${this.minHeight}px;` : ""}
                }
                .glass-box:active {
                    transform: scale(0.98);
                }
                .content {
                    ${this.autoSize ? "" : "width: 100%; height: 100%;"}
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    text-align: center;
                    font-family: sans-serif;
                    ${this.autoSize ? "padding: var(--glass-padding, 16px 24px);" : ""}
                }
            </style>
            <div class="glass-box">
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        `;

    const glassBox = this.shadowRoot.querySelector(".glass-box");

    if (this.autoSize) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.applyDynamicStyles(glassBox);
        });
      });
    } else {
      this.applyDynamicStyles(glassBox);
    }
  }
}

customElements.define("glass-element", GlassElement);
