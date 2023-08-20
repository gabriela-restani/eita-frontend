export default function useServer() {
  const { host } = useRuntimeConfig().public;

  return {
    createUser(body: { name: string, interests: string[] }) {
      return useFetch(`${host}/user/create`, {
        method: 'POST',
        body: JSON.stringify(body),
      });
    }
  }
}