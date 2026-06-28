<template>
  <v-card class="mb-4" variant="flat" border rounded="lg">
    <v-card-item>
      <v-row align="center" no-gutters>
        <v-col cols="12" sm="7" class="d-flex align-center">
          <v-avatar color="primary" class="mr-4" size="48">
            <v-icon icon="mdi-guitar-electric" color="white"></v-icon>
          </v-avatar>
          <div>
            <div class="text-h6 font-weight-bold d-flex align-center flex-wrap">
              {{ banda.nome }}
              <v-chip
                :color="banda.emAtividade ? 'success' : 'grey'"
                size="x-small"
                class="ml-2 font-weight-medium"
              >
                {{ banda.emAtividade ? 'Ativa' : 'Hiato' }}
              </v-chip>
            </div>
            <div class="text-subtitle-2 text-medium-emphasis">
              {{ banda.genero }} • {{ banda.pais }} • Desde {{ banda.anoFormacao }}
            </div>
            <div class="text-body-2 text-medium-emphasis mt-2">
              <strong>Integrantes:</strong>
              {{ banda.integrantes.length ? banda.integrantes.join(', ') : 'Sem integrantes cadastrados' }}
            </div>
          </div>
        </v-col>

        <v-spacer></v-spacer>

        <v-col cols="12" sm="4" class="text-right mt-3 mt-sm-0">
          <v-btn
            color="amber-darken-2"
            variant="text"
            prepend-icon="mdi-pencil"
            class="mr-2"
            @click="$emit('editar', banda.id!)"
          >
            Editar
          </v-btn>
          <v-btn
            color="error"
            variant="text"
            prepend-icon="mdi-trash-can"
            @click="$emit('excluir', banda.id!)"
          >
            Excluir
          </v-btn>
        </v-col>
      </v-row>
    </v-card-item>
  </v-card>
</template>

<script setup lang="ts">
import { type Banda } from '@/stores/itens'

defineProps<{
  banda: Banda
}>()

defineEmits<{
  (e: 'editar', id: number): void
  (e: 'excluir', id: number): void
}>()
</script>