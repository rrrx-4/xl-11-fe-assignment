import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ContextProvider } from "./Context"
import Main from "./components/Main"

const queryClient = new QueryClient()


function App() {


  return (
    <QueryClientProvider client={queryClient} >
      <ContextProvider>
    <Main></Main>
    </ContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
