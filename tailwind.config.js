/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'xp-blue-dark': '#0050da',
                'xp-blue-light': '#245edb',
                'xp-green': '#3d9e35',
                'xp-silver': '#c4c5cf',
                'xp-taskbar': '#245edb', // Approximate taskbar blue
                'xp-bg': '#3366cc', // Fallback desktop color
            },
            fontFamily: {
                sans: ['Tahoma', 'Verdana', 'sans-serif'],
            },
            backgroundImage: {
                'xp-bar-gradient': 'linear-gradient(to bottom, #245edb 0%, #3f76e3 3%, #245edb 6%, #245edb 40%, #1f52c1 100%)',
                'xp-start-gradient': 'radial-gradient(circle, #4a9b3d 0%, #3d9e35 100%)',
            }
        },
    },
    plugins: [],
}
