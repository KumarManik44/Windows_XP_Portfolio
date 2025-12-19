export default function ContactApp() {
    return (
        <div className="flex flex-col h-full font-mono text-sm">
            <div className="bg-white flex-1 p-4 overflow-auto outline-none selection:bg-blue-300">
                <p className="mb-4 font-bold text-center">Resume.txt</p>
                <br />
                <p>--- CONTACT INFORMATION ---</p>
                <p>Name: Kumar</p>
                <p>Role: AI Engineer & Frontend Architect</p>
                <p>Location: Bangalore</p>
                <p>Email: kumar@example.com</p>
                <br />
                <p>--- WORK EXPERIENCE ---</p>
                <br />
                <p className="font-bold">Elevate Labs - AI/ML Intern (Aug 2025 - Sep 2025)</p>
                <p>- Implemented Breast Cancer classification pipeline (96.49% accuracy).</p>
                <p>- Achieved 0.9960 ROC-AUC with precision tuning.</p>
                <br />
                <p className="font-bold">Evoastra Ventures - Data Science Intern (Jul 2025 - Aug 2025)</p>
                <p>- Led cross-functional team bridging business & tech.</p>
                <p>- Fine-tuned LLM pipeline improving inference precision by 40%.</p>
                <br />
                <p>--- CERTIFICATIONS ---</p>
                <p>- GenAI & AI for Leaders (Udemy)</p>
                <p>- Advanced ChatGPT Prompt Engineering (Udemy)</p>
                <p>- Deep Learning with Tensorflow (IBM)</p>
                <p>- Data Science (IBM)</p>
                <p>- Mastering AWS Serverless</p>
                <br />
                <p>---------------------------</p>
                <p className="blink text-black">|</p>
            </div>
        </div>
    );
}
