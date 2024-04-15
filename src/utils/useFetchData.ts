import { useState, useEffect } from "react";

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

interface UseFetchOptions {
  useEffectFetch: boolean; // useEffectを使用してフェッチを実行するかどうか
}

export function useFetchData<T>(
  url: string,
  options: UseFetchOptions,
): FetchState<T> & { fetchData?: () => Promise<void> } {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.statusText}`);
      }
      const data: T = await response.json();
      // console.log(data);
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (options.useEffectFetch) {
      fetchData();
    }
  }, [url, options.useEffectFetch]); // 依存配列にurlを指定

  // useEffectFetchがfalseの場合、fetchData関数を返す
  return {
    data,
    isLoading,
    error,
    ...(options.useEffectFetch ? {} : { fetchData }),
  };
}
