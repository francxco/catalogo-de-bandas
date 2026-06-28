<template>
  <div class="google-btn-wrapper">
    <v-btn
      id="login-google-btn"
      size="x-large"
      variant="elevated"
      block
      rounded="lg"
      :loading="authStore.loading"
      :disabled="authStore.loading"
      class="google-btn"
      @click="handleLogin"
    >
      <template #prepend>
        <svg class="google-icon" viewBox="0 0 48 48" width="24" height="24">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        </svg>
      </template>
      <span class="google-btn-text">Entrar com Google</span>
    </v-btn>

    <div class="btn-shimmer" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

async function handleLogin() {
  try {
    await authStore.loginWithGoogle()
    router.push('/')
  } catch {
  }
}
</script>

<style scoped>
.google-btn-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.google-btn {
  background: linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #e0e0e0 !important;
  text-transform: none !important;
  font-weight: 500 !important;
  font-size: 1rem !important;
  letter-spacing: 0.3px !important;
  padding: 12px 24px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
  height: 56px !important;
}

.google-btn:hover {
  background: linear-gradient(135deg, #2a2a2a 0%, #363636 100%) !important;
  border-color: rgba(211, 47, 47, 0.4) !important;
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.3),
    0 0 30px rgba(211, 47, 47, 0.1) !important;
  transform: translateY(-1px);
}

.google-btn:active {
  transform: translateY(0);
}

.google-icon {
  margin-right: 4px;
  flex-shrink: 0;
}

.google-btn-text {
  font-family: 'Roboto', sans-serif;
}

.btn-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.04),
    transparent
  );
  animation: shimmer 3s infinite;
  pointer-events: none;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
</style>
