import { ref } from 'vue'
export const useSearchParams = () => {
  const query = ref('')
  const initQuery = () => (query.value = '')
  const editQuery = (param: string) => {
    query.value = param
  }
  return {
    query,
    initQuery,
    editQuery,
  }
}
