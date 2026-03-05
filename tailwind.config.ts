import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    // Exemplo de configuração
    theme: {
        extend: {
            colors: {
                clinical: {
                    50: '#f0f9ff',  // Fundo muito claro
                    100: '#e0f2fe',
                    200: '#bae6fd',
                    300: '#7dd3fc',
                    500: '#0ea5e9', // Cor principal (azul/ciano)
                    600: '#0284c7',
                    700: '#0369a1',
                    900: '#0c4a6e', // Texto escuro
                },
                accent: {
                    light: '#teal-200' // Para o blur de fundo
                }
            },
            backgroundImage: {
                'grid-pattern': "url('/grid.svg')", // Opcional se tiver SVG
            }
        }

    },
    plugins: [],
};
export default config;