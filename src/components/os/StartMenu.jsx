import { useStore } from '../../store/useStore';
import { User, Monitor, Globe, FileText, Settings, LogOut } from 'lucide-react';

export default function StartMenu() {
    const { toggleStartMenu, setPhase, openWindow } = useStore();

    const handleLogout = () => {
        toggleStartMenu();
        setPhase('login');
    };

    return (
        <div className="absolute bottom-[30px] left-0 w-[380px] h-[480px] bg-white rounded-t-lg shadow-2xl z-40 flex flex-col font-sans select-none overflow-hidden"
            style={{
                boxShadow: '2px 4px 10px rgba(0,0,0,0.5)',
                borderTopLeftRadius: '5px',
                borderTopRightRadius: '5px',
                border: '1px solid #000', // Outer darker border
            }}>

            {/* Inner Blue Border Wrapper */}
            <div className="flex-1 flex flex-col border-[2px] border-[#245edb] rounded-t-[4px] relative bg-[#245edb]">

                {/* Header */}
                <div className="h-[60px] flex items-center px-2 gap-3 relative z-10"
                    style={{
                        background: 'linear-gradient(to bottom, #154cbd 0%, #1754d9 6%, #1958eb 12%, #3281fa 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 2px 2px rgba(0,0,0,0.3)',
                        borderTopLeftRadius: '3px',
                        borderTopRightRadius: '3px'
                    }}>
                    <div className="w-[44px] h-[44px] bg-white rounded-[3px] border-[2px] border-[#daeaff] flex items-center justify-center overflow-hidden shadow-sm relative">
                        <div className="absolute inset-0 bg-[#dbe8f7] opacity-20"></div>
                        <User className="text-[#3b80ee] w-8 h-8 drop-shadow-sm" />
                    </div>
                    <span className="text-white font-bold text-[18px]" style={{ textShadow: '1px 1px 1px rgba(0,0,0,0.5)' }}>Kumar</span>
                </div>

                {/* Orange separator line under header */}
                <div className="h-[2px] bg-[#e59700] w-full relative z-20">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f2ae42]" />
                </div>

                {/* Body */}
                <div className="flex-1 flex w-full relative bg-white">

                    {/* Left Column (White) - Apps */}
                    <div className="w-1/2 bg-white px-1 py-2 flex flex-col gap-1">
                        {/* Pinned Items */}
                        <div className="flex flex-col gap-1">
                            <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm group transition-colors"
                                onClick={() => { openWindow({ id: 'skills', title: 'Internet Explorer', icon: Globe, content: 'Skills' }); toggleStartMenu(); }}>
                                <Globe size={28} className="text-[#327dc6] group-hover:text-white filter drop-shadow-sm" />
                                <div>
                                    <div className="font-bold text-[13px] leading-none mb-0.5">Internet</div>
                                    <div className="text-[11px] text-gray-400 group-hover:text-blue-100 leading-none">Internet Explorer</div>
                                </div>
                            </div>

                            <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm group transition-colors"
                                onClick={() => { openWindow({ id: 'contact', title: 'Outlook Express', icon: FileText, content: 'Contact' }); toggleStartMenu(); }}>
                                <FileText size={28} className="text-[#327dc6] group-hover:text-white filter drop-shadow-sm" />
                                <div>
                                    <div className="font-bold text-[13px] leading-none mb-0.5">E-mail</div>
                                    <div className="text-[11px] text-gray-400 group-hover:text-blue-100 leading-none">Outlook Express</div>
                                </div>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="h-[1px] bg-gray-200 w-[90%] mx-auto my-1"></div>

                        {/* Frequent Apps Mock */}
                        <div className="flex flex-col gap-1">
                            <div className="px-2 py-1.5 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm group">
                                <Monitor size={20} className="text-gray-600 group-hover:text-white" />
                                <span className="text-xs">My Projects</span>
                            </div>
                            <div className="px-2 py-1.5 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm group">
                                <Settings size={20} className="text-gray-600 group-hover:text-white" />
                                <span className="text-xs">Settings</span>
                            </div>
                        </div>

                        <div className="flex-1"></div>

                        {/* All Programs */}
                        <div className="flex items-center justify-center p-2 mb-1">
                            <div className="flex items-center gap-1 font-bold text-[11px] text-black hover:bg-[#2f71cd] hover:text-white px-4 py-1.5 rounded-sm cursor-pointer transition-colors shadow-sm bg-white hover:shadow-none">
                                <span>All Programs</span>
                                <div className="w-0 h-0 border-l-[4px] border-l-black border-y-[4px] border-y-transparent group-hover:border-l-white ml-2"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Blue) - System */}
                    <div className="w-1/2 bg-[#d3e5fa] px-1 py-1 flex flex-col gap-1 border-l border-[#95bdee] text-[#00136b]">
                        <div className="py-2"></div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] font-bold leading-tight" onClick={() => { openWindow({ id: 'projects', title: 'My Projects', icon: Monitor, content: 'Projects' }); toggleStartMenu(); }}>
                            <Monitor size={16} /> My Projects
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] font-bold leading-tight" onClick={() => { openWindow({ id: 'contact', title: 'My Documents', icon: FileText, content: 'Contact' }); toggleStartMenu(); }}>
                            <FileText size={16} /> My Documents
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] font-bold leading-tight">
                            <FileText size={16} /> My Pictures
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] font-bold leading-tight">
                            <FileText size={16} /> My Music
                        </div>

                        <div className="w-[90%] h-[1px] bg-[#a8c6e8] mx-auto my-1 shadow-[0_1px_0_white]"></div>

                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Control Panel
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Set Program Access and Defaults
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Printers and Faxes
                        </div>

                        <div className="w-[90%] h-[1px] bg-[#a8c6e8] mx-auto my-1 shadow-[0_1px_0_white]"></div>

                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Help and Support
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Search
                        </div>
                        <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-[11px] leading-tight">
                            <Settings size={16} /> Run...
                        </div>
                    </div>
                </div>

                {/* Orange separator line above footer */}
                <div className="h-[2px] bg-[#e59700] w-full relative z-20">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#f2ae42]" />
                </div>

                {/* Footer */}
                <div className="h-[40px] flex items-center justify-end px-3 gap-3 relative z-10"
                    style={{
                        background: 'linear-gradient(to bottom, #4282e6 0%, #3876db 100%)',
                        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)',
                    }}>
                    <div className="flex items-center gap-1 text-white hover:bg-[#1943a4]/50 px-2 py-1 rounded cursor-pointer transition-colors" onClick={handleLogout} title="Log Off">
                        <LogOut size={16} className="text-[#f8b449]" /> <span className="text-[11px]">Log Off</span>
                    </div>
                    <div className="flex items-center gap-1 text-white hover:bg-[#1943a4]/50 px-2 py-1 rounded cursor-pointer transition-colors" title="Turn Off Computer">
                        <div className="w-4 h-4 rounded-full bg-[#d6411b] border border-white/50 flex items-center justify-center shadow-inner">
                            <div className="w-[2px] h-[6px] bg-white rounded-full"></div>
                        </div>
                        <span className="text-[11px]">Turn Off Computer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
