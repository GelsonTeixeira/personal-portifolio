import { useState, useRef, useEffect } from "react";
import "./chatbot.css";

const SUGGESTIONS = [
  "Quais tecnologias você usa?",
  "Você está disponível para freela?",
  "Me fala dos seus projetos",
  "Como entro em contato?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Olá! Sou o assistente virtual do Gelson. Pergunte qualquer coisa sobre ele!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    setInput("");
    setHasUnread(false);

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.filter(
            (_, i) => i > 0 || newMessages[0].role === "user"
          ),
        }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Ops, algo deu errado. Tente novamente em instantes!",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating button */}
      <button
        className="chatbot-toggle"
        onClick={() => {
          setOpen((o) => !o);
          setHasUnread(false);
        }}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        {open ? "✕" : "💬"}
        {hasUnread && !open && <span className="chatbot-badge">1</span>}
      </button>

      {/* Chat window */}
      {open && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-avatar">
              <span role="img" aria-label="developer">
                {"🧑‍💻"}
              </span>
            </div>
            <div className="chatbot-header-info">
              <p className="chatbot-header-name">Assistente do Gelson</p>
              <p className="chatbot-header-status">
                <span className="chatbot-status-dot" />
                Online agora
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`chatbot-msg-row ${
                  msg.role === "user" ? "chatbot-msg-user" : "chatbot-msg-bot"
                }`}
              >
                <div
                  className={`chatbot-bubble ${
                    msg.role === "user" ? "bubble-user" : "bubble-bot"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="chatbot-loading">
                <span className="chatbot-dot" />
                <span className="chatbot-dot" />
                <span className="chatbot-dot" />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggestions */}
          {messages.length === 1 && (
            <div className="chatbot-suggestions">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  className="chatbot-suggestion-btn"
                  onClick={() => send(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input area */}
          <div className="chatbot-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Pergunte algo sobre mim..."
              className="chatbot-input"
            />
            <button
              onClick={() => send()}
              disabled={!input.trim() || loading}
              className="chatbot-send-btn"
              aria-label="Enviar mensagem"
            >
              &#x27A4;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
