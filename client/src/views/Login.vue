<template>
  <el-card shadow="hover" class="box-card">
    <div class="card-header">欢迎登录</div>
    <el-form
      label-position="right"
      label-width="100px"
      :model="admin"
      ref="ruleFormRef"
      :rules="rules"
      style="max-width: 460px"
    >
      <el-form-item label="帐号" prop="account">
        <el-input
          v-model="admin.account"
          @keydown.enter.prevent
          placeholder="请输入帐号"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="admin.password"
          type="password"
          @keydown.enter.prevent
          placeholder="请输入密码"
        />
      </el-form-item>

      <el-form-item>
        <el-space wrap>
          <el-checkbox v-model="admin.remeber" label="记住我" size="large" />
          <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
          <el-button @click="router.push('/home')">返回</el-button>
        </el-space>
      </el-form-item>

      <el-form-item>
        没有帐号，<span class="smallbtn" @click="router.push('/signin')"
          >注册</span
        >一个
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, inject, reactive, h, onMounted, computed, watch } from "vue";
import { ElMessage } from "element-plus";
import { useRouter, useRoute, RouterLink, RouterView } from "vue-router";
const router = useRouter();
const route = useRoute();

const axios = inject("axios");

const ruleFormRef = ref({});
let rules = {
  account: [
    { required: true, message: "请输入账号", trigger: "blur" },
    { min: 3, max: 12, message: "账号长度在3到12个字符", trigger: "blur" },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 18, message: "密码长度在6到18个字符", trigger: "blur" },
  ],
};

const admin = reactive({
  account: localStorage.getItem("account") || "",
  password: localStorage.getItem("password") || "",
  remeber: localStorage.getItem("remeber") == 1 || false,
});

const login = async (formEl) => {
  if (!formEl) {
    return;
  } else {
    await formEl.validate((valid, fields) => {
      if (valid) {
        console.log(admin);
      } else {
        ElMessage.error("请输入帐号密码");
      }
    });
  }
  // let result = await axios.post("/admin/login", {
  //     account: admin.account,
  //     password: admin.password
  // })
  // if (result.data.code == 200) {
  //     adminStore.token = result.data.data.token;
  //     adminStore.account = result.data.data.account;
  //     adminStore.id = result.data.data.id;
  //     if (admin.remeber) {
  //         localStorage.setItem("account", admin.account)
  //         localStorage.setItem("password", admin.password)
  //         localStorage.setItem("remeber", admin.remeber ? 1 : 0)
  //     }
  //     message.success("登录成功")
  //     router.push("/dashboard")
  // } else {
  //     message.error("登录失败")
  // }
};
</script>

<style lang="scss" scoped>
.card-header {
  margin: 15px auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-card {
  width: 500px;
  margin: 0 auto;
  margin-top: 200px;
}
.smallbtn {
  cursor: pointer;
  color: #67c23a;
}
</style>
