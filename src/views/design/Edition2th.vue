<template>
  <Modal v-model="isVisible" fullscreen footer-hide :title="titleName">
    <div class="boxs">
      <ul class="imgboxs">
        <li v-for="(image, index) in images" :key="image.id" :id="image.id + titleName">
          <div v-if="image.text" class="textbox">
            <div class="text">{{ image.text }}</div>
          </div>
          <Image class="img" :src="image.src" fit="cover" width="100%" height="100%" />
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
  </Modal>
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const titleName = ref('汇总');
const isVisible = ref(false);

// 图片和链接数据
const images = ref([
  { id: 'begin', text: '', name: '首页', src: require('../../assets/images/design/edition1th/begin.jpg') },
  { id: 'img01', text: '医生端 - 调整后的界面 - 列表隐藏', name: '界面1 - 收起', src: require('../../assets/images/design/edition2th/01.jpg') },
  { id: 'img02', text: '医生端 - 调整后的界面 - 列表显示', name: '界面2 - 展开', src: require('../../assets/images/design/edition2th/02.jpg') },
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
    font-size: 16px;
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

  li {
    margin-bottom: 20px;
    border: 1px solid #1b2164;
    background-color: #fff;

    // &:first-child {
    //   padding-top: 0;
    // }
  }

  .img {
    border: 1px solid #1b2164;
    transform: scale(.9);
  }

  .textbox {
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 24px;
  }
}
</style>