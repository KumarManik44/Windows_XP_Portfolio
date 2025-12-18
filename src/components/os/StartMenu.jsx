import { useStore } from '../../store/useStore';
import { User, Monitor, Globe, FileText, Settings, LogOut } from 'lucide-react';

export default function StartMenu() {
    const { toggleStartMenu, setPhase, openWindow } = useStore();

    const handleLogout = () => {
        toggleStartMenu();
        setPhase('login');
    };

    const menuItems = [
        { label: 'Internet', subLabel: 'Internet Explorer', icon: Globe, onClick: () => openWindow({ id: 'skills', title: 'Internet Explorer', icon: Globe, content: 'Skills' }) },
        { label: 'E-mail', subLabel: 'Outlook Express', icon: FileText, onClick: () => openWindow({ id: 'contact', title: 'Contact', icon: FileText, content: 'Contact' }) },
    ];

    return (
        <div className="absolute bottom-8 left-0 w-[380px] h-[500px] bg-white rounded-t-lg shadow-2xl z-50 flex flex-col border-[2px] border-[#245edb] overflow-hidden">

            {/* Header */}
            <div className="h-16 bg-gradient-to-b from-[#245edb] to-[#1e52c8] flex items-center px-2 gap-3 shadow-md relative z-10">
                <div className="w-10 h-10 bg-white rounded border-2 border-white/40 flex items-center justify-center overflow-hidden">
                    <User className="text-blue-500 w-8 h-8" />
                </div>
                <span className="text-white font-bold text-shadow text-lg">Kumar</span>
            </div>

            {/* Body */}
            <div className="flex-1 flex w-full relative">
                <div className="absolute top-0 bottom-0 left-[50%] w-[1px] bg-gray-300 z-0 opacity-50"></div>

                {/* Left Column (White) */}
                <div className="w-1/2 bg-white p-1 flex flex-col gap-1 py-2">
                    {menuItems.map((item, i) => (
                        <div key={i} className="flex flex-col gap-0 p-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm group transition-colors" onClick={() => { item.onClick(); toggleStartMenu(); }}>
                            <div className="flex items-center gap-2">
                                <item.icon size={24} className="text-gray-600 group-hover:text-white" />
                                <div>
                                    <div className="font-bold text-sm leading-tight">{item.label}</div>
                                    <div className="text-xs text-gray-400 group-hover:text-blue-100">{item.subLabel}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="bg-gray-200 h-[1px] my-1 mx-2"></div>
                </div>

                {/* Right Column (Blue) */}
                <div className="w-1/2 bg-[#d3e5fa] p-1 flex flex-col gap-1 py-2 border-l border-[#9dbbd3]">
                    <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-sm font-bold text-[#00136b]" onClick={() => { openWindow({ id: 'projects', title: 'My Projects', icon: Monitor, content: 'Projects' }); toggleStartMenu(); }}>
                        <Monitor size={16} /> My Projects
                    </div>
                    <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-sm font-bold text-[#00136b]" onClick={() => { openWindow({ id: 'contact', title: 'My Documents', icon: FileText, content: 'Contact' }); toggleStartMenu(); }}>
                        <FileText size={16} /> My Documents
                    </div>
                    <div className="bg-[#a8c6e8] h-[1px] my-1 mx-2"></div>
                    <div className="px-2 py-1 flex items-center gap-2 hover:bg-[#2f71cd] hover:text-white cursor-pointer rounded-sm text-sm font-bold text-[#00136b]">
                        <Settings size={16} /> Control Panel
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="h-10 bg-gradient-to-b from-[#245edb] to-[#1e52c8] flex items-center justify-end px-4 gap-2 border-t border-[#3f76e3] shadow-[0_-2px_4px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2 text-white hover:bg-[#1943a4] px-2 py-1 rounded cursor-pointer transition-colors" onClick={handleLogout}>
                    <LogOut size={16} /> <span className="text-sm">Log Off</span>
                </div>
                <div className="flex items-center gap-2 text-white hover:bg-[#1943a4] px-2 py-1 rounded cursor-pointer transition-colors">
                    <div className="w-4 h-4 rounded-full bg-red-500 border border-white/50"></div> <span className="text-sm">Turn Off</span>
                </div>
            </div>
        </div>
    );
}
