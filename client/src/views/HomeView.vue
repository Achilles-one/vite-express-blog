<template>
  <div v-for="(articel, index) in article_list" :key="index">
    <div>{{ articel.title }}</div>
  </div>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed, watch } from "vue";
import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();

const axios = inject("axios");

// 文章列表
const article_list = reactive([
  {
    title: "测试标题",
    abstract: "测试摘要",
    content: "测试内容",
    create_time: "",
    category: "",
    id: "",
  },
]);
</script>

<style lang="scss" scoped></style>
