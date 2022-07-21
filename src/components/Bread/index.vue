<template>
  <div class="bread-list">
    <div
      :class="`bread-item ${index === 0 ? 'active' : ''}`"
      v-for="(bread, index) in breadList"
      :key="index"
    >
      {{ bread }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Bread",
  components: {},
  props: {},
  setup(props, ctx) {
    const breadList = ref([
      "全部",
      "安全生产",
      "招聘训练营",
      "星火计划-PM",
      "先锋战队培养规划",
    ]);
    return {
      breadList,
    };
  },
});
</script>

<style scoped lang="less">
.bread-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .bread-item {
    padding: 0 13px;
    box-sizing: border-box;
    margin-right: 10px;
    border-radius: 16px;
    background-color: #e6e6e6;
    color: #787878;
    font-weight: 400;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    max-width: 136px;
    min-width: 96px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    &.active {
      background: #fff;
      box-shadow: 0 2px 1px #ccc, 0 0 1px #ccc, 0 0 1px #ccc;
      color: #d7000f;
    }
  }
}
</style>