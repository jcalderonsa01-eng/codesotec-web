import type { Product } from "./types";

export const PRODUCTOS: Product[] = [
  {
    id: "servidor-rack-ds420",
    nombre: "Servidor Rack DS-420",
    descripcion:
      "Servidor empresarial 2U con doble procesador Xeon, 64 GB RAM y almacenamiento NVMe. Ideal para cargas de trabajo críticas.",
    categoria: "Infraestructura",
    precio: 12500,
  },
  {
    id: "switch-gestionable-pronet-48p",
    nombre: "Switch Gestionable Pro-Net 48P",
    descripcion:
      "Switch Layer 3 con 48 puertos Gigabit PoE+, ideal para redes corporativas de alta densidad.",
    categoria: "Infraestructura",
    precio: 3800,
  },
  {
    id: "ups-industrial-smartpower-3000va",
    nombre: "UPS Industrial SmartPower 3000VA",
    descripcion:
      "UPS de doble conversión con 3000VA de capacidad, protección contra sobretensiones y autonomía extendida.",
    categoria: "Infraestructura",
    precio: 2100,
  },
  {
    id: "firewall-shieldwall-x500",
    nombre: "Firewall Corporativo ShieldWall X500",
    descripcion:
      "Firewall de última generación con filtrado SSL, IDS/IPS y VPN site-to-site. Protección avanzada contra amenazas.",
    categoria: "Ciberseguridad",
    precio: 8900,
  },
  {
    id: "suite-antimalware-enterprise",
    nombre: "Suite Antimalware Enterprise (Anual)",
    descripcion:
      "Protección endpoint multiplataforma con detección heurística, sandboxing y actualizaciones en tiempo real.",
    categoria: "Ciberseguridad",
    precio: 450,
  },
  {
    id: "auditoria-seguridad-integral",
    nombre: "Auditoría de Seguridad Integral",
    descripcion:
      "Evaluación completa de infraestructura: pentesting, análisis de vulnerabilidades y plan de remediación.",
    categoria: "Ciberseguridad",
    precio: 6500,
  },
  {
    id: "erp-modulo-base",
    nombre: "ERP a Medida - Módulo Base",
    descripcion:
      "Sistema ERP personalizable con módulos de contabilidad, inventario, facturación y RR.HH. Licencia perpetua.",
    categoria: "Software",
    precio: 15000,
  },
  {
    id: "sistema-gestion-documental",
    nombre: "Sistema de Gestión Documental",
    descripcion:
      "Plataforma digital para almacenar, clasificar y recuperar documentos corporativos con flujos de aprobación.",
    categoria: "Software",
    precio: 7200,
  },
  {
    id: "infraestructura-cloud-privada",
    nombre: "Infraestructura Cloud Privada (Mensual)",
    descripcion:
      "Entorno cloud privado con recursos dedicados, alta disponibilidad y soporte 24/7. Facturación mensual.",
    categoria: "Cloud",
    precio: 2800,
  },
  {
    id: "backup-recuperacion-cloud",
    nombre: "Backup y Recuperación Cloud (Mensual)",
    descripcion:
      "Servicio de backup automatizado con almacenamiento off-site, cifrado AES-256 y RTO de 4 horas.",
    categoria: "Cloud",
    precio: 1200,
  },
  {
    id: "workstation-profesional-wspro",
    nombre: "Workstation Profesional WS-Pro",
    descripcion:
      "Estación de trabajo con procesador AMD Ryzen 9, 32 GB RAM, GPU dedicada y SSD 1 TB. Ideal para diseño y desarrollo.",
    categoria: "Equipamiento",
    precio: 5600,
  },
  {
    id: "monitor-4k-profesional-27",
    nombre: 'Monitor 27" 4K Profesional',
    descripcion:
      "Monitor IPS 27 pulgadas con resolución 4K, cobertura DCI-P3 al 98% y ajuste ergonómico completo.",
    categoria: "Equipamiento",
    precio: 1850,
  },
];
