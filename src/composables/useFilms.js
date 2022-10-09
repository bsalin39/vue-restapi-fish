import { ref } from 'vue'
import useApi from '@/composables/useApi'

const films = ref([])
const currentFilm = ref(null)
const firstLoad = ref(true)

const api = useApi()
const page = ref(1)

const useFilms = () => {
  const fetchFilms = async () => {
    const { data } = await api.instance.get('/films', {
      params: {
        page: page.value,
      },
    })
    films.value.push(...data)
    page.value++
  }
  const fetchFilm = async (id) => {
    const { data } = await api.instance.get(`/films/${id}`)
    currentFilm.value = data
  }

  return {
    films,
    fetchFilms,
    fetchFilm,
    currentFilm,
    firstLoad,
  }
}

export default useFilms
