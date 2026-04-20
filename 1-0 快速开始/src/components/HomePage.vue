<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <main class="home-page">
    <h1>静态页面示例</h1>
    <RouterLink to="/figma-static">
      <Button>查看 Figma 静态组件</Button>
    </RouterLink>
    <RouterLink to="/figma-rate">
      <Button variant="secondary">查看 Rate 评级组件</Button>
    </RouterLink>
    <RouterLink to="/hello">
      <Button variant="secondary">查看 Hello 组件</Button>
    </RouterLink>
  </main>
</template>

<style scoped>
.home-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

h1 {
  margin: 0;
  color: #08060d;
  font-size: 28px;
}
</style>
