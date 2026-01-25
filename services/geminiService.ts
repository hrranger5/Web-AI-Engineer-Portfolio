import { GoogleGenAI } from "@google/genai";

const createAIClient = (key?: string) => {
    return new GoogleGenAI({ apiKey: key || process.env.API_KEY });
};

export const askWithSearch = async (prompt: string, key?: string) => {
    const ai = createAIClient(key);
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }],
            },
        });

        const text = response.text;
        const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        
        return { text, grounding };
    } catch (error) {
        console.error("Gemini Search Error:", error);
        throw error;
    }
};

export const askWithMaps = async (prompt: string, location: { lat: number, lng: number }, key?: string) => {
    const ai = createAIClient(key);
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools: [{ googleMaps: {} }],
                toolConfig: {
                    retrievalConfig: {
                        latLng: {
                            latitude: location.lat,
                            longitude: location.lng
                        }
                    }
                }
            },
        });

        const text = response.text;
        const grounding = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
        return { text, grounding };
    } catch (error) {
        console.error("Gemini Maps Error:", error);
        throw error;
    }
};

export const generateVeoVideo = async (prompt: string, key: string) => {
    const ai = createAIClient(key);
    try {
        let operation = await ai.models.generateVideos({
            model: 'veo-3.1-fast-generate-preview',
            prompt: prompt,
            config: {
                numberOfVideos: 1,
                resolution: '720p',
                aspectRatio: '16:9'
            }
        });

        // Polling loop
        while (!operation.done) {
            await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
            operation = await ai.operations.getVideosOperation({ operation: operation });
        }

        const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
        if (!videoUri) throw new Error("No video URI returned");
        
        return `${videoUri}&key=${key}`;
    } catch (error) {
        console.error("Veo Error:", error);
        throw error;
    }
};

// Check for paid key capability wrapper
export const checkApiKeySelection = async () => {
    if (window.aistudio && window.aistudio.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        return hasKey;
    }
    return false;
};

export const promptApiKeySelection = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
        await window.aistudio.openSelectKey();
    }
};
