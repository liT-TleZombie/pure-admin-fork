<script setup lang="ts">
import { useDetail } from "./hooks";

const { toDetail } = useDetail();

defineOptions({
  name: "orderList"
});
</script>

<template>
  <div>
    <div class="test" @click="toDetail(1, 'params')">1</div>
    <div class="test" @click="toDetail(2, 'params')">2</div>
    <div class="test" @click="toDetail(3, 'params')">3</div>
    <div class="test" @click="toDetail(4, 'params')">4</div>
    <div class="test" @click="toDetail(45, 'params')">45</div>
  </div>
</template>

<style scoped>
.test {
  color: red;
}
</style>
