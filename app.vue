<template>
  <div>
    <h1>Langchain</h1>
    <div>
      <div>
        <textarea type="text" v-model="input" />
      </div>
      <div>
        <button @click="submit">Submit</button>
      </div>
    </div>
    <div>
      <div>Response</div>
      <div>
        {{ response }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";

const chat = new ChatOpenAI({
  openAIApiKey: useRuntimeConfig().public.openAiKey,
});
const response = ref("");
const input = ref("");

async function submit() {
  const res = await chat.call([new HumanChatMessage(input.value)]);
  response.value = res.text;

  console.log(response);
}
</script>

<style scoped></style>
