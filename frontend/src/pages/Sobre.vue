<template>
  <v-container class="py-8">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-6" rounded="lg" elevation="2">
          <div class="text-center mb-6">
            <v-avatar color="primary" size="64" class="mb-3">
              <v-icon icon="mdi-information-variant" size="36"></v-icon>
            </v-avatar>
            <h1 class="text-h4 font-weight-bold text-primary">Sobre o Projeto</h1>
            <p class="text-subtitle-1 text-medium-emphasis">Trabalho Prático - CRUD</p>
          </div>

          <v-divider class="my-4"></v-divider>

          <h3 class="text-h6 font-weight-bold mb-2">Tema do trabalho: Catálogo de Bandas Rock</h3>
          <p class="text-body-1 text-justify mb-6">
            Esta aplicação foi desenvolvida para atender aos requisitos da disciplina de Frameworks Modernos. 
            O sistema funciona como um catálogo digital intuitivo focado no cenário musical do Rock, 
            permitindo registrar novas bandas, especificar gêneros, marcar se estão ativas ou em hiato,
            e controlar as informações salvando em um estado local compartilhado.
          </p>

          <v-alert type="info" variant="tonal" border="start" class="mb-6">
            Disciplina: Frameworks Modernos para Desenvolvimento de Sistemas
          </v-alert>

          <h3 class="text-h6 font-weight-bold mb-3">Desenvolvedor</h3>
          <v-list border rounded="lg">
            <v-list-item prepend-icon="mdi-account">
              <v-list-item-title class="font-weight-medium">Francisco de Julio Faria</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>