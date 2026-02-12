import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Assalomu alaykum! IsGaz Guard haqida savolingiz bormi? Men yordam berishga tayyorman.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto open logic removed to be less intrusive, but kept if desired in future.
    // Instead we rely on the animation to draw attention.
    const timer = setTimeout(() => {
      // Optional: setIsOpen(true); 
    }, 2000); 
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${isOpen ? 'hidden' : 'flex'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         <div className={`bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 rounded-xl text-sm font-semibold shadow-xl transition-all duration-300 transform origin-right ${isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
            Savol bering!
         </div>

         <button
          onClick={() => setIsOpen(true)}
          className="relative p-4 bg-blue-600 dark:bg-white text-white dark:text-slate-900 rounded-full shadow-xl shadow-blue-500/30 dark:shadow-white/20 transition-all hover:scale-110 group"
          aria-label="Chatbotni ochish"
        >
          {/* Pulse Effect - Signal tarqatayotganday */}
          <span className="absolute inset-0 rounded-full bg-blue-400 dark:bg-white opacity-75 animate-ping"></span>
          <span className="absolute inset-0 rounded-full border border-white/50 dark:border-slate-900/10"></span>
          <MessageCircle className="w-6 h-6 relative z-10" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] glass-card bg-white dark:bg-[#0a0a0a]/95 rounded-3xl shadow-2xl border border-slate-200 dark:border-white/10 z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-slate-50 dark:bg-white/5 p-4 flex justify-between items-center border-b border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 dark:bg-white rounded-lg shadow-sm">
                 <Bot className="w-5 h-5 text-white dark:text-slate-900" />
              </div>
              <div>
                <h3 className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                   IsGaz AI
                   <Sparkles className="w-3 h-3 text-yellow-500" />
                </h3>
                <p className="text-green-600 dark:text-green-400 text-xs flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide bg-slate-50/50 dark:bg-transparent">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-blue-600 dark:bg-white text-white dark:text-slate-900 rounded-tr-sm'
                      : 'bg-white dark:bg-white/10 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-white/5 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/10 px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-100 dark:border-white/5 shadow-sm">
                  <Loader2 className="w-5 h-5 text-blue-600 dark:text-white animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-transparent border-t border-slate-100 dark:border-white/10 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Savolingizni yozing..."
              className="flex-1 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-blue-600 dark:bg-white text-white dark:text-slate-900 rounded-xl hover:bg-blue-700 dark:hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold shadow-sm"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;