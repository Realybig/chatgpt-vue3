// import axios from "axios";
// import { OpenAIApi } from "openai";

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-NjAa74Ol8QlPtduZcmHg56UJ",
  apiKey: process.env.VUE_APP_OPENAI_API_KEY,
});
console.log("========", configuration);
const openai = new OpenAIApi(configuration);

export async function generateText(messages) {
  const completions = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 2048,
    messages,
  });
  //   const response = await openai.listEngines();
  console.log(completions);
  return completions.data.choices[0].message;
}
