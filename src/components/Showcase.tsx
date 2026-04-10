import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";
import { Sparkles, Cloud, BarChart3, Monitor, Zap, ShieldCheck } from "lucide-react";
import { ProductCard, type Product } from "./ProductCard";
import { Navbar } from "./Navbar";
import img33333 from "../assets/33333.jpg";

const NewApiLogo = () => (
  <div className="relative w-7 h-7 flex items-center justify-center">
    <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-500 rounded-full blur-[2px] opacity-80" />
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative w-full h-full text-white drop-shadow-md">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </div>
);

// ===============================================================
// PRODUCT DATA CONFIGURATION
// To add or modify product cards, update the PRODUCTS array below.
// ===============================================================
const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "New API",
    tagline: "人工智能应用基座",
    description: "承载所有 AI 应用，管理你的数字资产，连接未来的统一基础设施平台。快速部署，轻松扩展，管理数字资产的终极方案。",
    icon: NewApiLogo, 
    // ===============================================================
    // IMAGE SWAPPING CONFIGURATION (Product 1)
    // Updated with imported image 33333.png
    // ===============================================================
    image: img33333, 
    hoverImage: "https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?auto=format&fit=crop&q=80&w=800",
    color: "#8b5cf6",
    link: "https://www.newapi.ai/zh"
  },
  {
    id: "2",
    title: "Nova Cloud",
    tagline: "Global Infrastructure",
    description: "Next-generation serverless platform with edge computing capabilities, ensuring sub-10ms latency for users anywhere in the world.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    color: "#3b82f6",
    link: "#"
  },
  {
    id: "3",
    title: "Pulse Analytics",
    tagline: "Real-time Insights",
    description: "Transform raw data into beautiful, actionable visualizations. Pulse monitors millions of events per second with zero overhead.",
    icon: BarChart3,
    // FIXED: Using a high-quality data visualization image for the third product
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    hoverImage: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
    color: "#10b981",
    link: "#"
  },
  {
    id: "4",
    title: "Zenith OS",
    tagline: "Focused Computing",
    description: "A minimalist operating system that eliminates distractions and optimizes system resources for high-performance development.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    color: "#f59e0b",
    link: "#"
  },
  {
    id: "5",
    title: "Volt Engine",
    tagline: "High-Speed Runtime",
    description: "The world's fastest JavaScript runtime, built from the ground up for modern web standards and maximum efficiency.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    color: "#ef4444",
    link: "#"
  },
  {
    id: "6",
    title: "Sentinel",
    tagline: "Zero-Trust Security",
    description: "Automated security auditing and threat detection that lives within your CI/CD pipeline, protecting your code before it ships.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    color: "#ec4899",
    link: "#"
  }
];

export function Showcase() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="min-h-screen bg-[#050505] pt-32 pb-24 px-6 relative overflow-hidden"
    >
      <Navbar />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold-muted/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold-muted/5 blur-[120px] rounded-full" 
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-xs font-mono uppercase tracking-[0.4em] text-gold-muted/60 mb-6">
              Lumina Financial Systems
            </h2>
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[1.1] mb-6">
              AI Token <br />
              <span className="text-gradient-gold">资源&服务链接器</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg text-slate-400 max-w-xl font-sans font-light leading-relaxed"
          >
            我们致力于为全球创作者与机构提供最先进的数字工具，以卓越的性能与极致的安全，构建下一代金融生态。
          </motion.p>
        </header>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>

        {/* ===============================================================
            FOOTER SECTION
            Modify the text size (text-sm, text-base) and opacity (text-white/70) below.
            To change font size: change 'text-sm' to 'text-base' or 'text-lg'.
            To change brightness: change 'text-white/70' to 'text-white/90' or 'text-white'.
            =============================================================== */}
        <footer className="mt-32 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-white/70 text-sm font-mono tracking-widest"
          >
            © 2026 LUMINA FINANCIAL GROUP. ALL RIGHTS RESERVED.
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-10 text-sm font-medium text-white/70 uppercase tracking-[0.2em]"
          >
            <a href="#" className="hover:text-gold-bright transition-colors">Twitter</a>
            <a href="#" className="hover:text-gold-bright transition-colors">GitHub</a>
            <a href="#" className="hover:text-gold-bright transition-colors">LinkedIn</a>
          </motion.div>
        </footer>
      </div>
    </motion.div>
  );
}
