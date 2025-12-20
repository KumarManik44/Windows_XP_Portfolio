import { create } from 'zustand'

export const useStore = create((set) => ({
    phase: 'boot', // 'boot' | 'login' | 'desktop'
    startMenuOpen: false,
    windows: [],
    activeWindowId: null,

    setPhase: (phase) => set({ phase }),

    toggleStartMenu: () => set((state) => ({ startMenuOpen: !state.startMenuOpen })),

    openWindow: (window) => set((state) => {
        // If window already exists, focus it
        const exists = state.windows.find((w) => w.id === window.id);
        if (exists) {
            if (exists.minimized) {
                return {
                    windows: state.windows.map((w) => w.id === window.id ? { ...w, minimized: false } : w),
                    activeWindowId: window.id
                }
            }
            return { activeWindowId: window.id };
        }

        // Add new window
        return {
            windows: [...state.windows, { ...window, x: 50 + state.windows.length * 20, y: 50 + state.windows.length * 20, minimized: false, zIndex: state.windows.length + 1 }],
            activeWindowId: window.id,
            startMenuOpen: false // Close start menu on app launch
        }
    }),

    closeWindow: (id) => set((state) => ({
        windows: state.windows.filter((w) => w.id !== id),
        activeWindowId: state.windows.length > 1 ? state.windows[state.windows.length - 2].id : null
    })),

    minimizeWindow: (id) => set((state) => ({
        windows: state.windows.map((w) => w.id === id ? { ...w, minimized: true, maximized: false } : w),
        activeWindowId: null
    })),

    toggleMaximize: (id) => set((state) => ({
        windows: state.windows.map((w) => w.id === id ? { ...w, maximized: !w.maximized } : w),
        activeWindowId: id
    })),

    focusWindow: (id) => set((state) => {
        // Bring to front by increasing zIndex (naive approach, better to just set active and use z-index based on active status or sort)
        // Actually, simple way: keep array order for z-index or a maxZ param. 
        // Let's just set activeWindowId and handle Z-index in component by "active class" or dynamic style? 
        // Windows XP usually manages Z-order stack.
        // We will just use activeWindowId to highlight title bar. For stacking, we can bump the zIndex property.
        const maxZ = Math.max(...state.windows.map(w => w.zIndex || 0), 0);
        return {
            activeWindowId: id,
            windows: state.windows.map(w => w.id === id ? { ...w, zIndex: maxZ + 1, minimized: false } : w)
        }
    }),
}))
