'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutBrief() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Efeito de revelação de texto (opacidade e cor)
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

  const text = "A vida moderna cria dívidas estruturais. Aplicamos rigor clínico para reverter disfunções mecânicas, garantindo que seu corpo opere em seu limite arquitetônico.";
  const words = text.split(" ");

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[80vh] flex items-center justify-center bg-[#020617] py-32 px-6 overflow-hidden"
    >
      {/* Elementos Decorativos de Fundo (Blur Sutil) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Linha de Design Superior */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          className="h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent mb-12 mx-auto md:mx-0"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Coluna de Título Lateral (Estilo Revista) */}
          <div className="lg:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-purple-400 font-bold mb-4 block">
              Filosofia Clínica
            </span>
            <h3 className="text-white/40 text-sm font-light leading-relaxed max-w-[200px]">
              Equilibrando a fisioterapia com a performance humana de elite.
            </h3>
          </div>

          {/* O Texto Principal com Efeito de Revelação */}
          <motion.div 
            style={{ opacity, scale }}
            className="lg:col-span-9"
          >
            <p className="text-3xl md:text-5xl lg:text-6xl font-light leading-[1.1] tracking-tight text-white flex flex-wrap gap-x-3 gap-y-2">
              {words.map((word, i) => (
                <Word key={i} progress={scrollYProgress} range={[0.1 + (i * 0.01), 0.15 + (i * 0.01)]}>
                  {word}
                </Word>
              ))}
            </p>
            
            {/* Assinatura ou Subtexto */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="flex -space-x-3">
                 {/* Placeholder para mini-avatars ou ícones de tecnologia */}
                <div className="w-12 h-12 rounded-full border-2 border-[#020617] bg-purple-900 flex items-center justify-center text-[10px] text-white">BIO</div>
                <div className="w-12 h-12 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] text-white">TEC</div>
              </div>
              <p className="text-slate-500 text-sm max-w-sm italic">
                "Nosso foco não é apenas aliviar a dor, mas recalibrar o sistema como um todo."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Componente auxiliar para animar cada palavra individualmente
function Word({ children, progress, range }: { children: string, progress: any, range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const blur = useTransform(progress, range, [4, 0]);

  return (
    <motion.span style={{ opacity, filter: `blur(${blur}px)` }} className="relative">
      {children}
    </motion.span>
  );
}