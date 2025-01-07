<template>
  <Modal v-model="isVisible" fullscreen footer-hide :title="titleName">
    <div class="objective">
      <h3>设计目标: </h3>
      <ul>
        <li>默认隐藏：侧边列表初始状态下隐藏，以减少界面占用空间。</li>
        <li>交互性：用户通过点击按钮来显示和隐藏侧边列表。</li>
        <li>按钮高亮：按钮点击时高亮显示，提供视觉反馈，提示当前列表显示状态。</li>
      </ul>
    </div>
    <div class="boxs">
      <ul class="imgboxs">
        <li v-for="(image, index) in images" :key="image.id" :id="image.id + titleName">
          <div class="lis-box">
            <div v-if="image.text" class="textbox">
              <div class="text">{{ image.text }}</div>
            </div>
            <Image class="img" :src="image.src" fit="cover" width="100%" height="100%" />
            <p class="label">{{ image.label }}</p>
          </div>
        </li>
      </ul>

      <div class="anchor-box">
        <ul class="aboxs">
          <li v-for="(image, index) in images" :key="image.id">
            <div class="lis">
              <span class="dot" v-if="selectedIndex === index"></span>
              <a :href="`#${image.id + titleName}`" :class="{ active: selectedIndex === index }"
                @click="selectItem(index)">
                {{ `${index + 1}. ${image.name}` }}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="objective">
      <h3>交互效果说明: </h3>
      <ul>
        <li>默认情况下，侧边列表隐藏，按钮显示为"灰色"。</li>
        <li>用户点击按钮后，侧边列表显示并且按钮变为高亮状态，显示为"蓝色"。</li>
        <li>再次点击按钮时，侧边列表隐藏，按钮取消高亮状态，恢复为"灰色"。</li>
      </ul>
    </div>
  </Modal>
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const titleName = ref('汇总');
const isVisible = ref(false);

// 图片和链接数据
const images = ref([
  // { id: 'begin', text: '', name: '首页', src: require('../../assets/images/design/edition1th/begin.jpg') },
  { id: 'img1-1', text: '优化前界面', label: '', name: '优化前', src: require('../../assets/images/design/edition3th/1-1.png') },
  { id: 'img2-1', text: '优化后界面', label: '（默认状态）', name: '优化后-图1', src: require('../../assets/images/design/edition3th/2-1.jpg') },
  { id: 'img2-2', text: '', label: '（用户点击按钮后）', name: '优化后-图2', src: require('../../assets/images/design/edition3th/2-2.jpg') },
]);

const selectedIndex = ref(0);


function toggleModal(workName) {
  titleName.value = workName;
  isVisible.value = !isVisible.value;
}


function selectItem(index) {
  selectedIndex.value = index;
}

defineExpose({
  toggleModal
});

</script>

<style lang="less" scoped>
.active {
  /* 高亮颜色，可以根据需要更改 */
  color: #2d8cf0 !important;
  // font-weight: bold;

}

.objective {
  margin-bottom: 12px;

  ul {
    margin-left: 24px;
  }

  li {
    list-style: disc;
  }
}

/* === */

.boxs {
  display: flex;
  box-sizing: border-box;
  background-image: url('https://ye9060.com/uploads/feb957d9-5f57-4d99-b154-e2b3538c9727-bg-1920-01.jpg');
  background-size: cover;
  // background-repeat: no-repeat;
}

.anchor-box {
  width: 20%;
  position: relative;
}

.aboxs {
  border-left: 2px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  padding-left: 16px;
  margin-left: 40px; // 边距

  li {
    padding: 2px;
  }

  a {
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
  }

  .lis {
    position: relative;
    display: flex;

    .dot {
      position: absolute;
      top: 4px;
      left: -21px;
      width: 4px;
      height: 15px;
      background-color: #2d8cf0;
    }
  }
}

.imgboxs {
  width: 80%;
  margin-left: 12px;

  li {
    padding-top: 16px;

    &:first-child {
      padding-top: 8px;
    }
  }

  .lis-box {
    margin-bottom: 20px;
    border: 1px solid rgba(104, 58, 183, 0.4);
    background-color: #fff;
    box-shadow: 4px 5px 10px 0 rgba(123, 116, 133, 0.3);
    transition: all .3s;

    &:hover {
      border: 2px solid #2b1b8f;
      box-shadow: 0px 0px 10px 8px rgba(123, 116, 133, 0.9);
      transform: scale(1.04);
      z-index: 2;
    }

    // &:first-child {
    //   padding-top: 0;
    // }

    .label {
      text-align: center;
      transform: translateY(-16px);
    }
  }

  .img {
    border: 1px solid #3f51b5;
    transform: scale(.9);
  }

  .textbox {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 24px;

    .text {
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
}
</style>