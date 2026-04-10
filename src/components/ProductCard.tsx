import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import React from "react";

export interface Product {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  image: string; // Default background image
  hoverImage?: string; // Image to show on hover
  color: string;
  link: string;
}

export function ProductCard({ product, index }: { product: Product, index: number, key?: React.Key }) {
  const [isHovered, setIsHovered] = useState(false);

  // Entrance animation
  const cardVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 15, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], 
        delay: index * 0.15 
      }
    }
  };

  // Idle "Flowing" animation
  const idleAnimation = {
    y: [0, -10, 0],
    x: [0, 3, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: index * 0.7
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.15, 
        zIndex: 50,
        transition: { type: "spring", stiffness: 400, damping: 28 }
      }}
      className="relative group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* The Card Body */}
      <motion.div 
        animate={isHovered ? { y: 0, x: 0 } : idleAnimation}
        className="relative overflow-hidden rounded-2xl glass-panel aspect-[4/5] flex flex-col financial-border shadow-2xl bg-[#0a0a0a]"
      >
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img 
              key={isHovered && product.hoverImage ? "hover" : "default"}
              // ===============================================================
              // IMAGE SWAPPING LOGIC
              // Default Image: product.image
              // Hover Image: product.hoverImage (if provided)
              // ===============================================================
              src={isHovered && product.hoverImage ? product.hoverImage : product.image} 
              alt={product.title}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0.7,
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? "brightness(0.4) blur(4px)" : "brightness(0.8) grayscale(0)"
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          
          {/* Subtle gradient to keep text readable in default state */}
          <motion.div 
            animate={{ opacity: isHovered ? 0.8 : 0.3 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" 
          />
        </div>

        {/* Logo - Always on top and clickable */}
        <div className="absolute top-6 left-6 z-30">
          <motion.a
            href={product.link}
            animate={{ 
              scale: isHovered ? 0.9 : 1,
              y: isHovered ? -2 : 0 
            }}
            className="w-12 h-12 rounded-full bg-white/[0.05] border border-white/20 flex items-center justify-center transition-all duration-500 hover:bg-gold-muted/20 hover:border-gold-muted/40 cursor-pointer backdrop-blur-sm"
            style={{ color: isHovered ? '#e5c185' : product.color }}
          >
            <product.icon size={24} strokeWidth={1.2} />
          </motion.a>
        </div>

        {/* Main Content Area */}
        <div className="relative flex-1 p-6 flex flex-col justify-end z-10">
          <motion.div
            animate={{ y: isHovered ? -10 : 0, opacity: isHovered ? 0 : 1 }}
            className="space-y-1"
          >
            <h3 className="text-lg font-display font-semibold text-white group-hover:text-gold-bright transition-colors">
              {product.title}
            </h3>
            {/* Subtitle/Tagline - Made brighter for visibility */}
            <p className="text-white/70 text-[10px] font-mono uppercase tracking-[0.25em] drop-shadow-md">
              {product.tagline}
            </p>
          </motion.div>
        </div>

        {/* Internal Animated Overlay - Slides up from bottom */}
        <motion.div
          initial={false}
          animate={{ y: isHovered ? 0 : "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
          className="absolute inset-0 bg-black/95 backdrop-blur-xl z-20 p-6 flex flex-col border-t border-gold-muted/20"
        >
          {/* Centered Content Area */}
          <div className="flex-1 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-5 rounded-full bg-gold-muted shadow-[0_0_15px_rgba(197,160,89,0.6)]" />
              <span className="text-base font-display font-black uppercase tracking-[0.15em] text-gold-bright">核心摘要</span>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed font-sans font-light">
              {product.description}
            </p>
          </div>

          {/* Bottom Action Area (Position fixed at bottom) */}
          <div className="pt-4">
            <motion.a
              href={product.link}
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-xs font-medium text-gold-bright group/link cursor-pointer"
            >
              立即探索
              <ArrowUpRight size={14} className="text-gold-muted group-hover/link:text-gold-bright transition-colors" />
            </motion.a>
          </div>
        </motion.div>

        {/* Background Glow */}
        <div 
          className="absolute -bottom-10 -right-10 w-32 h-32 blur-[60px] opacity-5 group-hover:opacity-20 transition-opacity duration-700 rounded-full pointer-events-none"
          style={{ backgroundColor: product.color }}
        />
      </motion.div>
    </motion.div>
  );
}
