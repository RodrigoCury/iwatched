import { useState } from "react"
import axios from "axios"

const initialRequestData = {
    error: null,
    data: null,
    loading: false,
};

export default function useApi(config) {
    const [requestData, setRequestData] = useState(initialRequestData);

    async function fazerRequest(localConfig){
        let response 
        
        const finalConfig = {
            ...config,
            ...localConfig,
        }

        setRequestData({
            ...initialRequestData,
            loading: true,
        })

        try {
            response = await axios(finalConfig);

            const newRequestInfo = {
                ...initialRequestData,
                data: response.data,
            }

            if (response.headers["x-total-count"] !== undefined) {
                newRequestInfo.total = parseInt(response.headers["x-total-count"], 10)
            }

            setRequestData(newRequestInfo)
        } catch (error) {
            response = { error }

            setRequestData({
                ...initialRequestData,
                error,
            });
        }
    }

    return [fazerRequest, requestData]
}