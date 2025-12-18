import { Globe, ArrowLeft, ArrowRight, RefreshCw, Home, Search } from 'lucide-react';

export default function SkillsApp() {
    const skills = [
        { cat: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
        { cat: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Designing APIs"] },
        { cat: "AI / ML", items: ["LLMs", "RAG", "Function Calling", "Prompt Engineering"] },
    ];

    return (
        <div className="flex flex-col h-full bg-[#ece9d8]">
            {/* IE Toolbar */}
            <div className="bg-[#ece9d8] border-b border-gray-400 p-1 flex items-center gap-2 shadow-sm">
                <div className="flex gap-1 text-gray-600">
                    <button className="p-1 hover:bg-gray-200 rounded-full border border-transparent hover:border-gray-400 disabled:opacity-50"><ArrowLeft size={16} /></button>
                    <button className="p-1 hover:bg-gray-200 rounded-full border border-transparent hover:border-gray-400 disabled:opacity-50"><ArrowRight size={16} /></button>
                    <button className="p-1 hover:bg-gray-200 rounded-full border border-transparent hover:border-gray-400"><RefreshCw size={16} /></button>
                    <button className="p-1 hover:bg-gray-200 rounded-full border border-transparent hover:border-gray-400"><Home size={16} /></button>
                </div>
                <div className="flex-1 bg-white border border-gray-400 h-6 flex items-center px-2 text-xs gap-2">
                    <Globe size={12} className="text-gray-500" />
                    <span>http://www.kumar-skills.com/welcome.html</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-700 font-bold px-2">
                    <span>Go</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 bg-white p-8 overflow-auto">
                <div className="max-w-3xl mx-auto font-serif">
                    <h1 className="text-3xl text-blue-600 underline mb-6">Technical Skills</h1>

                    <p className="mb-4 text-sm">Welcome to my technical skills page. Here is a summary of my proficiencies.</p>

                    <div className="space-y-6">
                        {skills.map((s, i) => (
                            <div key={i} className="border p-4 bg-[#f1f6fa] border-[#c0d5e9]">
                                <h2 className="font-bold text-gray-800 border-b border-gray-300 pb-2 mb-2">{s.cat}</h2>
                                <ul className="list-disc pl-5 space-y-1">
                                    {s.items.map((item, j) => (
                                        <li key={j} className="text-sm text-gray-700 hover:text-red-500 cursor-help">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 border-t pt-4 text-center text-xs text-gray-500">
                        <p>Designed for Internet Explorer 6.0</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
