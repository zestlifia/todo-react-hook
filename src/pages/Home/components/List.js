import { useState } from "react";
import Item from "./Item";

const NOTE_ORDER = { ASC: "ascending", DES: "descending" };
Object.freeze(NOTE_ORDER);

const List = ({ listData, setData, transportations, caries }) => {
  const [order, setOrder] = useState(NOTE_ORDER.ASC);

  const sorting = () => {
    if (order === NOTE_ORDER.ASC) {
      setOrder(NOTE_ORDER.DES);
      setData((preArr) => {
        return [...preArr].sort((a, b) => (a.notePriority > b.notePriority ? 1 : -1));
      });
    } else {
      setOrder(NOTE_ORDER.ASC);
      setData((preArr) => {
        return [...preArr].sort((a, b) => (a.notePriority > b.notePriority ? -1 : 1));
      });
    }
  };
  return (
    <div className="list">
      {listData.map(
        ({ id, notePriority, noteText, noteDate, noteTime, noteTransportation, noteCaries }) => {
          const textTransportation = transportations.find(
            (tran) => tran.value === noteTransportation
          ).text;

          const textsCarriesArr = [];
          Object.entries(noteCaries).forEach(([key, value]) => {
            console.log(`${key}: ${value}`);
            if (value) {
              textsCarriesArr.push(caries.filter((carry) => carry.value === key)[0].text);
            }
          });
          const textCarries = textsCarriesArr.join(",");

          return (
            <Item
              key={id}
              id={id}
              deleteItem={setData}
            >{`${notePriority} - ${noteText} - ${noteDate} - ${noteTime} - ${textTransportation} - ${textCarries}`}</Item>
          );
        }
      )}
      <button className="add" style={{ backgroundColor: "blue" }} onClick={sorting}>
        排序 - {order}
      </button>
    </div>
  );
};
export default List;
