import { createGlobalStyle, css } from "styled-components";

const terminalExtras = css`
  /* Scanlines */
  body::after {
    content: "";
    position: fixed;
    inset: 0;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0, 0, 0, 0.07) 2px,
      rgba(0, 0, 0, 0.07) 4px
    );
    pointer-events: none;
    z-index: 9998;
    animation: scanMove 8s linear infinite;
  }

  @keyframes scanMove {
    from { background-position: 0 0; }
    to   { background-position: 0 100px; }
  }

  /* Cursor piscando */
  .terminal-cursor::after {
    content: "\u2588";
    color: #00ff41;
    animation: cursorBlink 1s step-end infinite;
  }

  @keyframes cursorBlink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }

  /* Efeito glitch */
  .glitch {
    position: relative;
  }

  .glitch:hover::before,
  .glitch:hover::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .glitch:hover::before {
    color: #ff003c;
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
    animation: glitchTop 0.3s steps(2) infinite;
  }

  .glitch:hover::after {
    color: #00d4ff;
    clip-path: polygon(0 60%, 100% 60%, 100% 100%, 0 100%);
    animation: glitchBot 0.3s steps(2) infinite;
  }

  @keyframes glitchTop {
    0%   { transform: translate(-2px, -2px); }
    50%  { transform: translate( 2px,  1px); }
    100% { transform: translate(-1px,  2px); }
  }

  @keyframes glitchBot {
    0%   { transform: translate( 2px,  2px); }
    50%  { transform: translate(-2px, -1px); }
    100% { transform: translate( 1px, -2px); }
  }

  /* Scrollbar */
  ::-webkit-scrollbar       { width: 6px; }
  ::-webkit-scrollbar-track { background: #0a0a0a; }
  ::-webkit-scrollbar-thumb { background: rgba(0,255,65,0.3); border-radius: 3px; }
  ::-webkit-scrollbar-thumb:hover { background: #00ff41; }

  /* Selecao de texto */
  ::selection {
    background: rgba(0, 255, 65, 0.2);
    color: #00ff41;
  }

  @media (prefers-reduced-motion: reduce) {
    body::after { animation: none; }
    .glitch:hover::before,
    .glitch:hover::after { animation: none; }
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => theme.name === "terminal" && terminalExtras}

  [data-theme="terminal"] {
    --background-color: ${({ theme }) => theme.background};
    --text-color: ${({ theme }) => theme.text};
    --button-bg: ${({ theme }) => theme.buttonBg};
    --button-text: ${({ theme }) => theme.buttonText};
    --secondary-text: ${({ theme }) => theme.textSecondary};
    --nav-color: ${({ theme }) => theme.navColor};
    --card-color: ${({ theme }) => theme.cardColor};
    --secondary-color: ${({ theme }) => theme.textMuted};
  }
`;
