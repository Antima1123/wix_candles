import { client } from "@/lib/hono-client";
import { useMutation } from "@tanstack/react-query"
import { InferRequestType, InferResponseType } from "hono";

type ResponseType = InferResponseType<typeof client.api.suggestion.$post>;
type RequestType = InferRequestType<typeof client.api.suggestion.$post>["json"]

export const useGetSuggestions = () => {
  const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
  >({
    mutationFn: async (json) => {
      const response = await client.api.suggestion.$post({ json })
      if (!response.ok) {
        throw new Error('Failed get suggestions')
      }
      return response.json()
    }
  })

  return mutation
}