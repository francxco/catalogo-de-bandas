<template>
  <v-row class="mt-4">
    <v-col cols="12" sm="6">
      <v-card class="mx-auto" prepend-icon="mdi-music-box-multiple" variant="outlined">
        <template v-slot:title>
          Total de Bandas
        </template>
        <v-card-text class="text-h4 font-weight-bold pt-2">
          {{ total }}
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" sm="6">
      <v-card class="mx-auto" prepend-icon="mdi-check-circle" variant="outlined" color="success">
        <template v-slot:title>
          Em Atividade
        </template>
        <v-card-text class="text-h4 font-weight-bold pt-2">
          {{ ativos }}
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
defineProps({
  total: {
    type: Number,
    required: true
  },
  ativos: {
    type: Number,
    required: true
  }
})
</script>