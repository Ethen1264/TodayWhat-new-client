import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

const TanstackProviders = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            gcTime: 60 * 5000,
            retryDelay: 1500,
            retry: 5,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default TanstackProviders
