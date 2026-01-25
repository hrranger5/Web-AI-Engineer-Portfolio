# Hafsa Raja - Web & AI Engineer Portfolio

A professional, high-performance portfolio website built with modern web technologies and powered by AI. This project showcases Full-Stack development skills, AI integrations (Google Gemini), and creative UI/UX design.

![Portfolio Preview](https://lh3.googleusercontent.com/d/1g8TQHmlFHEbMQwF9oTjsAOrho8DUnlln)

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: [Google Gemini API](https://ai.google.dev/) (@google/genai SDK)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: CSS Keyframes + Tailwind

## ✨ Features

- **AI-Powered Chat Assistant**: A context-aware chatbot (Gemini 1.5 Flash) that answers questions about skills, experience, and projects. Supports both **Online** (Live API) and **Offline** (Local Knowledge Base) modes.
- **Dynamic Content**: Data-driven components for Experience, Projects, and Testimonials.
- **Responsive Design**: Mobile-first approach with a custom glassmorphism UI.
- **Performance**: Optimized assets, lazy loading, and smooth animations.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add your Google Gemini API Key:
   ```env
   API_KEY=your_google_api_key_here
   ```
   > **Note**: The API key is required for the "Online" mode of the chatbot.

4. **Run Development Server**
   ```bash
   npm run dev
   ```

## 📦 Build for Production

```bash
npm run build
```

## 📄 License

This project is open source.
