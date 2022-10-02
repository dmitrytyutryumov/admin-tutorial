import React from "react";
import { getColumns, getUsers } from "./constants";
import "./index.css";
import { normalizeTable } from "./utils";

export function Table() {
  const [table, setTable] = React.useState([]);

  React.useEffect(() => {
    setTable(normalizeTable(getColumns(), getUsers()));
  }, []);

  return (
    <ul className="table">
      {table.map((column) => {
        return (
          <div className="table__column">
            {column.map((cell, idx) => {
              if (column[0].toLowerCase() === "country" && idx !== 0) {
                return (
                  <div className="table__cell" key={idx}>
                    <img src={cell[0]} alt={`${cell[1]} icon`} />
                    <div>{cell[1]}</div>
                  </div>
                );
              }
              return (
                <div className="table__cell" key={idx}>
                  {cell}
                </div>
              );
            })}
          </div>
        );
      })}
    </ul>
  );
}
