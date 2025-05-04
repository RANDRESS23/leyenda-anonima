const REQUIRED_ENV_VARS = {
  GOOGLE_SEARCH_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_API_KEY,
  CX_SEARCH_ENGINE_ID: process.env.NEXT_PUBLIC_CX_SEARCH_ENGINE_ID
};

const { GOOGLE_SEARCH_API_KEY, CX_SEARCH_ENGINE_ID } = REQUIRED_ENV_VARS;

export const getCharacterImages = async ({ name }: {name: string }): Promise<string | string[]> => {
  try {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?q=${name}&cx=${CX_SEARCH_ENGINE_ID}&key=${GOOGLE_SEARCH_API_KEY}&searchType=image`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data.items.map((item: { link: string }) => item.link).slice(0, 4);
  } catch (error) {
    console.error("Request error:", error);
    return `Request error: ${error}`;
  }
};
