import { Monitor, Code, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProjectsApp() {
    const projects = [
        {
            title: "Claire - Voice AI",
            desc: "Persistent voice assistant with long-term memory (RAG+FAISS) and low-latency pipeline.",
            tech: ["RAG", "FAISS", "Deepgram", "Gemini"]
        },
        {
            title: "F1 Race Predictor",
            desc: "ML pipeline predicting race outcomes with 93.9% CatBoost accuracy. Deployed on Streamlit.",
            tech: ["CatBoost", "MLflow", "Streamlit", "Python"]
        },
        {
            title: "News Summarizer RAG",
            desc: "Real-time news summarization system using FastAPI, Streamlit, and vector search.",
            tech: ["FastAPI", "RAG", "FAISS", "Streamlit"]
        },
        {
            title: "Windows XP Portfolio",
            desc: "This nostalgic portfolio website built with React, Vite, and Cloudflare.",
            tech: ["React", "Vite", "Tailwind"]
        },
    ];

    return (
        <div className="h-full bg-white font-sans flex flex-col">
            {/* Address Bar mock moved to Window.jsx or kept here? Window.jsx creates a generic toolbar. 
                We'll hide the generic one via CSS if we could, but better to just use the content area. 
            */}

            <div className="flex-1 flex overflow-hidden">
                {/* XP Left Sidebar */}
                <div className="w-[180px] bg-[#7ba2e7] flex flex-col gap-3 p-3 overflow-y-auto hidden md:flex"
                    style={{ background: 'linear-gradient(to bottom, #7ba2e7 0%, #6375d6 100%)' }}>

                    {/* Common Tasks Box */}
                    <div className="bg-white rounded-t-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#0c59b2] to-[#1268ce] px-3 py-1 flex justify-between items-center cursor-pointer">
                            <span className="text-white font-bold text-[11px]">Picture Tasks</span>
                            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center border border-white/40"><ChevronUp size={12} className="text-white" /></div>
                        </div>
                        <div className="p-2 bg-[#d6dff7] flex flex-col gap-1">
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>View as a slide show</div>
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>Order prints online</div>
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>Print this picture</div>
                        </div>
                    </div>

                    {/* File and Folder Tasks */}
                    <div className="bg-white rounded-t-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#0c59b2] to-[#1268ce] px-3 py-1 flex justify-between items-center cursor-pointer">
                            <span className="text-white font-bold text-[11px]">File and Folder Tasks</span>
                            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center border border-white/40"><ChevronUp size={12} className="text-white" /></div>
                        </div>
                        <div className="p-2 bg-[#d6dff7] flex flex-col gap-1">
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>Make a new folder</div>
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>Publish this folder to the Web</div>
                            <div className="text-[11px] text-[#215dc6] hover:underline cursor-pointer flex gap-1"><span className="text-black/50">•</span>Share this folder</div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white rounded-t-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-[#0c59b2] to-[#1268ce] px-3 py-1 flex justify-between items-center cursor-pointer">
                            <span className="text-white font-bold text-[11px]">Details</span>
                            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center border border-white/40"><ChevronDown size={12} className="text-white" /></div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 bg-white p-4 h-full overflow-y-auto">
                    <h2 className="text-lg font-bold mb-4">My Projects</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p, i) => (
                            <div key={i} className="flex flex-col group cursor-pointer w-full">
                                {/* XP Card Style: Icon + Text */}
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-contain bg-center bg-no-repeat mb-2 flex items-center justify-center">
                                        <div className="w-12 h-12 bg-blue-100 border border-blue-300 rounded flex items-center justify-center shadow-sm group-hover:bg-blue-200">
                                            <Code className="text-blue-600" size={24} />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-[11px] font-bold text-black group-hover:text-blue-700 group-hover:underline truncate w-full">{p.title}</div>
                                        <div className="text-[10px] text-gray-500 line-clamp-2 leading-tight max-w-[150px] mx-auto opacity-70 group-hover:opacity-100">{p.desc}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
