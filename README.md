# 🖥️ Windows XP Portfolio

A nostalgic, fully functional portfolio website designed to simulate the Windows XP operating system. Built with modern web technologies to showcase my projects and skills as an AI Engineer.

## ✨ Features

- **Authentic Boot Sequence:** Classic BIOS boot screen and loading bar.
- **Login Screen:** User authentication simulation with sound effects.
- **Desktop Environment:** Functional taskbar, start menu, and desktop icons.
- **Window Management:** Draggable, minimizable, and stackable windows (Z-index support).
- **Interactive Apps:**
  - **My Projects:** Grid view of case studies and technical work.
  - **Skills:** Internet Explorer-themed skill showcase.
  - **Contact:** Notepad-themed contact information.
  - **Mobile Responsive:** Adapts gracefully to smaller screens.

## 🛠️ Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS (configured for the "Luna Blue" theme)
- **Animations:** Framer Motion (Window transitions, dragging)
- **State Management:** Zustand (Global OS state)
- **Icons:** Lucide React

## 🚀 Getting Started

To run this project locally:

1. **Clone the repository**
   ```bash
   git clone [https://github.com/KumarManik44/Windows_XP_Portfolio.git](https://github.com/KumarManik44/Windows_XP_Portfolio.git)
   cd Windows_XP_Portfolio

```

2. **Install dependencies**
```bash
npm install

```


3. **Start the development server**
```bash
npm run dev

```


4. Open `http://localhost:5173` in your browser.

## 📦 Deployment

This project is optimized for deployment on Vercel or Netlify.

1. Connect your GitHub repository to Vercel/Netlify.
2. The build settings are auto-detected:
* **Build Command:** `npm run build`
* **Output Directory:** `dist`


3. Click **Deploy**.

## 📝 Customization

To personalize the portfolio content:

* **Projects:** Update `src/data/projects.js` (or similar path in `src/utils`).
* **Resume/Skills:** Edit the content within `src/components/apps/SkillsApp.jsx`.
* **Assets:** Replace images in the `public/` folder.

---

*Built with nostalgia by Kumar.*
