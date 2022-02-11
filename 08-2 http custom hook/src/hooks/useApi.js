import { useState, useCallback } from "react";

function useApi(callBack) {
  let [isLoading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);

  let fetchTasks = useCallback(
    async (dataConfig) => {
      setIsLoading(true);
      setError(null);
      let data;
      try {
        let response = await fetch(
          `https://fakeFirebaseURL-default-rtdb.firebaseio.com/${dataConfig.endPoint}`,
          {
            method: dataConfig.method ? "POST" : "GET",
            body: dataConfig.body ? JSON.stringify(dataConfig.body) : null,
            headers: dataConfig.headers
              ? dataConfig.headers
              : { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        data = await response.json();
        callBack(data);
      } catch (err) {
        console.log("TC-6642", err);
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [callBack]
  );
  return { error, isLoading, fetchTasks };
}

export default useApi;
