'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Target,
  ShieldCheck,
  Stethoscope,
  ChevronRight,
  MoveUpRight
} from 'lucide-react';

const services = [
  {
    title: 'Fisioterapia Desportiva',
    description: 'Recuperação acelerada para atletas de elite e entusiastas. Foco em retorno seguro e otimização de performance.',
    icon: <Zap className="w-6 h-6" />,
    tag: 'Performance'
  },
  {
    title: 'Traumato-Ortopedia',
    description: 'Tratamento especializado em lesões musculares, articulares e reabilitação pós-operatória complexa.',
    icon: <Stethoscope className="w-6 h-6" />,
    tag: 'Clínico'
  },
  {
    title: 'Prevenção de Lesões',
    description: 'Análise fisioterapêutica detalhada para identificar e corrigir padrões de movimento antes que se tornem dor.',
    icon: <ShieldCheck className="w-6 h-6" />,
    tag: 'Longevidade'
  },
  {
    title: 'Terapia Manual',
    description: 'Técnicas manuais de precisão para liberação miofascial e restauração da mobilidade articular.',
    icon: <Target className="w-6 h-6" />,
    tag: 'Estratégico'
  }
];

export default function Specialties() {
  return (
    <section className="relative bg-[#020617] py-24 px-6 overflow-hidden">
      {/* Background Glow */}
      <div id="especialidades" className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#590076]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-purple-400 text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              Expertise Clínica
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-light text-white leading-tight"
            >
              Serviços <span className="font-serif italic text-purple-300">Especializados</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 max-w-sm text-sm leading-relaxed border-l border-white/10 pl-6"
          >
            Abordagem integrada combinando fisioterapia com técnicas manuais consagradas para resultados duradouros.
          </motion.p>
        </div>

        {/* Grid de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-600/10 blur-3xl group-hover:bg-purple-600/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#020617] border border-white/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>

                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2 block">
                  {service.tag}
                </span>

                <h3 className="text-xl font-medium text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 opacity-80 group-hover:opacity-100 transition-opacity">
                  {service.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner de CTA Interno */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-purple-900/20 to-blue-900/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
              <ChevronRight className="text-purple-400" />
            </div>
            <p className="text-white text-sm font-medium">
              Não encontrou o que procurava? <span className="text-slate-400 font-normal">Realizamos avaliações personalizadas para casos complexos.</span>
            </p>
          </div>
          <a href="https://wa.me/5519999496085?text=Ol%C3%A1!%20Gostaria%20de%20mais%20servi%C3%A7os!"><button className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-full border border-white/10 transition-all whitespace-nowrap">
            CONSULTAR TODOS OS SERVIÇOS
          </button></a>
        </motion.div>
      </div>
    </section>
  );
}