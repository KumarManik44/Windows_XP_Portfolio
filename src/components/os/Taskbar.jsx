import { useState, useEffect } from 'react';
import { useStore } from '../../store/useStore';
import StartMenu from './StartMenu';
import { ChevronRight } from 'lucide-react';

export default function Taskbar() {
    const { windows, activeWindowId, startMenuOpen, toggleStartMenu, focusWindow, minimizeWindow } = useStore();
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const handleWindowClick = (id, minimized, isActive) => {
        if (isActive) {
            minimizeWindow(id);
        } else {
            focusWindow(id);
        }
    };

    return (
        <>
            <div className="absolute bottom-0 w-full h-8 bg-[#245edb] z-50 flex items-center justify-between border-t-2 border-[#3f76e3] select-none">

                {/* Start Button */}
                <div
                    className={`
                h-full px-2 lg:px-4 ml-0 flex items-center gap-1 lg:gap-2 cursor-pointer transition-colors
                rounded-r-xl rounded-tr-3xl relative z-20 
                ${startMenuOpen ? 'bg-[#2a4d33] shadow-inner' : 'bg-gradient-to-b from-[#3d9e35] to-[#4a9b3d] hover:brightness-110 shadow-md'}
            `}
                    style={{
                        boxShadow: startMenuOpen ? 'inset 2px 2px 4px rgba(0,0,0,0.5)' : '2px 2px 2px rgba(0,0,0,0.3)',
                        border: '1px solid #fff',
                        borderBottomColor: '#1d4b28',
                        borderRightColor: '#1d4b28',
                    }}
                    onClick={toggleStartMenu}
                >
                    <div className="italic font-bold text-white text-shadow-sm flex items-center gap-1 text-base lg:text-xl px-2">
                        <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center overflow-hidden">
                            <svg viewBox="0 0 88 88" className="w-full h-full">
                                <path fill="#f25022" d="M0 0h42v42H0z" /><path fill="#7fba00" d="M46 0h42v42H46z" /><path fill="#00a4ef" d="M0 46h42v42H0z" /><path fill="#ffb900" d="M46 46h42v42H46z" />
                            </svg>
                        </span>
                        start
                    </div>
                </div>

                {/* Window List */}
                <div className="flex-1 px-2 flex items-center gap-1 overflow-x-auto h-full">
                    {windows.map((w) => {
                        const isActive = activeWindowId === w.id && !w.minimized;
                        return (
                            <div
                                key={w.id}
                                onClick={() => handleWindowClick(w.id, w.minimized, isActive)}
                                className={`
                            h-[85%] min-w-[120px] max-w-[160px] flex items-center gap-2 px-2 cursor-pointer 
                            rounded text-xs text-white truncate border
                            ${isActive
                                        ? 'bg-[#1e48ac] border-[#163a8a] shadow-inner opacity-90'
                                        : 'bg-[#3c81f3] border-[#2b6bd8] hover:bg-[#5394ff] shadow-sm'}
                        `}
                            >
                                {w.icon && <w.icon size={14} />}
                                <span className="truncate">{w.title}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Notification Area (Tray) */}
                <div className="h-full bg-[#0b78e3] px-4 flex items-center gap-2 text-white border-l border-[#095bc9] shadow-inner text-xs">
                    <ChevronRight size={14} className="bg-white/20 rounded-full p-0.5 cursor-pointer hover:bg-white/40" />
                    <div className="flex flex-col items-center leading-none">
                        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            </div>

            {startMenuOpen && <StartMenu />}
        </>
    );
}
