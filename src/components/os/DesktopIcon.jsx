export default function DesktopIcon({ label, icon: Icon, onDoubleClick }) {
    return (
        <div
            className="w-20 group flex flex-col items-center gap-1 cursor-pointer p-2 border border-transparent hover:bg-blue-600/20 active:bg-blue-600/40 rounded"
            onDoubleClick={onDoubleClick}
        >
            <div className="w-10 h-10">
                {Icon ? <Icon className="w-full h-full text-white drop-shadow-md" /> : <div className="w-full h-full bg-blue-500" />}
            </div>
            <span className="text-white text-xs text-center drop-shadow-md px-1 bg-transparent group-hover:bg-[#0050da] rounded">
                {label}
            </span>
        </div>
    );
}
