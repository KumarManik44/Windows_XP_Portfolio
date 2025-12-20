import { Globe, ArrowLeft, ArrowRight, RefreshCw, Home, Search, X } from 'lucide-react';

export default function SkillsApp() {
    const skills = [
        { cat: "Core AI & LLM Systems", items: ["LLMs", "Agentic Systems", "RAG", "Prompt Engineering", "Fine-tuning", "Embeddings"] },
        { cat: "Machine Learning Foundations", items: ["Supervised/Unsupervised Learning", "Neural Networks", "Feature Engineering", "Model Evaluation"] },
        { cat: "MLOps & AI Infrastructure", items: ["FastAPI", "Docker", "MLflow", "CI/CD for ML", "Model Monitoring", "Async Pipelines"] },
        { cat: "Vector Databases & Memory", items: ["FAISS", "ChromaDB", "Pinecone", "Semantic Search"] },
        { cat: "Voice & Multimodal AI", items: ["Deepgram STT", "ElevenLabs TTS", "Low-Latency Audio Pipelines"] },
        { cat: "Cloud Deployment", items: ["AWS", "Azure", "Streamlit", "Hugging Face Spaces"] },
        { cat: "Programming", items: ["Python", "SQL"] },
        { cat: "Soft Skills", items: ["Collaboration", "Problem-Solving", "Debugging", "System Design", "Rapid Learning"] },
    ];

    return (
        <div className="flex flex-col h-full bg-[#ece9d8]">
            {/* IE Toolbar */}
            <div className="bg-[#ece9d8] border-b border-[#aca899] p-0.5 flex flex-col gap-0.5 shadow-sm">

                {/* Standard Buttons */}
                <div className="flex items-center gap-1 px-1">
                    <div className="flex items-center gap-0">
                        <button className="flex items-center gap-1 px-1 py-0.5 hover:bg-white/50 border border-transparent hover:border-black/20 rounded-sm disabled:opacity-50 text-xs">
                            <div className="bg-[#1f7c3d] rounded-full p-0.5"><ArrowLeft size={14} className="text-white" /></div> <span className="text-black">Back</span>
                        </button>
                        <button className="flex items-center gap-1 px-1 py-0.5 hover:bg-white/50 border border-transparent hover:border-black/20 rounded-sm disabled:opacity-50 text-xs text-gray-400">
                            <div className="bg-[#1f7c3d] rounded-full p-0.5 opacity-50"><ArrowRight size={14} className="text-white" /></div>
                        </button>
                    </div>
                    <div className="w-[1px] h-5 bg-gray-400 mx-1"></div>
                    <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black/20 rounded-sm"><RefreshCw size={16} /></button>
                    <button className="p-1 hover:bg-white/50 border border-transparent hover:border-black/20 rounded-sm"><Home size={16} /></button>
                    <div className="w-[1px] h-5 bg-gray-400 mx-1"></div>
                    <button className="flex items-center gap-1 px-1 py-0.5 hover:bg-white/50 border border-transparent hover:border-black/20 rounded-sm text-xs">
                        <Search size={14} /> <span>Search</span>
                    </button>
                </div>

                {/* Address Bar */}
                <div className="flex items-center gap-2 px-1 pb-1">
                    <span className="text-xs text-gray-500">Address</span>
                    <div className="flex-1 bg-white border border-[#7f9db9] h-5 flex items-center px-1 text-xs gap-2 shadow-[inset_1px_1px_1px_rgba(0,0,0,0.1)]">
                        <Globe size={12} className="text-gray-500" />
                        <span className="flex-1 truncate">http://www.kumar-skills.com/welcome.html</span>
                        <div className="text-gray-400"><X size={10} /></div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white font-bold px-2 bg-[#1f7c3d] border border-[#145329] rounded-sm py-0.5 shadow-sm cursor-pointer hover:brightness-110">
                        <span>Go</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white p-6 overflow-auto font-sans" style={{ backgroundImage: 'linear-gradient(#f0f0f0 1px, transparent 1px), linear-gradient(90deg, #f0f0f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                <div className="max-w-4xl mx-auto bg-white border border-gray-300 p-8 shadow-md min-h-full">
                    <div className="flex items-center justify-between border-b-2 border-red-500 pb-2 mb-6">
                        <h1 className="text-2xl font-bold font-serif text-gray-800">Internet Explorer Technical Summary</h1>
                        <span className="text-xs text-gray-400">v6.0.2900</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((s, i) => (
                            <div key={i} className="border border-[#aca899] bg-[#fcfcfc]">
                                <h2 className="bg-[#ece9d8] px-2 py-1 font-bold text-xs border-b border-[#aca899] text-black shadow-sm">{s.cat}</h2>
                                <ul className="p-2 space-y-1">
                                    {s.items.map((item, j) => (
                                        <li key={j} className="text-xs text-blue-800 hover:underline cursor-pointer flex items-center gap-1.5 list-none">
                                            <div className="w-1 h-1 bg-blue-800 rounded-full"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 pt-4 border-t text-center">
                        <button className="bg-[#ece9d8] border border-gray-500 px-4 py-1 text-xs shadow-sm active:shadow-inner active:translate-y-px">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
