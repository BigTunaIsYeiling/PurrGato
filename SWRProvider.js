"use client";
import { SWRConfig } from "swr";

const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: async (...args) => {
          const res = await fetch(...args, {
            credentials: "include",
          });
          if (!res.ok) {
            const errorData = await res.json();
            const error = new Error(
              "An error occurred while fetching the data."
            );
            error.info = errorData;
            error.status = res.status;
            throw error;
          }
          return res.json();
        },
        revalidateOnFocus: true,
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
