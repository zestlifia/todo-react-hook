import { useEffect, useState } from "react";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { API_GET_DATA } from "../../global/constants";

const transportations = [
  { text: "汽車", value: "car" },
  { text: "機車", value: "motor" },
  { text: "捷運", value: "mrt" },
];
const caries = [
  { text: "筆電", value: "laptop" },
  { text: "手機", value: "cellphone" },
  { text: "腦子", value: "brain" },
  { text: "奶子", value: "boobs" },
];

const Home = () => {
  const [data, setData] = useState([]);

  // async function fetchData(setData) {
  //   console.log(API_GET_DATA);
  //   const res = await fetch(API_GET_DATA);
  //   const { data } = await res.json();

  //   console.log(data);
  //   setData(data);
  // }

  // useEffect(() => {
  //   fetchData(setData);
  // }, []);

  return (
    <div className="app" style={{ backgroundColor: "#ADD8E6" }}>
      <Edit add={setData} transportations={transportations} caries={caries} />
      <List listData={data} setData={setData} transportations={transportations} caries={caries} />
    </div>
  );
};

export default Home;
