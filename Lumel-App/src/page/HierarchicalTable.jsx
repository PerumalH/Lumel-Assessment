import { useState, useEffect } from "react";
import TableRow from "../components/TableRow";
import React from "react";

const initialData = {
  rows: [
    {
      id: "electronics",
      label: "Electronics",
      value: 1500,
      OValue: 1500,
      children: [
        { id: "phones", label: "Phones", value: 800, OValue: 800 },
        { id: "laptops", label: "Laptops", value: 700, OValue: 700 },
      ],
    },
    {
      id: "furniture",
      label: "Furniture",
      value: 1000,
      OValue: 1000,
      children: [
        { id: "tables", label: "Tables", value: 300, OValue: 300 },
        { id: "chairs", label: "Chairs", value: 700, OValue: 700 },
      ],
    },
  ],
};

const HierarchicalTable = () => {
  const [data, setData] = useState(initialData);

  const updateParentTotals = () => {
    const updatedRows = data.rows.map((row) => ({
      ...row,
      value: row.children.reduce((sum, child) => sum + child.value, 0),
    }));
    setData((prev) => ({ ...prev, rows: updatedRows }));
  };

  const handleUpdate = (row, isPercent, newValue) => {
    console.log(row, "check");
    const updatedData = { ...data };
    const updateNode = (node) => {
      if (node.id === row.id) {
        node.value = isPercent
          ? +node.value * (1 + +newValue / 100)
          : +newValue;
        return true;
      }
      if (node.children) {
        node.children.forEach(updateNode);
        node.value = node.children.reduce(
          (sum, child) => sum + +child.value,
          0
        );
      }
      return false;
    };

    updatedData.rows.forEach(updateNode);
    setData(updatedData);
    updateParentTotals();
  };

  useEffect(() => {
    updateParentTotals();
  }, []);

  const grandTotal = data.rows.reduce((sum, row) => sum + row.value, 0);

  return (
    <table>
      <thead>
        <tr>
          <th>Label</th>
          <th>Value</th>
          <th>Input</th>
          <th>Allocation %</th>
          <th>Allocation Val</th>
          <th>Variance %</th>
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row) => (
          <React.Fragment key={row.id}>
            <TableRow row={row} handleUpdate={handleUpdate} isChild={false} />
            {row.children.map((child) => (
              <TableRow
                key={child.id}
                row={child}
                handleUpdate={handleUpdate}
                isChild={true}
              />
            ))}
          </React.Fragment>
        ))}
        <tr>
          <td>Grand Total</td>
          <td>{grandTotal}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default HierarchicalTable;
