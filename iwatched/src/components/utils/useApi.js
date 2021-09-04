import { useState } from "react";
import axios from "axios";

const initialRequestData = {
  error: null,
  data: null,
  loading: false,
};

export default function useApi(config) {
  const [requestData, setRequestData] = useState(initialRequestData);

  async function fazerRequest(localConfig) {
    let response;

    const finalConfig = {
      updateRequestData: (newData) => newData,
      ...config,
      ...localConfig,
    };

    if (finalConfig.isFetchMore) {
      setRequestData({
        ...initialRequestData,
        data: requestData.data,
        loading: true,
      });
    } else if (!finalConfig.quietly) {
      setRequestData({
        ...initialRequestData,
        loading: true,
      });
    }

    try {
      response = await axios(finalConfig);

      const newRequestData = {
        ...initialRequestData,
        data: response.data,
      };

      if (response.data.total_pages !== undefined) {
        newRequestData.total = parseInt(response.data.total_pages, 10);
      }

      setRequestData(
        finalConfig.updateRequestData(newRequestData, requestData)
      );
    } catch (error) {
      response = error;

      setRequestData({
        ...initialRequestData,
        error: error,
      });
    }

    if (finalConfig.onComplete) {
      finalConfig.onComplete();
    }
  }

  return [fazerRequest, requestData];
}
