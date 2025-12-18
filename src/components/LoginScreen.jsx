import { useStore } from '../store/useStore';
import { User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginScreen() {
    const setPhase = useStore((state) => state.setPhase);

    const handleLogin = () => {
        // Play sound here if we had one
        setPhase('desktop');
    };

    return (
        <div className="h-screen w-screen bg-[#003399] flex items-center justify-center relative overflow-hidden">
            {/* Top and Bottom orange bars - decorative */}
            <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-[#003399] to-[#003399]" />

            <div className="absolute top-0 right-0 p-8">
                <div className="text-white text-4xl italic font-bold opacity-50 flex items-center gap-2">
                    Windows <span className="text-orange-400">XP</span>
                </div>
            </div>

            <div className="w-full max-w-3xl flex items-center gap-0 relative z-10">
                {/* Left Side: Welcome Text */}
                <div className="w-1/2 flex justify-end pr-8 border-r border-[#6487db]/50 py-12">
                    <div className="text-white text-right">
                        <h2 className="text-5xl font-light mb-2 drop-shadow-md">To begin,</h2>
                        <p className="text-2xl opacity-90">click your user name</p>
                    </div>
                </div>

                {/* Right Side: Users */}
                <div className="w-1/2 pl-8 py-12">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-4 cursor-pointer group"
                        onClick={handleLogin}
                    >
                        <div className="w-16 h-16 bg-yellow-400 rounded border-2 border-white/50 flex items-center justify-center shadow-lg group-hover:border-yellow-200">
                            <User className="text-white w-10 h-10" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="text-white text-2xl font-normal group-hover:underline">Kumar</span>
                            <span className="text-blue-200 text-sm">AI Engineer</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-8 left-8 flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-gradient-to-br from-red-500 to-red-700 shadow border border-white/20 flex items-center justify-center cursor-pointer hover:brightness-110">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
                </div>
                <div className="text-white text-sm font-bold">Turn off computer</div>
            </div>
        </div>
    );
}
