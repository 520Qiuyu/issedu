<template>
  <!-- 右侧个人登录信息 -->
  <div class="user-login-info">
    <div class="user-info-wrapper">
      <!-- 顶部的图案 -->
      <div class="top-img"></div>
      <!-- 个人信息 -->
      <div class="user-info">
        <div class="avatar-wrapper">
          <el-avatar :size="64"></el-avatar>
        </div>
        <div class="user-info-title">
          <h1>Hi,</h1>
          <h1>17607117684</h1>
        </div>
      </div>
    </div>
    <div class="task-wrapper">
      <!-- 已完成，未完成 -->
      <div class="finish-condition">
        <span>待完成</span>
        <span>共<i>1</i>项任务</span>
      </div>
      <!-- 任务列表 -->
      <div class="task-list">
        <div class="learning">
          <h1>1</h1>
          <h2>在学课程</h2>
        </div>
        <div class="test">
          <h1>2</h1>
          <h2>测评考试</h2>
        </div>
        <div class="training">
          <h1>3</h1>
          <h2>培训项目</h2>
        </div>
        <div class="class-plan">
          <h1>4</h1>
          <h2>班级计划</h2>
        </div>
      </div>
      <!-- 学习情况 -->
      <div class="learn-condition">
        <h1>正在学</h1>
        <div class="learning-detail">
          <div class="video">
            <img
              src="https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png"
            />
          </div>
          <div class="video-detail">
            <h1 class="video-title">安卓培训课程</h1>
            <h2 class="viceo-progress">
              进度：<span class="progress">0%</span>
            </h2>
          </div>
        </div>
        <div class="to-learn-center">
          <a href="#">进入学习中心</a>
        </div>
      </div>
      <!-- 移动端入口 -->
      <div class="mobile-container">
        <h2>移动端入口</h2>
        <img src="http://47.100.103.124/img/wechat.1baa5bb0.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "UserInfo",
  components: {},
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
.user-login-info {
  width: 280px;
  height: 830px;
  padding: 0 20px 30px;
  box-sizing: border-box;
  background-color: #fff;
  color: #262626;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .user-info-wrapper {
    width: 100%;

    .top-img {
      background-image: url(https://www.issedu365.com/cdnpage/imagedata/product/userImg.png);
      height: 40px;
      background-size: cover;
    }

    .user-info {
      padding: 20px 0 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .user-info-title {
        flex: 1;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        cursor: pointer;
        display: -webkit-box;
        font-size: 20px;
        font-weight: 600;
        overflow: hidden;
        padding-left: 9px;
        text-overflow: ellipsis;
      }
    }
  }

  .task-wrapper {
    width: 100%;

    .finish-condition {
      display: flex;
      justify-content: space-between;
      padding: 0 0 10px;
      margin: 0 0 10px;
      border-bottom: 1px solid #f4f5f7;

      span {
        font-size: 12px;

        i {
          color: red;
          padding: 0 6px;
        }
      }
    }

    .task-list {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-bottom: 20px;

      & > div {
        width: 110px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1 {
          font-size: 30px;
          line-height: 1.4;
        }
        h2 {
          font-size: 14px;
          color: #787878;
          line-height: 20px;
        }
      }

      .learning {
        background: rgba(57, 114, 255, 0.1);
        color: #3972ff;
      }

      .test {
        background: rgba(245, 166, 35, 0.1);
        color: #f5a623;
      }

      .training {
        background: rgba(144, 19, 254, 0.1);
        color: #9013fe;
      }

      .class-plan {
        background: rgba(126, 211, 33, 0.1);
        color: #7ed321;
      }
    }

    .learn-condition {
      color: #262626;
      display: flex;
      flex-direction: column;
      font-size: 12px;
      font-weight: 500;
      justify-content: space-between;

      & > h1 {
        width: 100%;
        border-bottom: 1px solid #f4f5f7;
        margin-bottom: 10px;
        padding-bottom: 10px;
        padding-top: 10px;
      }

      .learning-detail {
        display: flex;
        justify-content: space-between;

        .video {
          border-radius: 4px;
          flex-shrink: 0;
          height: 38px;
          width: 67px;
          overflow: hidden;

          img {
            width: 100%;
            object-fit: cover;
          }
        }

        .video-detail {
          display: flex;
          flex-direction: column;
          font-size: 12.5px;
          height: 38px;
          justify-content: space-between;
          padding-left: 8px;
          width: calc(100% - 67px);

          .video-title {
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            transform: scale(0.8);
            transform-origin: top left;
            white-space: nowrap;
            line-height: 1.8;
          }

          .viceo-progress {
            color: #bfbfbf;
            transform: scale(0.8);
            transform-origin: top left;
            line-height: 1.4;
          }
        }
      }

      .to-learn-center {
        margin-top: 20px;

        a {
          display: block;
          background: #d0021b;
          color: #fff;
          cursor: pointer;
          height: 36px;
          line-height: 36px;
          margin: 20px 0 0;
          text-align: center;
          vertical-align: middle;
          width: 100%;
        }
      }
    }

    .mobile-container {
      margin-top: 20px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        color: #4d555d;
        margin-bottom: 10px;
      }

      img {
        width: 180px;
        object-fit: cover;
      }
    }
  }
}
</style>