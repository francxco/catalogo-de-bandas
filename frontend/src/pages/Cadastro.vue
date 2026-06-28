<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 font-weight-bold text-primary mb-2">
          {{ modoEdicao ? 'Editar Banda' : 'Cadastrar Nova Banda' }}
        </h1>
        <p class="text-subtitle-1 text-medium-emphasis mb-6">
          {{ modoEdicao ? 'Modifique os dados da banda' : 'Insira as informações para adicionar a banda ao catálogo' }}
        </p>

        <v-form ref="formComponente" v-model="formValido" @submit.prevent="submeterFormulario">
          <v-card class="pa-6" rounded="lg" elevation="2">
            <v-row>
              
              <v-col cols="12">
                <v-text-field
                  v-model="banda.nome"
                  label="Nome da Banda"
                  prepend-inner-icon="mdi-music-clef-treble"
                  :rules="[v => !!v || 'O nome da banda é obrigatório']"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="banda.genero"
                  label="Gênero Principal"
                  :items="['Heavy Metal', 'Thrash Metal', 'Hard Rock', 'Prog Metal', 'Death Metal', 'Power Metal', 'Punk Rock', 'Grunge', 'Indie Rock', 'Classic Rock']"
                  prepend-inner-icon="mdi-guitar-pick"
                  :rules="[v => !!v || 'Selecione um gênero']"
                  required
                ></v-select>
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model.number="banda.anoFormacao"
                  label="Ano de Formação"
                  type="number"
                  prepend-inner-icon="mdi-calendar"
                  :rules="[
                    v => !!v || 'O ano é obrigatório',
                    v => (v >= 1900 && v <= 2026) || 'Insira um ano válido entre 1900 e 2026'
                  ]"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="banda.pais"
                  label="País de Origem"
                  prepend-inner-icon="mdi-earth"
                  :rules="[v => !!v || 'O país de origem é obrigatório']"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="integrantesTexto"
                  label="Integrantes"
                  hint="Digite um integrante por linha"
                  persistent-hint
                  rows="4"
                  auto-grow
                ></v-textarea>
              </v-col>

              <v-col cols="12">
                <v-switch
                  v-model="banda.emAtividade"
                  :label="banda.emAtividade ? 'A banda está atualmente ATIVA' : 'A banda está em HIATO / ENCERRADA'"
                  color="success"
                  inset
                ></v-switch>
              </v-col>

            </v-row>

            <v-divider class="my-4"></v-divider>

            <v-card-actions class="px-0">
              <v-btn variant="outlined" color="grey" to="/lista">Cancelar</v-btn>
              <v-spacer></v-spacer>
              <v-btn
                type="submit"
                color="primary"
                variant="flat"
                :disabled="!formValido"
                prepend-icon="mdi-content-save"
              >
                Salvar Banda
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useBandasStore, type Banda } from '@/stores/itens'

const router = useRouter()
const bandasStore = useBandasStore()

const props = defineProps<{
  id?: string
}>()

const formComponente = ref<any>(null)
const formValido = ref(false)

const banda = ref<Banda>({
  nome: '',
  genero: '',
  anoFormacao: null,
  pais: '',
  emAtividade: true,
  integrantes: []
})

const integrantesTexto = ref('')

const modoEdicao = computed(() => !!props.id)

onMounted(async () => {
  if (modoEdicao.value && props.id) {
    if (bandasStore.listaBandas.length === 0) {
      await bandasStore.buscarBandas()
    }
    const idNum = parseInt(props.id)
    const bandaExistente = bandasStore.listaBandas.find(b => b.id === idNum)
    if (bandaExistente) {
      banda.value = { ...bandaExistente }
      integrantesTexto.value = bandaExistente.integrantes.join('\n')
    } else {
      router.push('/lista')
    }
  }
})

async function submeterFormulario() {
  const validacao = await formComponente.value.validate()

  if (validacao.valid) {
    banda.value.integrantes = integrantesTexto.value
      .split('\n')
      .map(item => item.trim())
      .filter(item => item.length > 0)

    await bandasStore.salvarBanda(banda.value)
    router.push('/lista')
  }
}
</script>