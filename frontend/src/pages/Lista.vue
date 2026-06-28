<template>
  <v-container class="py-8">
    <v-row align="center" class="mb-6">
      <v-col>
        <h1 class="text-h4 font-weight-bold text-primary">Bandas Cadastradas</h1>
        <p class="text-subtitle-1 text-medium-emphasis">Explore e gerencie as bandas do catálogo</p>
      </v-col>
      <v-col class="text-right">
        <v-btn color="primary" prepend-icon="mdi-plus" to="/cadastro">
          Nova Banda
        </v-btn>
      </v-col>
    </v-row>

    <v-card v-if="bandasStore.listaBandas.length === 0" class="text-center pa-12" variant="outlined" border>
      <v-icon icon="mdi-music-off" size="64" color="grey-lighten-1" class="mb-4"></v-icon>
      <h2 class="text-h5 font-weight-medium text-medium-emphasis mb-2">Nenhuma banda por aqui...</h2>
      <p class="text-body-1 text-disabled mb-6">O seu catálogo de bandas está vazio no momento.</p>
      <v-btn color="primary" prepend-icon="mdi-plus" to="/cadastro">
        Cadastrar Primeira Banda
      </v-btn>
    </v-card>

    <div v-else>
      <BandaCard 
        v-for="banda in bandasStore.listaBandas" 
        :key="banda.id" 
        :banda="banda"
        @editar="abrirEdicao"
        @excluir="confirmarExclusao"
      />
    </div>

    <v-dialog v-model="dialogExcluir" max-width="400">
      <v-card rounded="lg" class="pa-2">
        <v-card-title class="text-h6 font-weight-bold">
          Remover Banda?
        </v-card-title>
        <v-card-text>
          Tem certeza que deseja excluir esta banda?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn variant="text" color="grey" @click="dialogExcluir = false">Cancelar</v-btn>
          <v-btn variant="flat" color="error" @click="executarExclusao">Excluir</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useBandasStore } from '@/stores/itens'
import BandaCard from '@/components/BandaCard.vue'

const router = useRouter()
const bandasStore = useBandasStore()

onMounted(() => {
  bandasStore.buscarBandas()
})

const dialogExcluir = ref(false)
const idSelecionadoParaExcluir = ref<number | null>(null)

function abrirEdicao(id: number) {
  router.push(`/cadastro/${id}`)
}

function confirmarExclusao(id: number) {
  idSelecionadoParaExcluir.value = id
  dialogExcluir.value = true
}

async function executarExclusao() {
  if (idSelecionadoParaExcluir.value !== null) {
    await bandasStore.excluirBanda(idSelecionadoParaExcluir.value)
    dialogExcluir.value = false
    idSelecionadoParaExcluir.value = null
  }
}
</script>