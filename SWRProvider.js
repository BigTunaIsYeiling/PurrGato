"use client";
import { SWRConfig } from "swr";
const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) =>
          fetch(...args, {
            credentials: "include",
          }).then((res) => res.json()),
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
        shouldRetryOnError: false,
        dedupingInterval: 10000,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
