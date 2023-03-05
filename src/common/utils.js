import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: process.env.VUE_APP_ORGANIZATION,
  apiKey: process.env.VUE_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateText(messages) {
  const completions = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    max_tokens: 2048,
    messages,
  });

  return completions.data.choices[0].message;
}
