interface OpenRouterResponse {
  choices: {
    message: {
      role: string;
      content: string;
    };
  }[];
}

const REQUIRED_ENV_VARS = {
  DEEPSEEK_API_KEY: process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY,
  DEEPSEEK_API_IA: process.env.NEXT_PUBLIC_DEEPSEEK_API_IA,
  DEEPSEEK_TITLE: process.env.NEXT_PUBLIC_DEEPSEEK_TITLE,
  REFERER: process.env.NEXT_PUBLIC_HTTP_REFERER,
};

const { DEEPSEEK_API_KEY, DEEPSEEK_API_IA, DEEPSEEK_TITLE, REFERER } =
  REQUIRED_ENV_VARS;

export const getCharacter = async ({
  category,
  level,
}: {
  category: string;
  level: string;
}): Promise<string> => {
  try {
    const response = await fetch(`${DEEPSEEK_API_IA}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        "HTTP-Referer": `${REFERER}`,
        "X-Title": `${DEEPSEEK_TITLE}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "deepseek/deepseek-r1:free",
        messages: [
          {
            role: "user",
            content: `
              Quiero que pienses en un personaje ficticio, histórico o popular, según una categoría y nivel de dificultad.

              Las categorías posibles son:
              ["Anime", "Videojuegos", "Películas y series", "Mitología", "Ficción/fantasía", "Personajes históricos", "Famosos reales"]

              La categoría seleccionada es: ${category}

              Los niveles de dificultad son:
              ["Fácil", "Intermedio", "Difícil"]

              El nivel de dificultad seleccionado es: ${level}

              No quiero que expliques nada. No des justificación, ni razones, ni contexto. Simplemente responde con un JSON con las siguientes propiedades:

              {
                "name": "Nombre del personaje",
                "category": "Categoria usada",
                "level": "Nivel usado",
                "description": "Una breve descripción del personaje sin revelar su nombre",
                "hint": "Una pista extra para ayudar a adivinar quién es"
              }

              Asegúrate de que el nombre **no aparezca en la descripción ni en la pista**.

              Solo responde con el formato en JSON. Nada más.
              `,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data: OpenRouterResponse = await response.json();
    return data.choices[0].message.content || "Error: Empty response";
  } catch (error) {
    console.error("Request error:", error);
    return `Request error: ${error}`;
  }
};
