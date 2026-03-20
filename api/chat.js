export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format" });
  }

  const systemPrompt = `Você é um assistente virtual do portfólio de Gelson Andrade,
desenvolvedor front-end brasileiro. Responda perguntas sobre ele de forma simpática,
direta e em português.

SOBRE GELSON:
- Desenvolvedor Front-End com paixão por tecnologia e desenvolvimento web
- Tecnologias: React, Vite, Node.js, Python, MongoDB, HTML5, CSS3, Git, GitHub
- Atualmente estuda Desenvolvimento de Sistemas no Vale do Rio Pomba (RPV) e cursa Engenharia de Software
- Seu primeiro contato com a área foi quando criou seu primeiro website, o que despertou sua curiosidade por programação
- Habilidades interpessoais: comunicação, trabalho em equipe, troca de conhecimentos
- Localização: Brasil
- Contato: GitHub (GelsonTeixeira), LinkedIn (gelson-teixeira-andrade), Instagram (@gelson_andrade_)
- E-mail: working.gelson@gmail.com
- Disponibilidade: aberto a freelas, CLT e oportunidades remotas
- Pessoa ativa, competitiva e determinada — pratica futebol e corrida

REGRAS DE RESPOSTA:
- Responda sempre em português
- Seja objetivo (máximo 3 parágrafos curtos)
- Se não souber algo, indique que a pessoa entre em contato diretamente
- Não invente informações`;

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        max_tokens: 400,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices[0].message.content;

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Chat API error:", error);
    return res.status(500).json({ error: "Erro ao processar sua mensagem" });
  }
}
