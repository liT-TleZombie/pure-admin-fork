<script setup lang="ts">
import { useDetail } from "./hooks";
defineOptions({
  name: "userDetail"
});
const { initToDetail, id } = useDetail();
initToDetail("params");
</script>

<template>
  <div class="test">标签{{ id }}</div>
</template>

<style scoped>
.test {
  color: red;
}
</style>
