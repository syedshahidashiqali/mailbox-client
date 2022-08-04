import { useState } from "react";
import { postApi } from "../utlis/apiHelper";

export const usePostApi = async (url, body, isToken = false) => {
  const [response, setResponse] = useState([]);

  const token = localStorage.getItem("TOKEN");
  if (isToken === true) {
    const data = await postApi(url, body, { "x-access-token": token })
    setResponse(data)
    return response
  } else {
    const data = await postApi(url, body)
    setResponse(data)
    return response
  }
}