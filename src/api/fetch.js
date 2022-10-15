import { useEffect } from "react";
import { useState } from "react";
import { url } from "../constants/url";

export const useFetchData = () => {
  const [orders, setOrders] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      let arr = [];
      for (const key in data) {
        data[key].fid = key;
        arr.push(data[key]);
      }
      setOrders(arr);
    };
    fetchData();
  }, []);
  return orders;
};
