import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '@/lib/api/client';

export function useGet<T>(key: string[], queryFn: () => Promise<T>, options = {}) {
  return useQuery({
    queryKey: key,
    queryFn,
    ...options,
  });
}

export function usePost<TData, TVariables>(key: string[], mutationFn: (variables: TVariables) => Promise<TData>, options = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
    ...options,
  });
}

export function usePut<TData, TVariables>(key: string[], mutationFn: (variables: TVariables) => Promise<TData>, options = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
    ...options,
  });
}

export function useDelete<TData, TVariables>(key: string[], mutationFn: (variables: TVariables) => Promise<TData>, options = {}) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: key });
    },
    ...options,
  });
}

export { apiClient };