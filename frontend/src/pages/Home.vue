<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" elevation="3" rounded="lg">
          <div class="text-center mb-6">
            <v-icon icon="mdi-guitar-electric" size="64" color="primary" class="mb-2"></v-icon>
            <h1 class="text-h3 font-weight-bold text-primary mb-2">
              Catálogo de bandas
            </h1>
            <p class="text-subtitle-1 text-medium-emphasis">
              Tenha todas as informações de suas bandas favoritas em um só lugar!
            </p>
          </div>

          <v-divider class="my-4"></v-divider>

          <h2 class="text-h6 font-weight-medium mb-3">Visão Geral</h2>
          <EstatisticasBox :total="totalBandas" :ativos="bandasAtivas" />

          <v-row class="mt-8" justify="center">
            <v-col cols="12" sm="6" class="text-center">
              <v-btn 
                color="primary" 
                size="large" 
                prepend-icon="mdi-format-list-bulleted" 
                block
                @click="irParaLista"
              >
                Ver Bandas
              </v-btn>
            </v-col>
            <v-col cols="12" sm="6" class="text-center">
              <v-btn 
                color="secondary" 
                size="large" 
                prepend-icon="mdi-plus" 
                variant="outlined"
                block
                @click="irParaCadastro"
              >
                Nova Banda
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBandasStore } from '@/stores/itens'
import EstatisticasBox from '@/components/EstatisticasBox.vue'

const router = useRouter()
const bandasStore = useBandasStore()

const totalBandas = computed(() => bandasStore.listaBandas.length)
const bandasAtivas = computed(() => bandasStore.listaBandas.filter(b => b.emAtividade).length)

function irParaLista() {
  router.push('/lista')
}

function irParaCadastro() {
  router.push('/cadastro')
}
</script>