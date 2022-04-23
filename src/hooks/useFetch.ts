import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url: string) {
  //This is the state that stores the result of the api call
  const [data, setData] = useState<T | null>(null);

  //This function makes an api call with axios and returns the required data
  useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data.results);
    })
  }, []);

  return { data }
}
