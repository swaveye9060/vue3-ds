<template>
  <Modal v-model="isVisible" fullscreen footer-hide :title="titleName">
    <div class="boxs">
      <ul class="imgboxs">
        <li v-for="(image, index) in images" :key="image.id" :id="image.id + titleName">
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
const images = [
  { id: 'begin', name: '首页', src: require('../../assets/images/design/edition1th/begin.jpg') },
  { id: 'img02', name: '通话后界面优化', src: require('../../assets/images/design/edition1th/02.jpg') },
  { id: 'img03', name: '界面原型图-隐藏列表', src: require('../../assets/images/design/edition1th/03.jpg') },
  { id: 'img04', name: '界面原型图-显示列表', src: require('../../assets/images/design/edition1th/04.jpg') },
  { id: 'img05', name: '界面原型图-摆放位置', src: require('../../assets/images/design/edition1th/05.jpg') },
  { id: 'img06', name: '医生端原界面图', src: require('../../assets/images/design/edition1th/06.jpg') },
];

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
    margin-bottom: 8px;
    padding-top: 12px;

    &:first-child {
      padding-top: 0;
    }
  }

  .img {
    border: 1px solid #1b2164;
  }
}
</style>