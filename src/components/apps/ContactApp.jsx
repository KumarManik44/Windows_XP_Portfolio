export default function ContactApp() {
    return (
        <div className="flex flex-col h-full font-mono text-sm">
            <div className="bg-white flex-1 p-4 overflow-auto outline-none selection:bg-blue-300">
                <p className="mb-4">Standard Notepad - Untitled</p>
                <br />
                <p>--- CONTACT INFORMATION ---</p>
                <br />
                <p>Name: Kumar</p>
                <p>Role: AI Engineer & Frontend Architect</p>
                <p>Location: Bangalore</p>
                <br />
                <p>Email: kumar@example.com</p>
                <p>GitHub: github.com/kumar</p>
                <p>LinkedIn: linkedin.com/in/kumar</p>
                <br />
                <p>---------------------------</p>
                <p className="blink text-black">|</p>
            </div>
        </div>
    );
}
