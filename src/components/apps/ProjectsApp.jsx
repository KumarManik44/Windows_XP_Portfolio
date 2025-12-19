import { Monitor, Code, ExternalLink } from 'lucide-react';

export default function ProjectsApp() {
    const projects = [
        {
            title: "Claire - Voice AI",
            desc: "Persistent voice assistant with long-term memory (RAG+FAISS) and low-latency pipeline (Deepgram/Gemini/ElevenLabs).",
            tech: ["RAG", "FAISS", "Deepgram", "Gemini", "ElevenLabs"]
        },
        {
            title: "F1 Race Predictor",
            desc: "ML pipeline predicting race outcomes with 93.9% CatBoost accuracy from 1,738 race results. Deployed on Streamlit.",
            tech: ["CatBoost", "MLflow", "Streamlit", "Python"]
        },
        {
            title: "News Summarizer RAG",
            desc: "Real-time news summarization system using FastAPI, Streamlit, and vector search (FAISS) for confidence-scored Q&A.",
            tech: ["FastAPI", "RAG", "FAISS", "Streamlit"]
        },
        {
            title: "Windows XP Portfolio",
            desc: "This nostalgic portfolio website built with React, Vite, and Cloudflare.",
            tech: ["React", "Vite", "Tailwind"]
        },
    ];

    return (
        <div className="h-full bg-white font-sans">
            {/* File Explorer Toolbar */}
            <div className="bg-[#ece9d8] border-b border-gray-300 p-2 flex items-center gap-2 mb-2">
                <span className="text-gray-500 text-sm">Address:</span>
                <div className="bg-white border border-gray-400 px-2 py-0.5 w-full text-sm shadow-inner flex items-center gap-2">
                    <Monitor size={14} className="text-blue-500" />
                    <span>C:\My Documents\My Projects</span>
                </div>
            </div>

            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100%-50px)] overflow-y-auto bg-white">
                {projects.map((p, i) => (
                    <div key={i} className="border rounded p-4 shadow-sm hover:shadow-md transition-shadow group cursor-pointer bg-gray-50 bg-opacity-50">
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="text-blue-600 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-lg text-blue-900 group-hover:underline">{p.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">{p.desc}</p>
                        <div className="flex gap-2 flex-wrap">
                            {p.tech.map(t => (
                                <span key={t} className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs rounded border border-blue-200">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
