import React, { useState } from "react";
import { v4 } from "uuid";

const Edit = React.memo(({ add, transportations, caries }) => {
  const [notePriority, setNotePriority] = useState(1);
  const [noteText, setNoteText] = useState("");
  const [noteDate, setNoteDate] = useState("");
  const [noteTime, setNoteTime] = useState("");
  const [noteTransportation, setTransportation] = useState("");
  const [noteCaries, setCaries] = useState({
    laptop: false,
    cellphone: false,
    brain: false,
    boobs: false,
  });

  return (
    <div>
      <h1>備忘錄</h1>
      <p>優先順序</p>
      <input
        type="number"
        min="1"
        max="10"
        value={notePriority}
        onChange={(e) => setNotePriority(e.target.value)}
      />
      <p>記事：</p>
      <input type="text" value={noteText} onChange={(e) => setNoteText(e.target.value)} />
      <p>日期</p>
      <input type="date" value={noteDate} onChange={(e) => setNoteDate(e.target.value)} />
      <p>時間：</p>
      <input type="time" value={noteTime} onChange={(e) => setNoteTime(e.target.value)} />
      <p>交通</p>

      {transportations.map(({ value, text }) => {
        return (
          <div key={value} style={{ display: "inline" }}>
            <input
              type="radio"
              value={value}
              style={{ width: 50 }}
              checked={value === noteTransportation}
              onChange={(e) => {
                console.log(e.target.value);
                setTransportation(e.target.value);
              }}
            />
            <label>{text}</label>
          </div>
        );
      })}

      <p>攜帶物品</p>
      {caries.map((carry, index) => (
        <div key={carry.value} style={{ display: "inline" }}>
          <input
            type="checkbox"
            value={carry.value}
            style={{ width: 50 }}
            checked={noteCaries[`${caries[index].value}`]}
            onChange={(e) => {
              setCaries((preCaries) => {
                const newCaries = { ...preCaries };
                newCaries[`${e.target.value}`] = !newCaries[`${e.target.value}`];
                return newCaries;
              });
            }}
          />
          <label>{carry.text}</label>
        </div>
      ))}
      <button
        className="add"
        onClick={() =>
          add((preArr) => [
            {
              id: v4(),
              notePriority,
              noteText,
              noteDate,
              noteTime,
              noteTransportation,
              noteCaries,
            },
            ...preArr,
          ])
        }
      >
        新增
      </button>
    </div>
  );
});
export default Edit;
