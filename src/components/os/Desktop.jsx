import { useStore } from '../../store/useStore';
import Taskbar from './Taskbar';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import { Monitor, FileText, Globe } from 'lucide-react';

export default function Desktop() {
    const { windows, openWindow } = useStore();

    const handleOpenProjects = () => {
        openWindow({ id: 'projects', title: 'My Projects', icon: Monitor, content: 'Data' });
    };

    const handleOpenContact = () => {
        openWindow({ id: 'contact', title: 'Contact Info', icon: FileText, content: 'Contact' });
    };

    const handleOpenSkills = () => {
        openWindow({ id: 'skills', title: 'Internet Explorer', icon: Globe, content: 'Skills' });
    };

    return (
        <div className="h-screen w-screen bg-[#3366cc] relative overflow-hidden font-sans select-none">
            {/* Bliss Wallpaper Mock - CSS Gradient/Color or Image */}
            {/* We use a color for now as requested or gradient */}
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
                backgroundImage: "url('/bliss.png')"
            }} />

            {/* Desktop Icons Grid */}
            <div className="absolute top-0 left-0 p-4 bottom-10 flex flex-col flex-wrap content-start gap-4 z-0">
                <DesktopIcon label="My Projects" icon={Monitor} onDoubleClick={handleOpenProjects} />
                <DesktopIcon label="Contact Info" icon={FileText} onDoubleClick={handleOpenContact} />
                <DesktopIcon label="Internet Explorer" icon={Globe} onDoubleClick={handleOpenSkills} />
            </div>

            {/* Windows Layer */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {windows.map((w) => (
                    <Window key={w.id} {...w} />
                ))}
            </div>

            {/* Taskbar */}
            <Taskbar />
        </div>
    );
}
