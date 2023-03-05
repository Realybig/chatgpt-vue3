import { Configuration, OpenAIApi } from "openai";
import { ElMessage } from "element-plus";

const configuration = new Configuration({
  organization: process.env.VUE_APP_ORGANIZATION,
  apiKey: process.env.VUE_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function generateText(messages) {
  try {
    const completions = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      max_tokens: 2048,
      messages,
    });
    console.log(completions);

    return completions.data.choices[0].message;
  } catch (error) {
    ElMessage.error(error.message);
  }
}
