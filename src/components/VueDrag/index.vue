<template>
  <div class="vue-drag">
    <el-container>
      <el-aside>
        <!--使用draggable组件-->
        <div class="itxst">
          <div class="col">
            <draggable
              style="padding: 10px 0px; background-color: #ccc"
              v-model="aside"
              group="site"
              animation="300"
              dragClass="dragClass"
              ghostClass="ghostClass"
              chosenClass="chosenClass"
              @start="onStart"
              @end="onEnd"
            >
              <transition-group>
                <div class="item" v-for="(item, index) in aside" :key="index">
                  {{ item.name }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </div>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <div class="col">
            <draggable
              style="padding: 10px 0px; background-color: #ccc"
              v-model="main"
              group="site"
              animation="300"
              dragClass="dragClass"
              ghostClass="ghostClass"
              chosenClass="chosenClass"
              @start="onStart"
              @end="onEnd"
            >
              <transition-group>
                <div class="item" v-for="(item, index) in main" :key="index">
                  {{ item.name }}
                </div>
              </transition-group>
            </draggable>
          </div>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  name: "VueDrag",
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      aside: [
        {
          name: "输入框",
          group: "form",
          type: "text",
          value: "阿萨德",
        },
        {
          name: "计数器",
          group: "form",
          type: "number",
          value: 1,
        },
        {
          name: "单选框",
          group: "form",
          type: "radio",
          value: 0,
        },
      ],
      main: [],
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
};
</script>

<style scoped>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: red !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.itxst {
  margin: 10px;
}
.title {
  padding: 6px 12px;
}
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
</style>