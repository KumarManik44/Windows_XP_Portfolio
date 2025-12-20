import { useRef, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import { X, Minus, Square } from 'lucide-react';
import { motion, useDragControls } from 'framer-motion';

import ProjectsApp from '../apps/ProjectsApp';
import ContactApp from '../apps/ContactApp';
import SkillsApp from '../apps/SkillsApp';

export default function Window({ id, title, icon: Icon, content, x, y, zIndex, minimized, maximized }) {
    const { closeWindow, minimizeWindow, toggleMaximize, focusWindow, activeWindowId } = useStore();
    const isActive = activeWindowId === id;
    const constraintsRef = useRef(null);

    // Initial position if not provided
    const initialPos = { x: x || 100, y: y || 100 };

    return (
        <motion.div
            drag={!maximized}
            dragMomentum={false}
            initial={{ scale: 0.8, opacity: 0, ...initialPos }}
            animate={{
                scale: 1,
                opacity: 1,
                x: maximized ? 0 : undefined,
                y: maximized ? 0 : undefined,
                width: maximized ? '100%' : '600px',
                height: maximized ? 'calc(100% - 30px)' : '400px', // Subtract taskbar height (~30px)
                transition: { duration: 0.2 }
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            onMouseDown={() => focusWindow(id)}
            style={{ zIndex, display: minimized ? 'none' : 'flex' }}
            className={`absolute bg-[#ece9d8] pointer-events-auto rounded-tl-lg rounded-tr-lg shadow-xl flex flex-col 
                border-[3px] 
                ${isActive ? 'border-[#0054e3]' : 'border-[#7c9daf]'}`}
        >
            {/* Title Bar */}
            <div
                onDoubleClick={() => toggleMaximize(id)}
                className={`h-[30px] flex justify-between items-center px-1 select-none overflow-hidden
                    ${isActive
                        ? 'bg-gradient-to-r from-[#0058ee] via-[#3593ff_4%] via-[#288eff_18%] via-[#1273dc_46%] via-[#036bda_67%] to-[#055194_96%]'
                        : 'bg-gradient-to-r from-[#7697b7] via-[#9dbbd3] to-[#7697b7]'}
                `}
            >
                <div className="flex items-center gap-1.5 text-white font-bold text-shadow-sm text-[13px] pl-1" style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.5)' }}>
                    {Icon && <Icon size={16} />}
                    <span className="truncate">{title}</span>
                </div>

                <div className="flex items-center gap-1 opacity-100">
                    {/* Minimize */}
                    <button
                        onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                        className="w-[21px] h-[21px] bg-[#245edb] rounded-[3px] flex items-center justify-center border border-white/60 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        <Minus size={10} strokeWidth={4} className="text-white drop-shadow-sm translate-y-1" />
                    </button>

                    {/* Maximize / Restore */}
                    <button
                        onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
                        className="w-[21px] h-[21px] bg-[#245edb] rounded-[3px] flex items-center justify-center border border-white/60 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        <Square size={10} strokeWidth={3} className="text-white drop-shadow-sm" />
                    </button>

                    {/* Close */}
                    <button
                        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                        className="w-[21px] h-[21px] bg-[#d84030] rounded-[3px] flex items-center justify-center border border-white/60 hover:brightness-110 active:brightness-90 shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] ml-0.5 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none"></div>
                        <X size={12} strokeWidth={4} className="text-white drop-shadow-sm" />
                    </button>
                </div>
            </div>

            {/* Toolbar / Menu Bar Mock */}
            <div className="bg-[#ece9d8] border-b border-[#d8d2bd] px-1 py-0.5 flex items-center gap-2 text-[11px] text-black">
                <span className="px-1.5 py-0.5 hover:bg-[#1660e5] hover:text-white cursor-pointer transition-none">File</span>
                <span className="px-1.5 py-0.5 hover:bg-[#1660e5] hover:text-white cursor-pointer transition-none">Edit</span>
                <span className="px-1.5 py-0.5 hover:bg-[#1660e5] hover:text-white cursor-pointer transition-none">View</span>
                <span className="px-1.5 py-0.5 hover:bg-[#1660e5] hover:text-white cursor-pointer transition-none">Help</span>
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white m-[3px] border border-[#828790] border-t-[#828790] border-l-[#828790] border-r-[#fff] border-b-[#fff] relative overflow-hidden text-black text-left shadow-[inset_1px_1px_0_0_#000000]">
                <div className="absolute inset-0 border border-[#d8d2bd] border-t-0 border-l-0 pointer-events-none z-10"></div>
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
