export default function useServer() {
  const { host } = useRuntimeConfig().public;

  return {
    createUser(body: { name: string, interests: string[] }) {
      return useFetch(`${host}/user/create`, {
        method: 'POST',
        body: JSON.stringify(body),
      });
    },

    getFeed(params: { userId: string }) {
      return useFetch(`${host}/feed/index`, {
        method: 'GET',
        params: {
          user_id: params.userId,
        }
      });
    },

    createInteraction(params: { userId: string, contentId: string, classification: 'Like' | 'Dislike' }) {
      return useFetch(`${host}/content/classify`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: params.userId,
          content_id: params.contentId,
          classification: params.classification,
        })
      });
    },

    recalculateUserInterests(params: { userId: string }) {
      return useFetch(`${host}/user/update`, {
        method: 'POST',
        body: JSON.stringify({
          user_id: params.userId,
        })
      });
    }
  }
}