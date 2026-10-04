import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './ChatWidget.css';

export function ChatWidget({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    { text: "Hi there! Welcome to Buildsy. How can I help you build your dream space today?", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;
    
    const userMessage = input.trim();
    // 1. Add user message to UI
    setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
    setInput("");
    setIsTyping(true);

    try {
      // Create .env file at root and add VITE_GEMINI_API_KEY=your_key
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!API_KEY) {
         setMessages(prev => [...prev, { text: "Error: Please add VITE_GEMINI_API_KEY in your .env file to activate my brain. Then restart Vite.", sender: 'bot' }]);
         setIsTyping(false);
         return;
      }
      
      const genAI = new GoogleGenerativeAI(API_KEY);
      // We use flash for fast, conversational responses
      const model = genAI.getGenerativeModel({
        model: "gemini-3.8-flash",
        systemInstruction: "You are the premium Buildsy Expert AI Assistant. You are an expert in luxury interior design, natural marble, trending tiles, robust sanitaryware, and bath fittings. Your tone should be highly professional, encouraging, minimalist, and very helpful. Keep responses concise (under 2/3 paragraphs) and always suggest premium solutions."
      });

      // Prepare Google GenAI Chat History (ignoring the first welcome message if we want)
      // Format: { role: 'user' | 'model', parts: [{ text: "msg" }] }
      const history = messages.slice(1).map(m => ({ 
        role: m.sender === 'user' ? 'user' : 'model', 
        parts: [{ text: m.text }] 
      }));

      const chat = model.startChat({ history });
      const result = await chat.sendMessage(userMessage);
      const response = await result.response;
      const text = response.text();

      setMessages(prev => [...prev, { text, sender: 'bot' }]);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setMessages(prev => [...prev, { text: `System Error: ${error.message || "Failed to reach my brain."}`, sender: 'bot' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chat-widget-container reveal">
      <div className="chat-header">
        <div className="chat-header-info">
          <div className="chat-avatar">AI</div>
          <div>
            <h4>Buildsy Expert</h4>
            <span className="online-status">Online</span>
          </div>
        </div>
        <button className="chat-close" onClick={onClose}>✕</button>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-bubble-wrapper ${msg.sender}`}>
            <div className={`chat-bubble ${msg.sender}`}>
              {/* Parse basic markdown like bold text if needed, doing plain text for now */}
              <span dangerouslySetInnerHTML={{ __html: msg.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}}></span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="chat-bubble-wrapper bot">
            <div className="chat-bubble bot typing-indicator">
              <span></span><span></span><span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      <form className="chat-input-area" onSubmit={handleSend}>
        <input 
          type="text" 
          placeholder="Ask me about tiles, marble, sizes..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isTyping}
        />
        <button type="submit" className="chat-send-btn" disabled={isTyping}>➔</button>
      </form>
    </div>
  );
}
