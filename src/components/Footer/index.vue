<template>
  <div id="footer" class="footer2">
    <div class="footertop">
      <span><a class="href">帮助</a> <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a></span
      ><span><a class="href">常见问题</a> <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a></span
      ><span><a class="href">隐私条款</a> <a>&nbsp;&nbsp;|&nbsp;&nbsp;</a></span
      ><span
        ><a class="href">版本V14.0.2</a>
        <!----></span
      >
    </div>
    <div class="footerbottom">
      <span>
        <a href="http://beian.miit.gov.cn" target="_blank" class="href"
          >京ICP备17037728号-5&nbsp;&nbsp;</a
        >
      </span>
      Copyright © 2018-<span class="copyRightYear">2022</span>
      &nbsp;邱哥产品研发部
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "",
  components: {},
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
#footer {
  width: 100%;
  height: 100%;
  line-height: 100px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  .footertop {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  .footerbottom {
    width: 100%;
    background: #333333;
    line-height: 70px;
    font-weight: 400;
    font-style: normal;
    color: rgba(255, 255, 255, 0.4);

    a {
      color: rgba(255, 255, 255, 0.4);
    }
  }
}
</style>