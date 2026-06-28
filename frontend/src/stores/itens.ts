import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '../services/api'

export interface Banda {
  id?: number
  nome: string
  genero: string
  anoFormacao: number | null
  pais: string
  emAtividade: boolean
  integrantes: string[]
}

export const useBandasStore = defineStore('bandas', () => {
  const listaBandas = ref<Banda[]>([])

  async function buscarBandas() {
    try {
      const response = await api.get('/bandas')
      listaBandas.value = response.data
    } catch (error) {
      console.error('Erro ao buscar bandas:', error)
    }
  }

  async function salvarBanda(banda: Banda) {
    try {
      if (banda.id) {
        const response = await api.put(`/bandas/${banda.id}`, banda)
        const index = listaBandas.value.findIndex(b => b.id === banda.id)
        if (index !== -1) {
          listaBandas.value[index] = response.data
        }
      } else {
        const response = await api.post('/bandas', banda)
        listaBandas.value.push(response.data)
      }
    } catch (error) {
      console.error('Erro ao salvar banda:', error)
    }
  }

  async function excluirBanda(id: number) {
    try {
      await api.delete(`/bandas/${id}`)
      listaBandas.value = listaBandas.value.filter(b => b.id !== id)
    } catch (error) {
      console.error('Erro ao excluir banda:', error)
    }
  }

  return {
    listaBandas,
    buscarBandas,
    salvarBanda,
    excluirBanda
  }
})