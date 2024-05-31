import OpenAI from "OpenAI";
import { AnalysisResult } from "./interfaces/analysisResult";
import dotenv from "dotenv";

dotenv.config();
// Set up OpenAI API
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || "" });

export async function analyzeResume(
  resumeText: string,
  jobDescription: string
): Promise<AnalysisResult> {
  let conversations = [
    {
      role: "system",
      name: "system",
      content:
        "You are a human resources assistant. You need to match resumes with job descriptions and provide a score out of 100 for the match in format like 80/100.",
    },
    {
      role: "user",
      name: "user",
      content: `
          Job Description:
          ${jobDescription}
  
          Resume:
          ${resumeText}
          
          Match Score:
          `,
    },
  ];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: conversations as any,
  });

  //   console.log("---------------------------");
  //   console.log(response.choices[0].message.content?.trim());
  //   console.log("---------------------------");
  const matchResponse = response.choices[0].message?.content || "";
  const matchScoreText = matchResponse.match(/(\d{1,3})\/100/);
  let score = 0;
  if (matchScoreText && matchScoreText[1]) {
    score = parseInt(matchScoreText[1], 10);
  }
  const suitability = score > 75 ? "High" : score > 50 ? "Medium" : "Low";

  return {
    response: matchResponse || "",
    score: score,
    suitability: suitability,
  };
}
