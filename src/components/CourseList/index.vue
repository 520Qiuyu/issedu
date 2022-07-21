<template>
  <!-- 课程列表 -->
  <div class="course-list-wrapper">
    <!-- 头部导航 -->
    <div class="course-top-nav">
      <div class="left-nav">
        <h1 class="title">推荐课程</h1>
        <Bread></Bread>
      </div>
      <div class="right-more">
        <h2>
          更多课程<el-icon :size="14" :color="'#D0021B'"
            ><ArrowRightBold
          /></el-icon>
        </h2>
      </div>
    </div>

    <!-- 课程列表外层盒子 -->
    <div class="course-list-box">
      <!-- 课程列表 -->
      <ul class="course-list">
        <!-- 课程项 -->
        <li class="course-list-item" v-for="(item, index) in data" :key="index">
          <!-- 封面 -->
          <div class="cover" :style="`background-image:url(${item.imgUrl})`">
            <div class="course-tag-list">
              <span class="course-tag">Java</span>
              <span class="course-tag">Andriod</span>
            </div>
          </div>
          <!-- 课程信息 -->
          <div class="course-info">
            <div class="title">
              <h1>Andriod在岗培训课程</h1>
            </div>
            <div class="options">
              <p class="option-detail">
                <span>377 学习</span>
                <span
                  ><el-icon><Star></Star></el-icon>12</span
                >
              </p>
              <p class="grade">10.0分</p>
            </div>
            <div class="auth">
              <p class="auth-name">@软通人才发展中心教学教研部</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Bread from "@/components/Bread/index.vue";
export default defineComponent({
  name: "CourseList",
  components: { Bread },
  props: {},
  setup(props, ctx) {
    const data = ref([
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
      {
        imgUrl:
          "https://media.issedu365.com/media/midocument/examineadmin/logo/lrmwtlqmxgyt00a8.png",
        couseClass: ["Java", "Android"],
        courseTitle: "Android在岗培训教程",
        studyNum: 377,
        likeNum: 311,
        grade: 10.0,
        teacher: "@软通人才发展中心教学教研部",
      },
    ]);
    return {
      data,
    };
  },
});
</script>

<style scoped lang="less">
.course-list-wrapper {
  display: flex;
  flex-direction: column;

  .course-top-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;

    .left-nav {
      display: flex;
      align-items: center;

      .title {
        font-size: 24px;
        color: #262626;
        margin-right: 32px;
        font-weight: 600;
      }
    }

    .right-more {
      color: #787878;
      background: #e6e6e6;
      border-radius: 16px;
      font-size: 14px;
      line-height: 24px;
      min-width: 106px;
      box-sizing: border-box;
      padding: 0 8px;

      h2 {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .course-list-box {
    width: 100%;
    box-sizing: border-box;
    padding: 0 7.5px;

    .course-list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 20px 15px;

      .course-list-item {
        background-color: #fff;
        border-radius: 5px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .cover {
          width: 100%;
          height: 120px;
          background-size: cover;
          position: relative;
          padding: 24px 16px 16px;
          box-sizing: border-box;

          .course-tag-list {
            position: absolute;
            bottom: 4px;
            left: 6px;

            span {
              background: rgba(0, 0, 0, 0.2);
              border-radius: 4px;
              color: #fff;
              display: inline-block;
              font-size: 12px;
              height: 18px;
              line-height: 18px;
              margin-right: 5px;
              max-width: 80px;
              overflow: hidden;
              padding: 0 4px;
              text-align: center;
              text-overflow: ellipsis;
              vertical-align: top;
              white-space: nowrap;
            }
          }
        }

        .course-info {
          flex-grow: 1;
          box-sizing: border-box;
          padding: 7px 10px 0;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .title {
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            box-sizing: border-box;
            color: #0d1a26;
            display: -webkit-box;
            font-size: 14px;
            height: 44px;
            line-height: 22px;
            overflow: hidden;
            width: 100%;
          }

          .options {
            p {
              align-items: center;
              box-sizing: border-box;
              display: flex;
              height: 20px;
              line-height: 20px;
              margin: 4px 0;
              margin-right: 10px;
              width: 100%;
            }

            .option-detail {
              span {
                color: #999;
                font-size: 12px;
                margin-right: 5px;
                line-height: 20px;

                &:nth-of-type(2) {
                  display: flex;
                  align-items: center;

                  i {
                    margin-left: 6px;
                  }
                }
              }
            }

            .grade {
              padding-left: 16px;
              color: #93999f;
              font-size: 12px;
            }
          }

          .auth {
            padding: 18px 0 10px;
            p {
              color: #ccc;
              font-size: 12px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>