// Minimal sound utility using Web Audio API to avoid external asset dependencies for the demo.
// In a real app, these would be mp3/wav files.

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const playTone = (freq, type, duration) => {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
};

export const playSound = (name) => {
    switch (name) {
        case 'startup':
            // "XP Startup" chord mock
            setTimeout(() => playTone(300, 'sine', 1), 0);
            setTimeout(() => playTone(400, 'sine', 1), 200);
            setTimeout(() => playTone(500, 'sine', 1.5), 400);
            setTimeout(() => playTone(600, 'sine', 2), 600);
            break;
        case 'shutdown':
            // "XP Shutdown" chord mock
            setTimeout(() => playTone(600, 'sine', 0.5), 0);
            setTimeout(() => playTone(500, 'sine', 0.5), 200);
            setTimeout(() => playTone(400, 'sine', 0.5), 400);
            setTimeout(() => playTone(300, 'sine', 0.8), 600);
            break;
        case 'login':
            playTone(800, 'triangle', 0.4);
            break;
        case 'error':
            playTone(150, 'sawtooth', 0.3);
            break;
        case 'click':
            playTone(1200, 'triangle', 0.05);
            break;
        case 'exclamation':
            playTone(800, 'square', 0.2);
            break;
        default:
            break;
    }
};
