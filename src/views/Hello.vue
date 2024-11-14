<template>
  <!-- <router-link to="/edition1th">第一版原型图</router-link> -->
  <section class="home-boxs">
    <!-- 展示内容 -->
    <h1>主页 / 列表</h1>
    <hr>
    <ol>
      <li @click="openChildModal(work.name)" v-for="(work, index) in workingData" :key="index">
        <span>{{ index + 1 }}.</span>
        <div class="cboxs">
          <a>{{ work.name }}</a>
          <span class="time">{{ work.time }}</span>
        </div>
      </li>
    </ol>

    <!-- 组件 -->
    <Edition1th ref="modalEdition1th" />
    <Edition2th ref="modalEdition2th" />
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Edition1th from './design/Edition1th.vue'
import Edition2th from './design/Edition2th.vue'

const modalEdition1th = ref(null);
const modalEdition2th = ref(null);
const workingData = [
  { name: '第一版原型图', time: '2024/11/08' },
  { name: '第二版原型图', time: '2024/11/15' }
];

function openChildModal(workName) {
  // modalEdition1th.value?.toggleModal(workName);
  if (workName === '第一版原型图') {
    modalEdition1th.value?.toggleModal(workName);
  } else if (workName === '第二版原型图') {
    modalEdition2th.value?.toggleModal(workName);
  }
}

</script>


<style lang="less" scoped>
.home-boxs {
  width: 100%;
  height: 100vh;
  font-size: 18px;
  background-image: url('https://ye9060.com/uploads/feb957d9-5f57-4d99-b154-e2b3538c9727-bg-1920-01.jpg');
  background-size: cover;
  // display: none;

  h1 {
    margin: 0;
    padding: 22px 20px;
    font-size: 32px;
    /* border: 1px solid #000; */
  }

  ol {
    padding: 20px 80px 20px 40px;

    li {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: 1px solid rgba(30, 25, 38, 0.3);
      list-style: none;
      display: flex;
      background: linear-gradient(-45deg, rgba(0, 136, 255, 0.3), rgba(69, 42, 203, 0.3));
      box-shadow: 4px 5px 10px 0 rgba(123, 116, 133, 0.3);
      margin-bottom: 20px;
      cursor: pointer;

      span {
        width: 50px;
        margin-left: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        /* font-weight: 600; */
      }

      .cboxs {
        width: calc(100% - 97px);
        display: flex;
        justify-content: space-between;

        .time {
          font-size: 16px;
        }
      }

      a {
        display: inline-block;
        padding: 20px;
        // width: 100%;
        height: 100%;
        letter-spacing: 0.15em;
        font-weight: 600;
        color: #2c3e50;
      }

      &:hover {
        background: linear-gradient(-45deg, #0089ff, #54fbdd, #442acb);
        background-size: 200% 200%;
        animation: moiveAnimation 8s infinite;
        box-shadow: 5px 6px 10px 0 rgba(123, 116, 133, 0.7);

        span {
          color: #fff;
        }

        a {
          color: #fff;
          font-weight: bold;
          text-decoration: none;

          /* overflow: hidden; */
          white-space: nowrap;
          letter-spacing: 0.15em;
          animation: siz 0.7s;
          /* animation: siz 6s steps(60) forwards; */
        }
      }
    }
  }
}

@keyframes moiveAnimation {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

/* - 文字动效 */
@keyframes siz {

  from {
    /* width: 0; */
    transform: rotateX(-90deg);
  }

  to {
    /* width: 100%; */
    transform: rotateX(0deg);
  }

}

.text {
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: siz 3s steps(60) forwards;
}
</style>