export default function DesktopIcon({ label, icon: Icon, onDoubleClick }) {
    return (
        <div
            className="w-[70px] flex flex-col items-center gap-[2px] p-1 border border-transparent hover:bg-[#0b5fc9]/20 rounded-[2px] cursor-pointer group active:bg-[#0b5fc9]/40 active:border-[#0b5fc9]"
            onDoubleClick={onDoubleClick}
        >
            <Icon size={32} className="text-white drop-shadow-lg filter" style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }} />
            <span
                className="text-white text-[11px] text-center px-[2px] rounded-[1px] line-clamp-2 leading-[1.1] selection:bg-[#0054e3] selection:text-white"
                style={{ textShadow: '1px 1px 1px black', fontFamily: 'Tahoma, sans-serif' }}
            >
                {label}
            </span>
        </div>
    );
}
