import { useState } from "react";

let apiUrl = "https://fakeFirebaseURL-default-rtdb.firebaseio.com";

let useApi = function () {
  let [hasError, setHasError] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [errorMessage, setErrorMessage] = useState("");
  let [isSuccess, setisSuccess] = useState(false);

  async function sendRequest(config) {
    try {
      setIsLoading(true);
      setHasError(false);
      let response = await fetch(`${apiUrl}/${config.url}`, {
        method: config.method || "GET",
        body: config.data || null,
      });

      let data = await response.json();

      setIsLoading(false);
      setisSuccess(true);
      if (config.return) {
        return data;
      }
      return true;
    } catch (error) {
      setHasError(true);
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  }

  return {
    sendRequest,
    isLoading,
    isSuccess,
    hasError,
    errorMessage,
  };
};

export default useApi;
