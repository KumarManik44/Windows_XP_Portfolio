export default function ContactApp() {
    return (
        <div className="flex flex-col h-full font-mono text-sm bg-white">
            <div className="flex-1 p-2 outline-none overflow-auto whitespace-pre-wrap select-text cursor-text font-courier text-black">
                {`Resume.txt

--- CONTACT INFORMATION ---
Name: Kumar Manik
Role: AI Engineer
Email: kumar2000.manik@gmail.com

--- WORK EXPERIENCE ---

Elevate Labs - AI/ML Intern (Aug 2025 - Sep 2025)
- Implemented Breast Cancer classification pipeline (96.49% accuracy).
- Achieved 0.9960 ROC-AUC with precision tuning.

Evoastra Ventures - Data Science Intern (Jul 2025 - Aug 2025)
- Led cross-functional team bridging business & tech.
- Fine-tuned LLM pipeline improving inference precision by 40%.

--- CERTIFICATIONS ---
- GenAI & AI for Leaders (Udemy)
- Advanced ChatGPT Prompt Engineering (Udemy)
- Deep Learning with Tensorflow (IBM)
- Data Science (IBM)
- Mastering AWS Serverless

---------------------------
|`}
            </div>
            {/* Status Bar */}
            <div className="h-6 bg-[#ece9d8] border-t border-gray-300 flex items-center justify-end px-2 text-xs text-black gap-4 select-none">
                <div className="border-l border-gray-400 pl-2 h-4 flex items-center">Ln 1, Col 1</div>
            </div>
        </div>
    );
}
