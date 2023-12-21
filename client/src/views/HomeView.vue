<template>
  <el-card v-for="(articel, index) in article_list" :key="index" shadow="hover">
    <el-space>
      <span>{{ articel.create_time }}</span>
      <span>{{ articel.category }}</span>
    </el-space>

    <el-container>
      <el-main>
        <div class="arttitle" @click="goArticle(articel)">
          {{ articel.title }}
        </div>
        <div class="artcontent">{{ articel.abstract }}</div>

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

const goArticle = (article) => {
  console.log(article);
  router.push("/article");
};
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

.el-main {
  --el-main-padding: 10px 10px 10px 0;
}
.arttitle {
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 10px;
}
.artcontent {
  font-size: 15px;
  padding-bottom: 10px;
  min-height: 50px;
}
</style>
