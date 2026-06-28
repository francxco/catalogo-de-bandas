<template>
  <v-app>
    <v-app-bar v-if="isAuthenticated" color="primary" elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Catálogo de Bandas</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn to="/sobre" variant="text">Sobre</v-btn>

      <v-menu v-if="authStore.user" location="bottom end">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" variant="text" class="ml-2">
            <v-avatar size="32" class="mr-2">
              <v-img
                v-if="authStore.user.photoURL"
                :src="authStore.user.photoURL"
                :alt="authStore.user.displayName || 'Avatar'"
              />
              <v-icon v-else icon="mdi-account-circle" size="32" />
            </v-avatar>
            <span class="d-none d-sm-inline text-body-2">
              {{ authStore.user.displayName || 'Usuário' }}
            </span>
            <v-icon icon="mdi-chevron-down" size="small" class="ml-1" />
          </v-btn>
        </template>

        <v-list density="compact" min-width="200">
          <v-list-item prepend-icon="mdi-account" :subtitle="authStore.user.email || ''">
            <v-list-item-title>{{ authStore.user.displayName || 'Usuário' }}</v-list-item-title>
          </v-list-item>
          <v-divider />
          <v-list-item
            prepend-icon="mdi-logout"
            title="Sair"
            @click="handleLogout"
          />
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-if="isAuthenticated" v-model="drawer" temporary>
      <v-list density="compact" nav>
        
        <v-list-item 
          prepend-icon="mdi-home" 
          title="Início" 
          to="/"
        ></v-list-item>

        <v-list-item 
          prepend-icon="mdi-format-list-bulleted" 
          title="Ver Bandas" 
          to="/lista"
        ></v-list-item>

        <v-list-item 
          prepend-icon="mdi-plus-circle" 
          title="Cadastrar Banda" 
          to="/cadastro"
        ></v-list-item>

        <v-list-item 
          prepend-icon="mdi-information" 
          title="Sobre os Desenvolvedores" 
          to="/sobre"
        ></v-list-item>

        <v-divider class="my-2" />

        <v-list-item 
          prepend-icon="mdi-logout" 
          title="Sair" 
          @click="handleLogout"
        ></v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-overlay
      v-model="authStore.loading"
      class="align-center justify-center"
      persistent
      :z-index="9999"
    >
      <v-progress-circular indeterminate size="64" color="secondary" />
    </v-overlay>

    <v-main style="background-color: #2e2e2e; min-height: 100vh; color: #e0e0e0;">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const drawer = ref(false)

const isAuthenticated = computed(() => authStore.isAuthenticated)

onMounted(() => {
  authStore.initializeAuth()
})

async function handleLogout() {
  await authStore.logout()
  router.push('/login')
}
</script>