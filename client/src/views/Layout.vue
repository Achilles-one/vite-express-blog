<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        :ellipsis="false"
        router
        @select="handleSelect"
        :class="{ isHide: isHide }"
        class="home-fixed"
      >
        <el-menu-item index="/">青柠哒哒哒 </el-menu-item>
        <div class="flex-grow"></div>

        <el-menu-item
          v-for="item in menuList"
          :key="item.code"
          :index="item.path"
          >{{ item.name }}</el-menu-item
        >
      </el-menu>
    </el-header>

    <el-container class="midcontain">
      <el-main style="border: 1px solid #000">
        <RouterView />
      </el-main>

      <el-aside width="200px" style="border: 1px solid #000">Aside</el-aside>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed, watch } from "vue";
import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();

const axios = inject("axios");

// 默认激活的菜单
const activeIndex = ref("1");
// 滚动隐藏头部
const isHide = ref(false);
const oldScrollTop = ref(0);

const menuList = reactive([
  {
    name: "首页",
    path: "/home",
    code: "home",
  },
  {
    name: "小工具",
    path: "/tools",
    code: "tools",
  },
  {
    name: "互动",
    path: "/friends",
    code: "friends",
  },
  {
    name: "关于",
    path: "/about",
    code: "about",
  },
  {
    name: "快乐地发疯地",
    path: "/crazy",
    code: "crazy",
  },
  {
    name: "登录",
    path: "/login",
    code: "login",
  },
]);

onMounted(() => {
  getTest();

  // 监听页面滚动事件
  window.addEventListener("scroll", scrolling);
});

const getTest = async () => {
  let res = await axios.get("/test");
  console.log(res);
};

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};

// 头部导航做鼠标滚动优化
const scrolling = () => {
  // 滚动条距文档顶部的距离（做兼容处理）===》不懂的可以结合画图理清逻辑
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop;
  // 滚动条滚动的距离
  let scrollStep = scrollTop - oldScrollTop.value;
  // 更新——滚动前，滚动条距文档顶部的距离
  oldScrollTop.value = scrollTop;
  if (scrollStep < 0) {
    isHide.value = false;
  } else {
    isHide.value = true;
  }
};
</script>

<style lang="scss" scoped>
.flex-grow {
  flex-grow: 1;
}
.el-header {
  --el-header-padding: 0;
}
.home-fixed {
  width: 100%;
  position: fixed;
  top: 0;
  background: #998c8c;
  box-shadow: 0px 3px 7px 0px rgba(70, 70, 70, 0.35);
  transition: all 0.3s; //添加过渡，优化体验，具体可以根据需求扩展
}

.home-fixed.isHide {
  //这个类名用来动态改变显示藏（关键）
  top: -60px;
}

.midcontain {
  width: 1280px;
  margin: 0 auto;
}
</style>
