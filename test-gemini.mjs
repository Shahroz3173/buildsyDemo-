import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function run() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-3.8-flash" });
    const result = await model.generateContent("Hello?");
    fs.writeFileSync("err.json", JSON.stringify({ success: true, txt: await result.response.text() }, null, 2));
  } catch(e) {
    fs.writeFileSync("err.json", JSON.stringify({ success: false, msg: e.message }, null, 2));
  }
}

run();
