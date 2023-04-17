import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function Data(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const shopDate = async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      return result.data;
    };

    shopDate().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
    </>
  );
}
