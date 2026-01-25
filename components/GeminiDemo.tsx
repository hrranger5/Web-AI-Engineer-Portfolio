import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot, User, Loader2, RefreshCw, X, Zap, Key, WifiOff, Wifi } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { PROFILE, SKILLS, EXPERIENCE, PROJECTS } from '../constants';

type Message = {
  role: 'user' | 'model';
  text: string;
};

// --- KNOWLEDGE BASE (Local Answers) ---
const KNOWLEDGE_BASE = {
  intro: `Hi! I'm **${PROFILE.name}**, a Web & AI Engineer. 🚀\n\nI specialize in building **Scalable Web Applications** (MERN Stack) and integrating **AI Agents** (Gemini, OpenAI). I combine clean code with real-world problem solving to deliver production-ready software.`,
  
  skills: `**My Technical Arsenal:** 🛠️\n\n` +
          `💻 **Frontend**: React.js, TypeScript, Tailwind CSS, Angular\n` +
          `⚙️ **Backend**: Node.js, Express, Python (Flask), PHP\n` +
          `🧠 **AI & ML**: Google Gemini API, Dialogflow, NLP, OpenCV\n` +
          `🗄️ **Database**: MongoDB, MySQL, Firebase\n` +
          `🛠️ **Tools**: Docker, Git, Postman, Linux`,

  projects: `**Featured Projects:** 📂\n\n` +
            `1. **HR.AIverse**: A full-stack AI-powered HR platform (React, TS, AI).\n` +
            `2. **Trivia Host**: AI-generated trivia game using Google Search Grounding.\n` +
            `3. **Intern Management System**: Comprehensive CRM for intern tracking (MERN).\n\n` +
            `I focus on solving real problems. Check the **Projects** section for GitHub links!`,

  experience: `**Work Experience:** 💼\n\n` +
              `• **Software Development Intern** @ Code Craft (Python/Flask)\n` +
              `• **Technical Intern** @ Internee.pk (AI Chatbots)\n` +
              `• **Software Engineer Intern** @ Arch Technologies (Backend Security)\n\n` +
              `I have experience working in Agile teams and delivering features on time.`,

  internship: `**Why Hire Me for an Internship?** 🌟\n\n` +
              `✅ **Production-Ready**: I understand SDLC, Git Flow, and clean architecture.\n` +
              `✅ **API Specialist**: Strong experience integrating REST APIs & AI models.\n` +
              `✅ **Fast Learner**: I rapidly adapt to new stacks (e.g., moved from basic JS to Advanced TS/AI).\n` +
              `✅ **Team Player**: Collaborative, communicative, and code-review ready.`,

  availability: `**Availability & Logistics:** 🕒\n\n` +
                `• **Start Date**: Immediately available.\n` +
                `• **Work Type**: Remote, Hybrid, or On-site.\n` +
                `• **Time Zone**: PKT (Pakistan), but fully flexible for US/UK/EU hours.`,

  contact: `**Let's Connect!** 📬\n\n` +
           `📧 Email: **${PROFILE.email}**\n` +
           `📱 Phone: **${PROFILE.phone}**\n` +
           `🔗 LinkedIn: [Profile Link](${PROFILE.linkedin})\n` +
           `🐙 GitHub: [Profile Link](${PROFILE.github})`
};

// Suggestion Chips
const SUGGESTIONS = [
    { label: "👋 Intro", key: "intro" },
    { label: "🛠️ Skills", key: "skills" },
    { label: "🚀 Projects", key: "projects" },
    { label: "💼 Experience", key: "experience" },
    { label: "🎓 Internship", key: "internship" },
    { label: "🕒 Availability", key: "availability" },
    { label: "📬 Contact", key: "contact" },
];

const GeminiDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hi! I'm HRDev Assistant. I can answer questions about ${PROFILE.name.split(' ')[0]}'s projects and skills. Tap a chip below or ask me anything!` }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  
  const effectiveKey = process.env.API_KEY;
  const [hasApiKey, setHasApiKey] = useState(!!effectiveKey);
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const checkRuntimeKey = async () => {
        if (effectiveKey) {
            setHasApiKey(true);
            setIsDemoMode(false);
            return;
        }

        if (window.aistudio?.hasSelectedApiKey) {
            const selected = await window.aistudio.hasSelectedApiKey();
            if (selected) {
                setHasApiKey(true);
                setIsDemoMode(false);
            } else {
                setIsDemoMode(true);
            }
        } else {
            setIsDemoMode(true);
        }
    };
    checkRuntimeKey();
  }, [effectiveKey]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Focus input when chat opens for accessibility
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [messages, isOpen]);

  const getChatSession = () => {
    const keyToUse = process.env.API_KEY;
    if (!keyToUse) throw new Error("Invalid API Key");

    const ai = new GoogleGenAI({ apiKey: keyToUse });
    const systemContext = `
      You are HRDev Assistant, an AI companion for ${PROFILE.name}'s portfolio.
      DATA SOURCES: ${JSON.stringify({ PROFILE, SKILLS, EXPERIENCE, PROJECTS })}
      INSTRUCTIONS: Be casual, professional, and concise. Prioritize the user's question.
    `;

    return ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: { systemInstruction: systemContext },
    });
  };

  const handleModeSwitch = async () => {
    if (isDemoMode) {
        // User wants to go ONLINE
        if (effectiveKey) {
            setIsDemoMode(false);
            setHasApiKey(true);
            setMessages(prev => [...prev, { role: 'model', text: "🌐 **System**: Switched to **Online Mode**. Powered by Gemini 1.5 Flash." }]);
        } else if (window.aistudio?.openSelectKey) {
            try {
                // Must trigger key selection
                await window.aistudio.openSelectKey();
                // Assume success per prompt instructions
                setIsDemoMode(false);
                setHasApiKey(true);
                chatSessionRef.current = null; // Reset session
                setMessages(prev => [...prev, { role: 'model', text: "🌐 **System**: API Key Connected. Switched to **Online Mode**." }]);
            } catch (error) {
                console.error("Key selection failed", error);
                setMessages(prev => [...prev, { role: 'model', text: "⚠️ **System**: Could not connect API Key." }]);
            }
        } else {
             setMessages(prev => [...prev, { role: 'model', text: "⚠️ **System**: No API Key available for Online Mode." }]);
        }
    } else {
        // User wants to go OFFLINE
        setIsDemoMode(true);
        setMessages(prev => [...prev, { role: 'model', text: "🔌 **System**: Switched to **Offline Demo Mode** (Local Knowledge Base)." }]);
    }
  };

  // Check Local Knowledge Base First
  const getLocalResponse = (text: string) => {
    const lower = text.toLowerCase();
    
    // Strict checks for chips/keywords
    if (lower.includes('intro') || lower.includes('hello') || lower.includes('hi ') || lower === 'hi') return KNOWLEDGE_BASE.intro;
    if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech')) return KNOWLEDGE_BASE.skills;
    if (lower.includes('project') || lower.includes('built') || lower.includes('portfolio')) return KNOWLEDGE_BASE.projects;
    if (lower.includes('experien') || lower.includes('work') || lower.includes('job')) return KNOWLEDGE_BASE.experience;
    if (lower.includes('intern') || lower.includes('hire') || lower.includes('why')) return KNOWLEDGE_BASE.internship;
    if (lower.includes('avail') || lower.includes('time') || lower.includes('start') || lower.includes('location')) return KNOWLEDGE_BASE.availability;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('call') || lower.includes('reach')) return KNOWLEDGE_BASE.contact;

    return null;
  };

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || loading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setLoading(true);

    // 1. Try Local Knowledge Base (Instant Answer) if in offline mode OR if online fails
    // Actually, if in Offline mode, we ONLY check local.
    // If in Online mode, we prefer AI, but could use local for simple greetings if we wanted to save tokens.
    // For this demo, let's stick to strict modes.

    if (isDemoMode) {
        const localRes = getLocalResponse(textToSend);
        setTimeout(() => {
            if (localRes) {
                setMessages(prev => [...prev, { role: 'model', text: localRes }]);
            } else {
                setMessages(prev => [...prev, { 
                    role: 'model', 
                    text: "I'm in **Offline Mode** and can only answer specific topics. Try clicking the chips below (Skills, Projects, etc.) or toggle **Online Mode** above for full AI chat." 
                }]);
            }
            setLoading(false);
        }, 600);
        return;
    }

    // 2. Online AI Call
    try {
      if (!chatSessionRef.current) {
        chatSessionRef.current = getChatSession();
      }
      
      const result = await chatSessionRef.current.sendMessage({ message: textToSend });
      setMessages(prev => [...prev, { role: 'model', text: result.text || "I couldn't generate a response." }]);
    } catch (error) {
      console.error("Chat Error:", error);
      // Fallback to offline if error
      setIsDemoMode(true);
      setMessages(prev => [...prev, { 
          role: 'model', 
          text: `⚠️ **Connection Issue**: Switched to **Offline Mode**. Try asking about **Skills**, **Projects**, or **Contact**.` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    chatSessionRef.current = null;
    setMessages([
        { role: 'model', text: `Hi! I'm HRDev Assistant. Tap a chip below or ask me anything!` }
    ]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Chat Assistant" : "Open Chat Assistant"}
        aria-expanded={isOpen}
        aria-controls="chat-window"
        className="fixed bottom-6 right-6 z-[60] p-4 bg-slate-900 text-white rounded-full shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 transform hover:scale-105 group border border-white/20 overflow-hidden focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-text-shimmer opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative flex items-center gap-2">
            {isOpen ? <X size={26} aria-hidden="true" /> : <Sparkles size={26} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />}
            {!isOpen && <span className="hidden sm:inline font-bold pr-1">Ask AI</span>}
        </div>
        <span className={`absolute top-2 right-2 w-2.5 h-2.5 rounded-full border border-slate-900 ${isDemoMode ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} aria-hidden="true"></span>
      </button>

      {isOpen && (
        <div 
            id="chat-window"
            role="dialog"
            aria-label="HRDev Assistant Chat"
            className="fixed bottom-24 right-4 sm:right-6 z-[60] w-[calc(100vw-2rem)] sm:w-[400px] h-[600px] max-h-[80vh] bg-slate-900/95 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-fade-in-up origin-bottom-right ring-1 ring-white/10"
        >
            {/* Header */}
            <div className="px-5 py-4 bg-white/5 border-b border-white/10 flex justify-between items-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>
                
                <div className="flex items-center gap-3 relative z-10">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Bot size={22} className="text-white" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-base tracking-wide leading-none mb-1">
                           Assistant
                        </h3>
                        <div className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${isDemoMode ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'}`} aria-hidden="true"></div>
                            <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">
                                {isDemoMode ? "Offline Mode" : "Gemini Live"}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Mode Toggle & Actions */}
                <div className="flex items-center gap-3 relative z-10">
                    {/* Toggle Switch */}
                    <div className="flex items-center bg-black/40 rounded-full p-1 border border-white/5" title={isDemoMode ? "Switch to Online" : "Switch to Offline"}>
                        <button
                            onClick={handleModeSwitch}
                            aria-label={isDemoMode ? "Switch to Online Mode" : "Switch to Offline Mode"}
                            className={`relative flex items-center justify-center w-8 h-5 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${!isDemoMode ? 'bg-indigo-600' : 'bg-slate-700'}`}
                        >
                            <span 
                                className={`absolute left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${!isDemoMode ? 'translate-x-3.5' : 'translate-x-0'}`}
                            >
                                {isDemoMode ? <WifiOff size={10} className="text-slate-600 absolute inset-0 m-auto" aria-hidden="true" /> : <Wifi size={10} className="text-indigo-600 absolute inset-0 m-auto" aria-hidden="true" />}
                            </span>
                        </button>
                    </div>

                    <button 
                        onClick={handleReset} 
                        className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                        title="Reset Chat"
                        aria-label="Reset Chat Conversation"
                    >
                        <RefreshCw size={18} aria-hidden="true" />
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div 
                className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-slate-700/50 scrollbar-track-transparent"
                role="log" 
                aria-live="polite" 
                aria-atomic="false"
            >
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex items-end gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''} animate-fade-in-up`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] shadow-lg border border-white/10 ${
                            msg.role === 'user' ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'
                        }`} aria-hidden="true">
                            {msg.role === 'user' ? <User size={16} /> : <Zap size={16} fill="currentColor" />}
                        </div>
                        <div className={`max-w-[85%] px-5 py-3.5 text-sm leading-relaxed shadow-lg backdrop-blur-md whitespace-pre-wrap ${
                            msg.role === 'user' 
                                ? 'bg-indigo-500/80 text-white rounded-2xl rounded-br-sm border border-indigo-400/30' 
                                : 'bg-white/10 text-slate-200 rounded-2xl rounded-bl-sm border border-white/10'
                        }`}>
                            <div dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }} />
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex items-end gap-3" role="status" aria-label="Bot is typing">
                        <div className="w-8 h-8 rounded-full bg-indigo-600 border border-white/10 flex items-center justify-center" aria-hidden="true">
                            <Bot size={16} className="text-white" />
                        </div>
                        <div className="bg-white/10 border border-white/10 rounded-2xl rounded-bl-sm px-5 py-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-100"></span>
                            <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input & Chips */}
            <div className="p-4 bg-black/20 backdrop-blur-md border-t border-white/10">
                <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide mb-1 mask-linear" role="group" aria-label="Suggested questions">
                    {SUGGESTIONS.map((suggestion, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSend(suggestion.label)}
                            disabled={loading}
                            className="whitespace-nowrap text-xs font-medium bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 px-3 py-1.5 rounded-xl text-slate-400 transition-all disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                            {suggestion.label}
                        </button>
                    ))}
                </div>

                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder={isDemoMode ? "Ask about skills, projects... (Offline)" : "Ask AI anything... (Online)"}
                        disabled={loading}
                        aria-label="Type your message here"
                        className="w-full bg-black/40 text-white placeholder-slate-500 rounded-2xl pl-4 pr-12 py-4 border border-white/10 focus:outline-none focus:border-indigo-500/50 focus:bg-black/60 focus:ring-1 focus:ring-indigo-500/50 transition-all text-sm disabled:opacity-50 shadow-inner"
                    />
                    <button
                        onClick={() => handleSend()}
                        disabled={!input.trim() || loading}
                        aria-label="Send message"
                        className="absolute right-2 top-2 p-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:opacity-90 disabled:opacity-50 transition-all shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" aria-hidden="true" /> : <Send size={18} aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default GeminiDemo;