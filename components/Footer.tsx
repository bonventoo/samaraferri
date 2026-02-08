'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='sobre' className="relative bg-[#020617] pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#590076]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SEÇÃO CTA PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6">
              Pronto para <br />
              <span className="font-serif italic text-purple-300">recalibrar?</span>
            </h2>
            <p className="text-slate-400 text-lg font-light max-w-md">
              Não aceite a dor como parte da sua rotina. Agende sua avaliação fisioterapêutica hoje mesmo.
            </p>
          </motion.div>

          <motion.div 
            className="flex lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://wa.me/5519999496085?text=Ol%C3%A1!%20Gostaria%20agendar%20uma%20consulta!"><button className="group relative px-12 py-6 bg-white text-[#020617] rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 flex items-center gap-3">
                MARCAR CONSULTA <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button></a>
          </motion.div>
        </div>

        {/* GRID DE INFORMAÇÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pt-16 border-t border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-serif italic font-bold">S</div>
              <span className="text-white tracking-[0.2em] uppercase text-sm font-bold">Samara<span className="font-light opacity-50">Bonvento</span></span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed uppercase tracking-widest">
              Fisioterapia de alta performance <br /> e reabilitação.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full border border-white/5 bg-white/5 text-slate-400 hover:text-white hover:border-purple-500 transition-all">
                <Instagram size={18} />
              </a>

            </div>
          </div>

          {/* Links Rápidos */}
          {/* <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['O Método', 'Especialidades', 'Sobre', 'Contato'].map((item) => (
                <li key={item}>
                  <[a href="#" className="text-slate-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-2 group">
                    <div className="w-0 h-[1px] bg-purple-500 transition-all group-hover:w-3" />
                    {item}
                  </a>]
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contato */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone size={18} className="text-purple-500 shrink-0" />
                <span>(19) 99949-6085</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail size={18} className="text-purple-500 shrink-0" />
                <span>samarabonventofisio@gmail.com</span>
              </li>
            </ul>
          </div>
          {/* Horários
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-4">Atendimento</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Seg — Sex:</span>
                <span className="text-slate-300">08:00 - 20:00</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-slate-500">Sábado:</span>
                <span className="text-slate-300">08:00 - 12:00</span>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-tighter italic">
                  ● Somente com agendamento prévio
                </span>
              </div>
            </div>
          </div> */}
        </div>


        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-600 text-[10px] uppercase tracking-widest">
            © {currentYear} Samara Bonvento. Desenvolvido por <a href="https://www.instagram.com/obonvento/?__pwa=1" className="text-slate-400 hover:text-white transition-colors">@obonvento</a>.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-widest transition-colors">Política de Privacidade</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-[10px] uppercase tracking-widest transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}