<template>
  <!-- 第一个欢迎图 -->
  <div class="welecome-img">
    <el-carousel :height="'260px'" :trigger="'hover'">
      <el-carousel-item>
        <img
          src="https://media.issedu365.com/media/midocument/examineadmin/20220129/taskfile/a6wdf7jafsi7541xzc6lmo27j3gjv4wl/compress-ocijqdd9ttvqio4j..jpg"
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="https://media.issedu365.com/media/midocument/examineadmin/20211027/logo/eg4k70hrob1hem1onc42wclduk9872ty/compress-arn27ki7viwhxv4u.jpg"
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="https://www.issedu365.com/media/midocument/examineadmin/20210425/taskfile/9gf20y406vv94cugmln0mhmfckhwe947/3iq9kqvhvqinzsor.jpg"
        />
      </el-carousel-item>
      <el-carousel-item>
        <img
          src="https://www.issedu365.com/media/midocument/examineadmin/20210107/taskfile/rcujwy2qcud6qsr36q5d0ya4gxxg2ybh/hd8ca2nyq3pqfzmt.jpg"
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Carousel",
  components: {},
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
.welecome-img {
  width: 100%;
  height: 300px;

  .el-carousel {
    .el-carousel__item {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>