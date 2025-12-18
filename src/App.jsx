import { useStore } from './store/useStore';
import BootSequence from './components/BootSequence';
import LoginScreen from './components/LoginScreen';
import Desktop from './components/os/Desktop';

function App() {
    const phase = useStore((state) => state.phase);

    return (
        <>
            {phase === 'boot' && <BootSequence />}
            {phase === 'login' && <LoginScreen />}
            {phase === 'desktop' && <Desktop />}
        </>
    )
}

export default App
