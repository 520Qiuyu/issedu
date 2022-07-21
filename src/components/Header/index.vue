<template>
  <!-- 头部导航栏 -->
  <div id="nav">
    <!-- 左侧导航 -->
    <div class="nav-menu">
      <!-- 左侧logo -->
      <router-link to="/" class="logo">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      <!-- 导航列表 -->
      <el-menu
        mode="horizontal"
        :ellipsis="false"
        :router="true"
        :default-active="'/home'"
        :active-text-color="`#4D555D`"
        :text-color="`#4D555D`"
        :background-color="`#fff`"
      >
        <el-menu-item index="/home"><p>首页</p></el-menu-item>
        <el-menu-item index="2"><p>课程学习</p></el-menu-item>
        <el-menu-item index="3"><p>在线考试</p></el-menu-item>
        <el-menu-item index="4"><p>能力认证</p></el-menu-item>
        <el-menu-item index="5"><p>在线学堂</p></el-menu-item>
        <el-menu-item index="6"><p>交流社区</p></el-menu-item>
      </el-menu>
      <!-- <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/" active-class="active">首页</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/" active-class="active">课程学习</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/" active-class="active">在线考试</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/" active-class="active">能力认证</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/" active-class="active">在线学堂</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/" active-class="active">交流社区</router-link>
        </li>
      </ul> -->
    </div>
    <!-- 右侧登录注册相关 -->
    <div class="nav-tool">
      <!-- 搜索框 -->
      <div class="search">
        <input type="text" class="search-input" placeholder="请输入搜索内容" />
        <button class="search-btn">
          <el-icon :size="18" :color="'#4D555D'"><Search /></el-icon>
        </button>
      </div>
      <!-- 消息中心，学习中心 -->
      <div class="message-study">
        <a href="#"
          ><el-icon><Bell /></el-icon><span>消息中心</span></a
        >
        <div class="spilt-line"></div>
        <a href="#"
          ><el-icon><Notebook /></el-icon><span>学习中心</span></a
        >
      </div>
      <!-- 登录注册 -->
      <div class="login">
        <a href="#">登录</a>
        <a href="#">注册</a>
      </div>
      <!-- 用户信息 -->
      <div class="user-info">
        <!-- 用户头像 -->
        <div class="user-avatar">
          <el-avatar :size="30" :src="`./images/avatar_temp.jpg`" />
        </div>
        <!-- 用户名 -->
        <div class="user-name">
          <h2>17607117684</h2>
          <el-icon><ArrowDown /></el-icon><el-icon><ArrowUp /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  components: {},
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  // min-width: 1300px;
  height: 60px;
  line-height: 60px;
  padding: 20px 0px;
  box-sizing: border-box;

  .nav-menu {
    display: flex;
    justify-content: space-between;

    .logo {
      margin-right: 20px;
      img {
        height: 50px;
        vertical-align: middle;
      }
    }

    .el-menu {
      border: none;

      .el-menu-item {
        height: 44px;
        position: relative;
        border: none !important;
        background-color: #fff;
        padding: 0 15px;

        p {
          margin: 18px 0 4px;
          &:hover {
            color: #d7000f;
          }
        }
        &.is-active::after {
          display: inline;
          content: "";
          background-color: #d7000f;
          height: 3px;
          width: 35%;
          position: absolute;
          bottom: -5px;
          border-radius: 1px;
        }
      }
    }
  }

  .nav-tool {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 5px;
    }
    .search {
      height: 40px;
      padding: 0 16px;
      box-sizing: border-box;
      border-radius: 40px;
      border: 1px solid #d9d9d9;

      .search-input {
        border: none;
        outline: none;
        line-height: 1.8;
        font-size: 16px;
        width: 0px;
        transition: width .3s linear;
      }

      &:hover .search-input {
        width: 200px;
      }
      .search-btn {
        background-color: transparent;
        border: none;
        margin-top: 4px;
        padding: 0;
      }
    }

    .message-study {
      width: 122px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: #525a62;
        transform: scale(0.8);
        transition: all 0.2s linear;
        &:hover {
          transform: scale(1);
        }

        span {
          line-height: 1.5;
          font-size: 12px;
          width: 60px;
          text-align: center;
        }
      }

      .spilt-line {
        height: 20px;
        width: 1.5px;
        background-color: #4d555d;
      }
    }

    .login {
      display: none;
      a {
        width: 40px;
        color: #606266;
        line-height: 1.8;
      }
    }

    .user-info {
      width: 140px;
      .user-avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        .el-avatar {
          vertical-align: top !important;
        }
      }

      .user-name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #606266;
        font-size: 14px;

        i {
          margin-left: 5px;
          &:last-of-type {
            display: none;
          }
        }
      }
    }
  }
}
</style>