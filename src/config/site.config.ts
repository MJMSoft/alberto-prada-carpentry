export interface SiteConfig {
  // Información de la empresa
  company: {
    name: string;
    slogan?: string;
    logo: string; // Ruta al logo
    phone: string;
    email: string;
    address: string;
    whatsapp?: string;
  };
  
  // Colores del tema (se mapearán a variables CSS)
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    // Colores adicionales opcionales
    primaryDark?: string;
    primaryLight?: string;
  };
  
  // Metadatos SEO
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  
  // Redes sociales (opcional)
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    pinterest?: string;
  };
  
  // Categoría del sitio (plumbing, carpentry, etc.)
  category: 'plumbing' | 'carpentry' | 'cleaning' | 'automotive' | 'fitness' | 'restaurant' | 'healthcare' | 'education' | 'legal' | 'real-estate';
}

// Configuración por defecto - PERSONALIZA ESTOS VALORES PARA CADA CLIENTE
export const siteConfig: SiteConfig = {
  company: {
    name: "Carpintería Alberto Prada",
    slogan: "Tradición y calidad en cada detalle de tu hogar",
    logo: "/images/logo.png", // Coloca el logo en public/images/logo.png
    phone: "315 4366937",
    email: "info@carpinteriaprada.com.co",
    address: "Cl. 32b #16-41, Comuna 8, segundo piso, Cali, Valle del Cauca",
    whatsapp: "+573154366937"
  },
  
  colors: {
    primary: "#6B4423",      // marrón madera oscuro (tradicional)
    secondary: "#3E2723",    // marrón muy oscuro
    accent: "#D2691E",       // marrón dorado cálido
    primaryDark: "#3E2723",  // marrón muy oscuro
    primaryLight: "#8B6341"  // marrón claro
  },
  
  seo: {
    title: "Carpintería Alberto Prada - Artesanía en Madera en Cali",
    description: "Carpintería tradicional en Cali. Muebles a medida, puertas, gabinetes y trabajos en madera con más de 20 años de experiencia. Calidad artesanal colombiana.",
    keywords: "carpintería, carpintería Cali, muebles madera, carpintería arquitectónica, Alberto Prada, muebles a medida Cali, puertas madera, gabinetes cocina"
  },
  
  social: {
    facebook: "https://facebook.com/carpinteriaprada",
    instagram: "https://instagram.com/carpinteriaprada",
    pinterest: "https://pinterest.com/carpinteriaprada"
  },
  
  category: 'carpentry'
};