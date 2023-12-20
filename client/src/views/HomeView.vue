<template>
  <el-card v-for="(articel, index) in article_list" :key="index" shadow="hover">
    <el-space>
      <span>{{ articel.create_time }}</span>
      <span>{{ articel.category }}</span>
    </el-space>

    <el-container>
      <el-main>
        <div>{{ articel.title }}</div>
        <div>{{ articel.abstract }}</div>
        <el-space>
          <svg-icon iconClass="icon-zan"></svg-icon>
          <svg-icon iconClass="icon-comment"></svg-icon>
        </el-space>
      </el-main>
      <el-aside width="150px">
        <img src="" alt="" class="image" />
      </el-aside>
    </el-container>
  </el-card>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed, watch } from "vue";
import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";
import svgIcon from "../components/svg-icon.vue";
const router = useRouter();
const route = useRoute();

const axios = inject("axios");

// 文章列表
const article_list = reactive([
  {
    title: "测试标题",
    abstract: "测试摘要",
    content: "测试内容",
    create_time: "2023.12.20",
    category: "测试分类",
    id: "1",
  },
  {
    title: "测试标题",
    abstract: "测试摘要",
    content: "测试内容",
    create_time: "2023.12.20",
    category: "测试分类",
    id: "2",
  },
  {
    title: "测试标题",
    abstract: "测试摘要",
    content: "测试内容",
    create_time: "2023.12.20",
    category: "测试分类",
    id: "3",
  },
]);
</script>

<style lang="scss" scoped>
.el-card {
  min-height: 150px;
  margin-bottom: 10px;
}
.image {
  width: 100%;
  height: 100px;
}
</style>
