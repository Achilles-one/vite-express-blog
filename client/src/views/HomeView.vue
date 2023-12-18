<template>
  <div>
    cesh
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </div>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed } from "vue";

const axios = inject("axios");

import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();

onMounted(() => {
  getTest();
});

const getTest = async () => {
  let res = await axios.get("/test");
  console.log(res);
};
</script>

<style lang="scss" scoped></style>
