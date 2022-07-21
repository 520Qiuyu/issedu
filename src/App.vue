



<template>
  <!-- <Header></Header>
  <router-view></router-view>
  <Footer></Footer> -->
  <el-container>
    <el-header><Header></Header></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer><Footer></Footer></el-footer>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

export default defineComponent({
  name: "app",
  components: { Header, Footer },
});
</script>

<style>
</style>
