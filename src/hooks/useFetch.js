import { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(res => {
      return res.json(); // json으로 변환
    })
    .then(data => {
      setData(data);
    });
  }, [url]);

  return data;
}