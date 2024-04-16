import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";

export default function App({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    document.body.style.backgroundColor = getPageBackgroundColor(
      router.pathname,
    );
  }, [router.pathname]);

  const getPageBackgroundColor = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "#F7FAFF";
      default:
        return "#FFFFFF";
    }
  };

  return (
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
