import { QueryFunctionContext } from "@tanstack/react-query";

export const getDetail = async ({ queryKey }: QueryFunctionContext) => {
  const [_, id] = queryKey;

  const response = await fetch(`http://localhost:4000/todos/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch a detail todo ${id}`);
  }
  return await response.json();
};
