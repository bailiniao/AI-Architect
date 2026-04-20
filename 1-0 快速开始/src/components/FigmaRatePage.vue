<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'

const ratingId = 'demo-rating'
const maxStars = 5
const debounceMs = 500

const rating = ref(0)
const loading = ref(false)
const errorMessage = ref('')
const successMessage = ref('')

let debounceTimer: number | undefined

const caption = computed(() => {
  if (rating.value <= 0) return '未评分'
  if (rating.value <= 1) return 'oops'
  if (rating.value <= 2) return 'disappointed'
  if (rating.value <= 3) return 'normal'
  if (rating.value <= 4) return 'good'
  return 'great'
})

function setRating(value: number) {
  if (loading.value) return
  rating.value = value
  queueSave()
}

function queueSave() {
  if (debounceTimer) {
    window.clearTimeout(debounceTimer)
  }
  debounceTimer = window.setTimeout(() => {
    void saveRating(rating.value)
  }, debounceMs)
}

async function saveRating(value: number) {
  loading.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const response = await fetch(`/api/ratings/${encodeURIComponent(ratingId)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating: value }),
    })

    if (!response.ok) {
      throw new Error('request failed')
    }

    successMessage.value = '评分已保存'
  } catch {
    errorMessage.value = '评分保存失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onBeforeUnmount(() => {
  if (debounceTimer) {
    window.clearTimeout(debounceTimer)
  }
})
</script>

<template>
  <main class="rate-page">
    <section class="rate-card" :class="{ 'is-loading': loading }">
      <h1>Rate 评级组件</h1>

      <div class="stars" role="radiogroup" aria-label="评分组件">
        <button
          v-for="star in maxStars"
          :key="star"
          class="star-button"
          :class="{ active: star <= rating }"
          type="button"
          :disabled="loading"
          :aria-label="`评分 ${star} 星`"
          @click="setRating(star)"
        >
          ★
        </button>
      </div>

      <p class="caption">当前文案：{{ caption }}</p>
      <p v-if="loading" class="status">提交中...</p>
      <p v-if="successMessage" class="status success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="status error">{{ errorMessage }}</p>
    </section>
  </main>
</template>

<style scoped>
.rate-page {
  min-height: 100vh;
  padding: 40px 24px;
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  background: #f5f7fa;
  display: grid;
  place-items: center;
}

.rate-card {
  width: min(100%, 420px);
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.rate-card.is-loading {
  opacity: 0.7;
}

h1 {
  margin: 0 0 16px;
  font-size: 22px;
  color: #303133;
}

.stars {
  display: inline-flex;
  gap: 6px;
}

.star-button {
  width: 32px;
  height: 32px;
  border: 0;
  padding: 0;
  background: transparent;
  color: #c0c4cc;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
}

.star-button.active {
  color: #e6a23c;
}

.star-button:disabled {
  cursor: not-allowed;
}

.caption {
  margin: 12px 0 0;
  font-size: 14px;
  color: #606266;
}

.status {
  margin: 8px 0 0;
  font-size: 13px;
  color: #909399;
}

.status.success {
  color: #67c23a;
}

.status.error {
  color: #f56c6c;
}
</style>
