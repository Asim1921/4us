"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GridBackground({ className }: { className?: string }) {
  const dots = Array.from({ length: 100 });
  
  return (
    <div
      className={cn(
        "fixed inset-0 z-0 h-full w-full bg-black",
        className
      )}
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Animated Dots */}
      <div className="absolute inset-0">
        {dots.map((_, i) => {
          const x = Math.floor(Math.random() * 100);
          const y = Math.floor(Math.random() * 100);
          const delay = Math.random() * 2;
          const duration = 2 + Math.random() * 2;
          
          return (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white/30"
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

