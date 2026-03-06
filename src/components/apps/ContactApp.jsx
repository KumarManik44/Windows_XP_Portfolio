export default function ContactApp() {
    return (
        <div className="flex flex-col h-full font-mono text-sm bg-white">
            <div className="flex-1 p-2 outline-none overflow-auto whitespace-pre-wrap select-text cursor-text font-courier text-black">
                {`Resume.txt

--- CONTACT INFORMATION ---
Name: Kumar Manik
Role: AI Engineer
Email: kumar2000.manik@gmail.com
Phone: +91 7999493663
Location: Bengaluru, Karnataka

--- SUMMARY ---
AI Engineer specializing in LLM-powered systems, agentic
workflows, and persistent-memory architectures. Proven
experience building production-grade RAG pipelines,
low-latency voice assistants, and scalable AI backends.
Strong ML foundations combined with a product-first
mindset focused on reliability, cost-efficiency, and
real-world deployment.

--- WORK EXPERIENCE ---

Elevate Labs - AI/ML Intern (Aug 2025 - Sep 2025)
- Designed and deployed an end-to-end ML pipeline for
  breast cancer classification using the Wisconsin dataset.
- Achieved 96.49% accuracy, 0.996 ROC-AUC, and 97.5%
  precision, missing only one cancer case after threshold
  optimization.

Evoastra Ventures - Data Science Intern (Jul 2025 - Aug 2025)
- Built a fine-tuned LLM pipeline with custom embeddings
  and Azure-based storage, improving inference precision
  by 40%.
- Acted as the bridge between business stakeholders and
  technical teams, translating requirements into
  deployable systems.

--- CERTIFICATIONS ---
- Advanced Prompt Engineering (Udemy)
- GenAI and Artificial Intelligence (Udemy)
- Data Science (IBM)
- AWS Serverless (Udemy)

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
