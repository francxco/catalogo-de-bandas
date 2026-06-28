<template>
  <div class="login-page">
    <div class="login-bg">
      <div v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></div>
    </div>

    <v-container class="login-container" fluid>
      <v-row justify="center" align="center" class="fill-height">
        <v-col cols="12" sm="8" md="5" lg="4">
          <v-card class="login-card pa-8" elevation="24" rounded="xl">
            <div class="text-center mb-6">
              <div class="logo-wrapper mb-4">
                <v-icon icon="mdi-guitar-electric" size="72" color="secondary" class="logo-icon" />
              </div>
              <h1 class="text-h4 font-weight-bold login-title">
                Catálogo de Bandas
              </h1>
              <p class="text-body-2 text-medium-emphasis mt-2">
                Acesse sua conta para gerenciar suas bandas favoritas
              </p>
            </div>

            <v-divider class="my-5 divider-glow" />

            <v-alert
              v-if="authStore.error"
              type="error"
              variant="tonal"
              closable
              class="mb-5"
              rounded="lg"
              @click:close="authStore.clearError()"
            >
              {{ authStore.error }}
            </v-alert>

            <LoginGoogle />

            <p class="text-caption text-center text-medium-emphasis mt-6">
              Ao entrar, você concorda com nossos termos de uso
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import LoginGoogle from '@/components/LoginGoogle.vue'

const authStore = useAuthStore()

function particleStyle(n: number) {
  const size = 40 + (n * 17) % 80
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${(n * 37) % 100}%`,
    left: `${(n * 53) % 100}%`,
    animationDelay: `${(n * 0.7) % 10}s`,
    animationDuration: `${12 + (n % 8)}s`,
  }
}
</script>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a2e 30%, #16213e 60%, #0f3460 100%);
}

.login-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(211, 47, 47, 0.3), transparent 70%);
  animation: floatParticle 15s infinite ease-in-out;
  pointer-events: none;
}

@keyframes floatParticle {
  0%, 100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
  25% { transform: translateY(-40px) translateX(20px) scale(1.1); opacity: 0.6; }
  50% { transform: translateY(-20px) translateX(-15px) scale(0.9); opacity: 0.4; }
  75% { transform: translateY(-50px) translateX(10px) scale(1.05); opacity: 0.5; }
}

.login-container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.login-card {
  background: rgba(30, 30, 30, 0.85) !important;
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 80px rgba(211, 47, 47, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.login-card:hover {
  transform: translateY(-2px);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(211, 47, 47, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08) !important;
}

.logo-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(211, 47, 47, 0.15), rgba(255, 152, 0, 0.1));
  border: 2px solid rgba(211, 47, 47, 0.3);
  animation: pulseGlow 3s infinite ease-in-out;
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(211, 47, 47, 0.15); }
  50% { box-shadow: 0 0 40px rgba(211, 47, 47, 0.3); }
}

.logo-icon {
  animation: floatIcon 4s infinite ease-in-out;
}

@keyframes floatIcon {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.login-title {
  background: linear-gradient(135deg, #ffffff 0%, #D32F2F 50%, #FF9800 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 0.5px;
}

.divider-glow {
  border-color: rgba(211, 47, 47, 0.3) !important;
  box-shadow: 0 0 8px rgba(211, 47, 47, 0.15);
}

.fill-height {
  min-height: 100vh;
}
</style>
