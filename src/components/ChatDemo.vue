<template>
  <div>
    <div class="chat-window">
      <div class="row" v-for="(item, index) in messages" :key="index">
        <div v-if="item.role === 'user' || item.role === 'assistant'">
          <i class="header">{{ item.role === "user" ? "我" : "小管家" }}</i>
          <span class="content">{{ item.content }}</span>
        </div>
        <div v-if="item.role === 'system'">
          <i class="header">系统设定</i>
          <span class="content">{{ item.content }}</span>
        </div>
      </div>
    </div>
    <input v-model="prompt" placeholder="请输入您的问题" />
    <button @click="search">搜索</button>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { generateText } from "@/common/utils";

export default {
  setup() {
    const prompt = ref("");
    const result = ref("");
    /**
     * messages 是用户输入的文本内容，且关联上下文，每次提交需要将上下文提供
     * @type {Array}
     */
    const messages = ref([
      {
        role: "system",
        content: "贴心的小管家",
      },
    ]);

    let talk = {};
    async function search() {
      talk = {
        role: "user",
        content: prompt.value,
      };
      messages.value.push(talk);
      this.text = await generateText(messages.value);
      prompt.value = "";
      messages.value.push(this.text);
    }

    /**
     * 将需要 template 中访问的数据 return 出去
     */
    return { prompt, result, search, messages };
  },
};
</script>

<style lang="less">
.chat-window {
  text-align: left;
}
.row {
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  flex-direction: row;
  padding: 12px 18px;
}
</style>
