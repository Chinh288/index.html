
import { GoogleGenAI } from "@google/genai";

export async function analyzeSecurityLog(content: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `Bạn là một chuyên gia SOC tier 2. Hãy phân tích đoạn log kỹ thuật sau đây và đưa ra:
1. Xác định mối đe dọa tiềm tàng (nếu có).
2. Các bước phản ứng ưu tiên.
3. Một gợi ý cấu hình rule (Suricata hoặc Wazuh) để bắt được hành vi này.

Nội dung:
${content}

Hãy trả lời bằng tiếng Việt, ngắn gọn, chuyên môn kỹ thuật, không văn hoa.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini analysis failed:", error);
    return "Không thể thực hiện phân tích log vào lúc này. Vui lòng kiểm tra lại nội dung log hoặc cấu hình API.";
  }
}
