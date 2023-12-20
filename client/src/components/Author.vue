<template>
  <el-card shadow="hover" class="box-card">
    <el-avatar
      :size="100"
      fit="fill"
      src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    />

    <div>青柠哒哒哒</div>
    <div id="mymotto">{{ signature }}</div>
  </el-card>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed, watch } from "vue";
import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";

const signature = ref("");

onMounted(() => {
  componentDidMount();
});

// 打字机效果
let componentDidMount = () => {
  let str = "Hello World !";
  let i = 0;
  function reduce() {
    if (i > 0) {
      signature.value = str.slice(0, i--);
      setTimeout(reduce, 300);
    } else {
      i = 1;
      signature.value = "_";
      setTimeout(typing, 500);
    }
  }
  function typing() {
    if (i <= str.length) {
      signature.value = str.slice(0, i++) + "_";
      setTimeout(typing, 300);
    } else {
      i = str.length;
      setTimeout(reduce, 500);
    }
  }
  typing();
};
</script>

<style lang="scss" scoped>
.el-card {
  text-align: center;
}
</style>
