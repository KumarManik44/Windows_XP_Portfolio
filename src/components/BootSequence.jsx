import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

export default function BootSequence() {
    const setPhase = useStore((state) => state.setPhase);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPhase('login');
        }, 3500);
        return () => clearTimeout(timer);
    }, [setPhase]);

    return (
        <div className="h-screen w-screen bg-black flex flex-col items-center justify-center text-white cursor-none">
            <div className="flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <div className="text-4xl font-bold mb-2">Microsoft</div>
                    <div className="text-6xl font-extrabold flex gap-2">
                        <span>Windows</span>
                        <span className="text-orange-500">XP</span>
                    </div>
                </motion.div>

                <div className="w-64 h-4 border-2 border-gray-600 rounded p-0.5 mt-8">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-blue-600 rounded-sm"
                    />
                </div>

                <p className="mt-4 text-gray-400 text-sm">Copyright © 1985-2001 Microsoft Corporation</p>
            </div>
        </div>
    );
}
