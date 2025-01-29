/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { StoreAction } from "../store/store";

const TableRow = ({ row, isChild, parent }) => {
  const [inputValue, setInputValue] = useState("");
  const [variance, setVariance] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const Percent = ((row.value - row.prevalue) / row.prevalue) * 100;
    setVariance(Percent.toFixed(2));
  }, [row]);

  return (
    <tr>
      <td
        style={{
          padding: "8px",
          marginLeft: "10px",
          textAlign: "right",
          width: "20px",
        }}
      >
        {isChild ? "-- " : ""}
        {row.label}
      </td>
      <td style={{ textAlign: "right", padding: "8px" }}>{row.value}</td>
      <td style={{ textAlign: "center", padding: "8px" }}>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: "100%", padding: "4px" }}
        />
      </td>
      <td
        style={{
          textAlign: "center",
          padding: "8px",
        }}
      >
        <button
          style={{
            cursor: `${!isChild ? "none" : ""}`,
            border: `${!isChild ? "none" : ""}`,
          }}
          disabled={!isChild}
          onClick={() => {
            const calcValue = (row.value / 100) * inputValue;
            dispatch(
              StoreAction.UpdateValueByPercentage({
                parent: parent,
                child: row.id,
                isChild,
                updateValue: calcValue,
                isDirect: false,
              })
            );
            setInputValue(() => "");
          }}
        >
          Apply %
        </button>
      </td>
      <td style={{ textAlign: "center", padding: "8px" }}>
        <button
          onClick={() => {
            dispatch(
              StoreAction.UpdateValueByPercentage({
                parent: parent,
                child: row.id,
                isChild: isChild,
                updateValue: inputValue,
                isDirect: true,
              })
            );
            setInputValue(() => "");
          }}
        >
          Set Value
        </button>
      </td>
      <td style={{ textAlign: "center", padding: "8px" }}>{variance}%</td>
    </tr>
  );
};

export default TableRow;
