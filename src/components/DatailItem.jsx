import React from "react";
import "./DatailItem.scss";
import { useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../store/Data";

export default function DatailItem() {
  const params = useParams();
  console.log(params);
  return (
    <>
      <div>{params}ddd</div>
    </>
  );
}
