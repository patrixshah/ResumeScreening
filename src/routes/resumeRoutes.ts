import { Router, Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";
import { analyzeResume } from "../analyzeResume";

const router = Router();
// Set up multer for file uploads
const upload = multer({ dest: "uploads/" });

router.post(
  "/upload",
  upload.single("resume"),
  async (req: Request, res: Response) => {
    try {
      const resume = req.file;
      const jobDescription = req.body.jobDescription;

      if (!resume) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      // Extract text from the resume
      const resumeText = await extractTextFromFile(resume);

      // Call OpenAI API to analyze resume against job description
      const analysis = await analyzeResume(resumeText, jobDescription);
      const response = {
        fileName: resume.originalname,
        analysisResponse: analysis.response,
        score: analysis.score,
        suitability: analysis.suitability,
      };

      res.status(200).json(response);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: "something goes wrong!!!" });
      }
    }
  }
);

async function extractTextFromFile(file: Express.Multer.File): Promise<string> {
  const filePath = path.resolve(file.path);
  const fileExt = path.extname(file.originalname).toLowerCase();

  if (fileExt === ".pdf") {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    return data.text;
  } else if (fileExt === ".docx" || fileExt === ".doc") {
    const data = await mammoth.extractRawText({ path: filePath });
    return data.value;
  } else {
    throw new Error("Unsupported file type");
  }
}

export default router;
