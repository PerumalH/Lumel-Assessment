/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

const TableRow = ({ row, handleUpdate, isChild }) => {
  const [inputValue, setInputValue] = useState("");
  const [variance, setVariance] = useState(
    (((row.value - row.OValue) / row.OValue) * 100).toFixed(2)
  );

  console.log(
    (((row.value - row.OValue) / row.OValue) * 100).toFixed(2),
    (80 / 1500) * 100
  );
  const updateVariance = (percent) => {
    setVariance(percent);
    const newValue = row.value + (row.value / 100) * percent;
    console.log(newValue, "child");
    handleUpdate(row, false, newValue);
  };
  useEffect(() => {
    setVariance((((row.value - row.OValue) / row.OValue) * 100).toFixed(2));
  }, []);

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
      <td style={{ textAlign: "center", padding: "8px" }}>
        <button
          onClick={() => {
            updateVariance(inputValue);
          }}
        >
          Apply %
        </button>
      </td>
      <td style={{ textAlign: "center", padding: "8px" }}>
        <button
          onClick={() => {
            handleUpdate(row, false, inputValue);
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
