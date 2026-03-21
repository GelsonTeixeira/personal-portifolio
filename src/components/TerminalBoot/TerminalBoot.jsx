import { useState, useEffect } from "react";
import "./terminalboot.css";

const LINES = [
  "Initializing system...",
  "Loading kernel modules............ [OK]",
  "Mounting filesystem................ [OK]",
  "Starting network services.......... [OK]",
  "Establishing secure connection..... [OK]",
  "Loading portfolio data............. [OK]",
  "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  ">> Welcome, visitor.",
  ">> Type your questions below.",
  ">> System ready._",
];

export default function TerminalBoot({ onComplete }) {
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < LINES.length) {
        setLines((prev) => [...prev, LINES[i++]]);
      } else {
        clearInterval(id);
        setDone(true);
        setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 800);
      }
    }, 160);

    return () => clearInterval(id);
  }, []);

  if (!visible) return null;

  return (
    <div className={`terminal-overlay ${done ? "terminal-fading" : ""}`}>
      <div className="terminal-screen">
        <div className="terminal-header-text">PORTFOLIO OS v2.0 &mdash; TERMINAL MODE</div>
        <div className="terminal-divider" />
        {lines.map((line, i) => (
          <div
            key={i}
            className={`terminal-line ${line.startsWith(">>") ? "terminal-highlight" : ""}`}
          >
            {line}
          </div>
        ))}
        {!done && <span className="terminal-cursor-block" />}
      </div>
    </div>
  );
}
