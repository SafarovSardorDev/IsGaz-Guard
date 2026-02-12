import { GoogleGenAI } from "@google/genai";

// Initialize the client
// NOTE: Ideally, the API key should be in process.env.API_KEY. 
// For this environment, we assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Siz "IsGaz Guard" loyihasining rasmiy virtual yordamchisisiz.
Ismingiz: IsGaz AI.
Til: Faqat O'zbek tilida, rasmiy va ishonchli uslubda javob bering.

Loyiha haqida ma'lumot:
IsGaz Guard — bu is gazi (CO) sizib chiqishini real vaqtda aniqlovchi aqlli xavfsizlik tizimi.
Asosiy funksiyalari:
1. Sensorlar orqali is gazini aniqlash.
2. Ovozli signal (sirena) chalish.
3. Foydalanuvchiga SMS va Telegram xabarnoma yuborish.
4. Gaz quvurini maxsus klapan orqali avtomatik yopish.

Jamoa a'zolari:
- To‘xtaboyeva Gulbahor (Project Manager)
- Haydarbek (Hardware Engineer)
- Safarov Sardor (Software Engineer)

Maqsad: Aholini is gazi zaharlanishidan asrash. Dastlab xonadonlar uchun, keyin korxonalar uchun.

Agar foydalanuvchi loyihaga aloqasi bo'lmagan savol bersa, muloyimlik bilan faqat IsGaz Guard haqida javob bera olishingizni aytib o'ting.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "Uzr, tizimda vaqtinchalik xatolik yuz berdi. Iltimos, qayta urinib ko'ring.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Uzr, server bilan bog'lanishda xatolik yuz berdi.";
  }
};