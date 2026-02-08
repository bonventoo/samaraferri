'use client';

import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import Header from "@/components/Header"
import { ArrowRight, Star, Activity } from 'lucide-react'; // Instale lucide-react se não tiver

// Variáveis de animação para reutilização e consistência
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.2, 0.65, 0.3, 0.9],
        },
    }),
};

export default function HeroProfessional() {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    // Efeitos de Parallax refinados
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (

        <section
            id="inicio"
            ref={ref}
            className="scroll-mt-32 relative  min-h-screen w-full bg-[#020617] overflow-hidden flex items-center pt-20 pb-0"
        >
            <Header />
            {/* --- BACKGROUND COMPLEXO & TEXTURIZADO --- */}
            {/* --- BACKGROUND COMPLEXO & TEXTURIZADO --- */}
            <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">

                {/* Grade Fina Profissional (Dot/Line Grid) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_20%,transparent_100%)]" />

                {/* Linhas de Acordo com o Design System (opcional: adiciona profundidade) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-[size:100px_100%]" />

                {/* Noise para textura de 'filme' */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

                {/* Spotlights de Luz (Ajustados para destacar a grade) */}
                <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-[#590076]/15 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />

                {/* Gradiente de chão para fusão perfeita */}
                <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

                {/* --- COLUNA ESQUERDA: CONTEÚDO --- */}
                <motion.div
                    style={{ y: textY, opacity: opacityFade }}
                    initial="hidden"
                    animate="visible"
                    className="lg:col-span-7 flex flex-col justify-center items-start pt-10"
                >
                    {/* Badge de Autoridade */}
                    // @ts-ignore
                    <motion.div custom={0} variants={fadeUp} className="mb-6">
                        <div className="inline-flex i'tems-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(89,0,118,0.3)]">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#590076] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9d4edd]"></span>
                            </span>
                            <span className="text-xs font-semibold tracking-widest text-slate-300 uppercase">
                                Traumato-Ortopedia e desportiva
                            </span>
                        </div>
                    </motion.div>

                    {/* Título Editorial */}
                    // @ts-ignore
                    <motion.h1 custom={1} variants={fadeUp} className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] font-light text-white tracking-tight mb-8">
                        A Ciência do <br /> <span className="font-serif italic bg-gradient-to-r from-[#e0aaff] via-[#c77dff] to-white bg-clip-text text-transparent pb-2 pr-2"> Movimento Humano </span>
                    </motion.h1>

                    {/* Descrição Refinada */}
                    // @ts-ignore
                    <motion.p custom={2} variants={fadeUp} className="text-lg text-slate-400 font-light leading-relaxed max-w-xl mb-10 border-l-2 border-white/10 pl-6">
                        Reabilitação de alta performance com tecnologia avançada e cuidado clínico para recuperar seu movimento e sua qualidade de vida.
                    </motion.p>

                    {/* Área de Ação (Botões) */}
                    // @ts-ignore
                    <motion.div custom={3} variants={fadeUp} className="flex flex-wrap items-center gap-5">
                        <a href="https://wa.me/5519999496085?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o!"><button className="group relative px-8 py-4 bg-white text-[#020617] rounded-full font-semibold text-sm tracking-wide overflow-hidden transition-all hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                            <span className="relative flex items-center gap-2">
                                Agendar Avaliação
                            </span>
                        </button></a>


                    </motion.div>

                    {/* Social Proof / Stats Minimalistas */}
                    // @ts-ignore
                    <motion.div custom={4} variants={fadeUp} className="mt-16 flex items-center gap-8 text-slate-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <Activity className="w-5 h-5 text-[#9d4edd]" />
                            <span>Cuidado</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5 text-[#9d4edd]" />
                            <span>Atendimento Premium</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* --- COLUNA DIREITA: IMAGEM & ELEMENTOS FLUTUANTES --- */}
                <div className="lg:col-span-5 p-4 relative h-[600px] lg:h-[800px] flex items-end justify-center lg:justify-end pointer-events-none">

                    {/* Círculo Arquitetônico atrás da foto */}


                    {/* A IMAGEM PRINCIPAL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="relative z-20 w-full max-w-[600px] lg:mr-[-50px]"
                    >
                        {/* Glow sutil atrás especificamente da silhueta */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#590076]/40 via-transparent to-transparent blur-3xl opacity-60 transform translate-y-10" />

                        <Image
                            src="/samarafoto4.webp"
                            alt="Dra. Samara Bonvento"
                            width={1000}
                            height={1200}
                            quality={100}
                            priority
                            className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                            style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                        />

                        {/* Floating Glass Card - Elemento Moderno */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-[20%] -left-6 bg-white/5 border border-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[220px]"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#590076] flex items-center justify-center text-white">
                                <span className="font-serif italic text-lg">S</span>
                            </div>
                            <div>
                                <p className="text-white text-sm font-semibold">Samara Bonvento</p>
                                <p className="text-xs text-slate-400">Fisioterapeuta</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}