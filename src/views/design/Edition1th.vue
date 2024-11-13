<template>
  <Modal v-model="isVisible" fullscreen footer-hide title="弹窗标题">
    <div>弹窗内容</div>
  </Modal>
  <!-- <div>
  </div> -->
</template>

<script setup>
import { ref, defineExpose } from 'vue';

const isVisible = ref(false);

function toggleModal() {
  isVisible.value = !isVisible.value;
}

defineExpose({
  toggleModal
});

</script>