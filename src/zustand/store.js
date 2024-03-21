// themeStore.js
import { create } from 'zustand';

const themeStore = create((set) => ({
    theme: {
        id: 1,
        fruit: "Orange",
        colors: {
            primary: "#f39c0b",
            secondary: "#e86f00",
            primaryDark: "#d65609"
        }
    },

    setTheme: (newTheme) => set({ theme: { ...newTheme } }),
}));

export default themeStore;
