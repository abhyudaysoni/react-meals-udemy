import { url } from "../constants/url";

export const post = (order) => {
  const postData = async () => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  };
  postData();
};
