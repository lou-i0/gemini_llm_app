const {GoogleGenerativeAI} = require("@google/generative-ai");

// access API as an environment variable
const genAI = new GoogleGenerativeAI(ProcessingInstruction.env.gemini_api);

// Get the relvant gemini AI model by name 
const model = genAI.getGenerativeModel({model:, "something here"})