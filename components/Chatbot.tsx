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

  // Auto-open logic after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Opens after 2 seconds
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
      {/* Floating Action Button with Pulse Effect */}
      <div 
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 ${isOpen ? 'hidden' : 'flex'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         {/* Tooltip hint */}
         <div className={`bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-xl transition-all duration-300 transform origin-right ${isHovered ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
            Savol bering!
         </div>

         <button
          onClick={() => setIsOpen(true)}
          className="relative p-4 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-110 group"
          aria-label="Chatbotni ochish"
        >
          <span className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-75"></span>
          <MessageCircle className="w-6 h-6 relative z-10" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] glass-card bg-[#0a0a0a]/90 rounded-3xl shadow-2xl border border-white/10 z-50 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-white/5 p-4 flex justify-between items-center border-b border-white/10 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                 <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold flex items-center gap-2">
                   IsGaz AI
                   <Sparkles className="w-3 h-3 text-yellow-400" />
                </h3>
                <p className="text-green-400 text-xs flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                   Online
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-sm'
                      : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 px-4 py-3 rounded-2xl rounded-tl-sm border border-white/5">
                  <Loader2 className="w-5 h-5 text-blue-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-black/20 border-t border-white/10 flex gap-2 backdrop-blur-md">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Savolingizni yozing..."
              className="flex-1 bg-white/5 border border-white/10 text-white placeholder-gray-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-white text-black rounded-xl hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-bold"
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