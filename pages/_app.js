import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ErrorBoundary from "../components/ErrorBoundry";
import Header from "../components/Header";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //suspense: true,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ErrorBoundary>
        <Header />
        <main className="px-4 py-4">
          <Component {...pageProps} />
        </main>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default MyApp;
