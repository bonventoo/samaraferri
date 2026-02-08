'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { 
    title: "Diagnóstico de Precisão", 
    text: "Mapeamos a causa raiz através de uma análise diferencial biomecânica, identificando padrões de compensação invisíveis a olhos não treinados.",
    tag: "Fase 01"
  },
  { 
    title: "Intervenção Biomecânica", 
    text: "Terapia manual avançada e modalidades direcionadas para restaurar a integridade dos tecidos e a mobilidade articular imediata.",
    tag: "Fase 02"
  },
  { 
    title: "Integração e Carga", 
    text: "Fortalecimento progressivo e reprogramação neuromuscular. Ensinamos seu corpo a operar em sua nova capacidade funcional máxima.",
    tag: "Fase 03"
  },
];

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id='metodo' className="py-32 px-6 md:px-24 bg-[#020617] relative overflow-hidden">
      {/* Luz de fundo para dar profundidade */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-blue-900/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Lado Esquerdo: Texto Fixo */}
        <div className="md:sticky md:top-40 h-fit">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-purple-400 text-xs font-bold uppercase tracking-[0.4em] mb-4 block"
          >
            Protocolo de Elite
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-8">
            O <span className="font-serif italic text-purple-300">Método</span>.
          </h2>
          <p className="text-slate-400 text-lg max-w-sm leading-relaxed font-light">
            Não tratamos apenas sintomas. Engenheiramos um caminho de volta à performance máxima através de um protocolo rigoroso de três fases.
          </p>
          
          <div className="mt-12 hidden md:block">
            <div className="text-white/20 text-8xl font-serif italic select-none">
              S.B.
            </div>
          </div>
        </div>

        {/* Lado Direito: Timeline */}
        <div className="relative pl-8 md:pl-16">
          {/* Linha de Base Cinza */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
          
          {/* Linha de Progresso Ativa (Roxa) */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[-1px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-purple-400 via-purple-600 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] z-10"
          />

          <div className="space-y-32">
            {steps.map((step, i) => (
              <StepItem key={i} step={step} index={i} total={steps.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepItem({ step, index, total }: { step: any, index: number, total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      {/* Indicador Flutuante */}
      <div className="absolute -left-[2.5rem] md:-left-[4.5rem] top-1 z-20">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#020617] border-2 border-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-transform hover:scale-110">
          <span className="text-white text-[10px] md:text-xs font-bold">
            0{index + 1}
          </span>
        </div>
      </div>

      <div className="group">
        <span className="text-purple-400/60 text-[10px] uppercase tracking-widest font-bold mb-2 block">
          {step.tag}
        </span>
        <h3 className="text-2xl md:text-3xl font-light text-white mb-4 group-hover:text-purple-300 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
          {step.text}
        </p>
      </div>

      {/* Divisor visual interno (opcional) */}
      {index !== total - 1 && (
        <div className="mt-16 w-12 h-[1px] bg-white/5" />
      )}
    </motion.div>
  );
}