import { useEffect } from "react";
import { useState } from "react";
import { url } from "../constants/url";

export const useFetchData = () => {
  const [orders, setOrders] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("something went wrong");
        }
        const data = await res.json().catch((err) => {
          console.log(err);
        });
        let arr = [];
        for (const key in data) {
          data[key].fid = key;
          arr.push(data[key]);
        }
        setOrders(arr);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, [orders]);
  if (orders) {
    return orders;
  }
  if (error) {
    return error;
  }
};
