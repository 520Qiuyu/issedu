<template>
  <div class="dashboard-wrapper">
    <!-- 主页版 -->
    <div id="dashboard">
      <!-- 中间内容区 -->
      <div class="center-content">
        <!-- 头部走马灯 -->
        <Carousel></Carousel>
        <!-- 推荐课程 -->
        <CourseList></CourseList>
        <!-- 能力测评 -->
        <CourseList></CourseList>

        <!-- 讲师列表 -->
        <TeacherList></TeacherList>
      </div>
      <!-- 右侧个人信息 -->
      <UserInfo></UserInfo>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Carousel from "./Carousel/index.vue";
import UserInfo from "./UserInfo/index.vue";
import CourseList from "@/components/CourseList/index.vue";
import TeacherList from "./TeacherList/index.vue";
export default defineComponent({
  name: "Home",
  components: { Carousel, UserInfo, CourseList, TeacherList },
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
.dashboard-wrapper {
  background-image: url(https://www.issedu365.com/cdnpage/imagedata/product/beijing.jpg);
  background-size: cover;
  #dashboard {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    .center-content {
      width: 900px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & > div:not(:first-child) {
        width: 100%;
        margin-bottom: 30px;
      }
    }
  }
}
</style>