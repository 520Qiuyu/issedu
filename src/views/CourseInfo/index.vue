<template>
  <div class="course-intro">
    <!-- 顶部课程信息栏 -->
    <div class="top-course-info-wrapper">
      <div
        class="course-img"
        :style="`height: 242px; background-image: url('https://365.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png');`"
      ></div>
      <div class="course-img-mask"></div>
      <div class="course-info-wrapper">
        <!-- 左侧信息 -->
        <div class="left-course-info">
          <div class="course-info-title-wrapper">
            <!-- 上方的面包屑 -->
            <div class="course-bread">全部 / Andriod在岗培训课程</div>
            <!-- 课程title -->
            <div class="course-title-wrapper">
              <div class="course-title">Andriod在岗培训课程</div>
              <div class="course-code"><img src="" alt="二维码" /></div>
              <div class="course-score">10.0 分</div>
            </div>
          </div>
          <div class="other-info-wrapper">
            <ul class="other-info-list">
              <li class="other-info-list-item">
                <span class="big">长期</span>有效
              </li>
              <li class="spilt-point"></li>
              <li class="other-info-list-item">
                <span class="big">374</span>人在学
              </li>
              <li class="spilt-point"></li>
              <li class="other-info-list-item">
                <span class="big">67</span>个计划
              </li>
            </ul>
          </div>
        </div>
        <!-- 右侧学习进度 -->
        <div class="learning-progress">
          <div class="learn-btn">
            <button>继续学习</button>
            <h2 class="course-progress">进度：0%</h2>
          </div>
          <div class="learning-course">
            <h2 class="learning-course-introduce">
              <a title="Android基础技能培训课程介绍"
                >正在学习：01：Android基础技能培训课程介绍</a
              >
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- 中间的内容区 -->
    <div class="course-content-wrapper">
      <!-- 左侧课程tab -->
      <div class="tab">
        <!-- 上方导航栏 -->
        <el-menu
          :mode="'horizontal'"
          :ellipsis="false"
          :text-color="'#0d1a26'"
          :active-text-color="'#1890ff'"
          :default-active="'list'"
        >
          <el-menu-item :index="'introduce'">
            <a>课程介绍</a>
          </el-menu-item>
          <el-menu-item :index="'list'">
            <a>课程目录</a>
          </el-menu-item>
          <el-menu-item :index="'datum'">
            <a>课程资料</a>
          </el-menu-item>
          <el-menu-item :index="'notes'">
            <a>课程笔记</a>
          </el-menu-item>
          <el-menu-item :index="'judge'">
            <a>课程评价</a>
          </el-menu-item>
        </el-menu>
        <!-- 下方内容区 -->
        <div class="course-content">
          <!-- 课程列表 -->
          <div class="course-list">
            <el-menu :default-openeds="[1, 2, 3, 4, 5, 6]">
              <el-sub-menu :index="'1'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第一章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
              <el-sub-menu :index="'2'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第二章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
              <el-sub-menu :index="'3'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第三章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
              <el-sub-menu :index="'4'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第四章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
              <el-sub-menu :index="'5'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第五章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
              <el-sub-menu :index="'6'">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>第一章</span>
                </template>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
                <el-menu-item>安卓开发</el-menu-item>
              </el-sub-menu>
            </el-menu>
          </div>
        </div>
      </div>
      <!-- 右侧教师信息 -->
      <div class="teacher-info-wrapper">
        <!-- 教师姓名信息 -->
        <div class="teacher-name-info">
          <div class="top-title-wrapper">
            <p class="top-title">授课老师</p>
          </div>
          <div class="teacher-info">
            <div class="avatar">
              <el-avatar
                :size="40"
                :src="'https://365.issedu365.com/media/midocument/examineadmin/logo/mq47vly11zczzhe1.jpg'"
              />
            </div>
            <div class="teacher-name">
              <span>夏德旺</span>
              <span>高级教师</span>
            </div>
          </div>
        </div>
        <!-- 教师联系信息 -->
        <div class="teacher-contact-info">
          <div class="top-title-wrapper">
            <p class="top-title">课程联系人</p>
          </div>
          <ul class="contact-way-list">
            <li class="contact-way-item">软通大学教学部</li>
            <li class="contact-way-item">issedu-td@isoftstone.com</li>
            <li class="contact-way-item">010-58749495</li>
          </ul>
        </div>
        <!-- 学员信息 -->
        <div class="students-info">
          <div class="top-title-wrapper">
            <p class="top-title">最新学员</p>
          </div>
          <div class="student-list">
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
            <div class="student-show">
              <el-avatar></el-avatar>
              <span>余双江</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CourseInfo",
  components: {},
  props: {},
  setup(props, ctx) {
    return {};
  },
});
</script>

<style scoped lang="less">
.course-intro {
  position: relative;
  background-color: #f4f5f7;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-course-info-wrapper {
    width: 100%;
    height: 242px;
    overflow: hidden;
    margin-bottom: 15px;
    .course-img {
      width: 100%;
      height: 242px;
      background-size: cover;
      background-position: 50%;

      filter: blur(10px);
    }

    .course-img-mask {
      background: -webkit-linear-gradient(
        left,
        rgba(2, 2, 2, 0.9),
        rgba(2, 2, 2, 0.4),
        rgba(2, 2, 2, 0.3)
      );
      width: 100%;
      height: 242px;
      position: absolute;
      top: 0;
      z-index: 99;
    }

    .course-info-wrapper {
      position: absolute;
      z-index: 999;
      top: 0;
      width: 1160px;
      height: 242px;
      left: 0;
      right: 0;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      padding: 20px 0;
      box-sizing: border-box;

      .left-course-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .course-info-title-wrapper {
          .course-bread {
            color: #ddd;
            font-size: 14px;
            line-height: 1;
          }

          .course-title-wrapper {
            display: flex;
            align-items: center;
            margin: 20px 0 8px;
            .course-title {
              font-size: 28px;
              font-weight: 500;
              height: 36px;
              line-height: 36px;
            }

            .course-code {
              cursor: pointer;
              margin: 0 24px;
              width: 42px;
            }

            .course-score {
              color: #f90;
              display: inline-block;
              font-weight: 600;
              height: 36px;
              line-height: 36px;
              text-align: center;
              background: hsla(0, 0%, 100%, 0.1);
              border-radius: 32px;
              font-size: 20px;
              width: 110px;
            }
          }
        }

        .other-info-wrapper {
          font-size: 14px;
          .other-info-list {
            display: flex;
            align-items: center;
            letter-spacing: 0;

            .other-info-list-item {
              .big {
                font-size: 20px;
              }
            }
            .spilt-point {
              width: 4px;
              height: 4px;
              background-color: #fff;
              border-radius: 50%;
              margin: 0 10px;
              text-align: center;
              font-size: 16px;
              font-weight: 800;
              vertical-align: middle;
            }
          }
        }
      }

      .learning-progress {
        align-self: flex-end;

        & > div {
          width: 240px;
        }

        .learn-btn {
          display: flex;
          flex-direction: column;
          align-items: center;

          button {
            border: none;
            background-color: hsla(0, 0%, 100%, 0.3);
            border-radius: 41px;
            box-sizing: border-box;
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
            line-height: 1.8;
            padding: 12px 20px;
            text-align: center;
            white-space: nowrap;
            width: 230px;
            color: #fff;
          }

          .course-progress {
            margin: 5px 0 10px;
            line-height: 20px;
          }
        }

        .learning-course {
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          cursor: pointer;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: center;
          height: 40px;
          line-height: 1.2;
        }
      }
    }
  }

  .course-content-wrapper {
    width: 1160px;
    display: flex;
    justify-content: space-between;

    .tab {
      width: 858px;
      overflow: hidden;
    }

    .teacher-info-wrapper {
      width: 280px;
      flex-grow: 0;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      & > div {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        border: 1px solid #e5eef3;
        border-radius: 5px;
      }

      .teacher-name-info {
      }

      .teacher-contact-info {
      }

      .students-info {
      }
    }
  }
}
</style>