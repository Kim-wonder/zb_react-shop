import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ThemeContext = createContext();
export const DataContext = createContext();

export default function Store(props) {
  const [data, setData] = useState([]);

  const test = {
    id: 1,
    title: "hello, world!",
  };

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
      <ThemeContext.Provider value={test}>
        {props.children}
      </ThemeContext.Provider>
    </>
  );
}
