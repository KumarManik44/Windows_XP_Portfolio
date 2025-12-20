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
            <div className="absolute bottom-0 w-full h-[30px] bg-[#245edb] z-50 flex items-center justify-between select-none"
                style={{
                    background: 'linear-gradient(to bottom, #245edb 0%, #3f8cf3 9%, #245edb 18%, #245edb 92%, #333 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)'
                }}>

                {/* Start Button */}
                <div
                    className={`
                h-full pl-2 pr-4 ml-0 flex items-center gap-1 cursor-pointer transition-colors
                rounded-r-xl relative z-20 
                ${startMenuOpen ? 'brightness-75' : 'hover:brightness-110'}
            `}
                    style={{
                        background: 'linear-gradient(to bottom, #388934 0%, #3d9e35 9%, #4a9b3d 100%)',
                        boxShadow: '2px 2px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)',
                        borderTopRightRadius: '15px',
                        borderBottomRightRadius: '15px',
                        border: '1px solid #1d4b28'
                    }}
                    onClick={toggleStartMenu}
                >
                    <div className="italic font-bold text-white text-shadow-sm flex items-center gap-1 text-[16px] px-1" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>
                        <span className="w-[18px] h-[18px] bg-white rounded-full flex items-center justify-center overflow-hidden mr-1 shadow-sm">
                            <svg viewBox="0 0 88 88" className="w-[14px] h-[14px]">
                                <path fill="#f25022" d="M0 0h42v42H0z" /><path fill="#7fba00" d="M46 0h42v42H46z" /><path fill="#00a4ef" d="M0 46h42v42H0z" /><path fill="#ffb900" d="M46 46h42v42H46z" />
                            </svg>
                        </span>
                        start
                    </div>
                </div>

                {/* Separator / Handle */}
                <div className="w-[2px] h-[70%] bg-[rgba(0,0,0,0.2)] mx-1 border-r border-[rgba(255,255,255,0.1)]"></div>

                {/* Window List */}
                <div className="flex-1 px-1 flex items-center gap-1 overflow-hidden h-full pt-[2px] pb-[2px]">
                    {windows.map((w) => {
                        const isActive = activeWindowId === w.id && !w.minimized;
                        return (
                            <div
                                key={w.id}
                                onClick={() => handleWindowClick(w.id, w.minimized, isActive)}
                                className={`
                            h-[22px] min-w-[120px] max-w-[160px] flex items-center gap-2 px-2 cursor-pointer 
                            text-[11px] truncate border text-white
                            ${isActive
                                        ? 'bg-[#1e52c8] shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)] opacity-100 font-bold'
                                        : 'bg-[#3c81f3] hover:bg-[#5394ff] shadow-[1px_1px_0px_rgba(0,0,0,0.2)] opacity-90'}
                        `}
                                style={{
                                    borderRadius: '2px',
                                    borderColor: isActive ? '#143888' : '#2b6bd8'
                                }}
                            >
                                {w.icon && <w.icon size={12} />}
                                <span className="truncate">{w.title}</span>
                            </div>
                        );
                    })}
                </div>

                {/* Notification Area (Tray) */}
                <div className="h-full bg-[#0b78e3] px-3 flex items-center gap-2 text-white border-l border-[#095bc9] shadow-[inset_1px_0_1px_rgba(0,0,0,0.2)] text-xs ml-2">
                    <div className="flex items-center justify-center opacity-80 hover:opacity-100 cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="drop-shadow-sm">
                            <path d="M14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-4 0h-2.5l-5 5H2v7.5h4.5l5 5V3.23z" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-center leading-none text-[11px]">
                        <span>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                </div>
            </div>

            {startMenuOpen && <StartMenu />}
        </>
    );
}
