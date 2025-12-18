import { useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { X, Minus, Square } from 'lucide-react';
import { motion, useDragControls } from 'framer-motion';

import ProjectsApp from '../apps/ProjectsApp';
import ContactApp from '../apps/ContactApp';
import SkillsApp from '../apps/SkillsApp';

export default function Window({ id, title, icon: Icon, content, x, y, zIndex, minimized }) {
    const { closeWindow, minimizeWindow, focusWindow, activeWindowId } = useStore();
    const isActive = activeWindowId === id;
    const constraintsRef = useRef(null);

    // if (minimized) return null; // Logic moved to CSS display style

    return (
        <motion.div
            drag
            dragMomentum={false}
            initial={{ scale: 0.8, opacity: 0, x: x || 100, y: y || 100 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onMouseDown={() => focusWindow(id)}
            style={{ zIndex, display: minimized ? 'none' : 'flex' }}
            className={`absolute w-[600px] h-[400px] bg-[#ece9d8] pointer-events-auto rounded-t-lg shadow-xl flex flex-col border-[3px] ${isActive ? 'border-[#0050da]' : 'border-[#7c9daf]'}`}
        >
            {/* Title Bar */}
            <div
                className={`h-8 flex justify-between items-center px-2 select-none ${isActive ? 'bg-gradient-to-r from-[#0050da] via-[#245edb] to-[#245edb]' : 'bg-gradient-to-r from-[#7c9daf] to-[#9dbbd3]'}`}
            >
                <div className="flex items-center gap-2 text-white font-bold text-shadow-sm text-sm">
                    {Icon && <Icon size={16} />}
                    <span>{title}</span>
                </div>
                <div className="flex items-center gap-1">
                    <button onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }} className="w-5 h-5 bg-[#245edb] rounded flex items-center justify-center text-white border border-white/30 hover:brightness-110 active:scale-95 shadow-inner">
                        <Minus size={12} strokeWidth={4} />
                    </button>
                    <button className="w-5 h-5 bg-[#245edb] rounded flex items-center justify-center text-white border border-white/30 hover:brightness-110 active:scale-95 shadow-inner opacity-50 cursor-not-allowed">
                        <Square size={10} strokeWidth={4} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); closeWindow(id); }} className="w-5 h-5 bg-[#d84030] rounded flex items-center justify-center text-white border border-white/30 hover:brightness-110 active:scale-95 shadow-inner">
                        <X size={12} strokeWidth={4} />
                    </button>
                </div>
            </div>

            {/* Toolbar / Menu Bar Mock */}
            <div className="bg-[#ece9d8] border-b border-gray-300 p-1 flex items-center gap-2 text-xs">
                <span className="px-2 py-0.5 hover:bg-blue-600 hover:text-white cursor-pointer">File</span>
                <span className="px-2 py-0.5 hover:bg-blue-600 hover:text-white cursor-pointer">Edit</span>
                <span className="px-2 py-0.5 hover:bg-blue-600 hover:text-white cursor-pointer">View</span>
                <span className="px-2 py-0.5 hover:bg-blue-600 hover:text-white cursor-pointer">Help</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white m-1 border border-gray-400 relative overflow-hidden text-black text-left">
                {id === 'projects' && <ProjectsApp />}
                {id === 'contact' && <ContactApp />}
                {id === 'skills' && <SkillsApp />}

                {/* Fallback for generic windows */}
                {!['projects', 'contact', 'skills'].includes(id) && (
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">{title}</h2>
                        <p>{content}</p>
                        <p className="mt-2 text-sm text-gray-600">This content is dynamic.</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
