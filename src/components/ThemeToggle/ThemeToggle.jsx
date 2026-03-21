import "./themetoggle.css";

const ICONS = {
  light: "\u2600\uFE0F",
  dark: "\uD83C\uDF19",
  terminal: ">_",
};

const NEXT_LABEL = {
  light: "Modo escuro",
  dark: "Modo terminal",
  terminal: "Modo claro",
};

export default function ThemeToggle({ theme, onCycle }) {
  return (
    <button
      className={`theme-toggle-btn ${theme === "terminal" ? "theme-toggle-terminal" : ""}`}
      onClick={onCycle}
      title={`Trocar para: ${NEXT_LABEL[theme]}`}
      aria-label={`Tema atual: ${theme}. Clique para ${NEXT_LABEL[theme]}`}
    >
      {ICONS[theme]}
    </button>
  );
}
