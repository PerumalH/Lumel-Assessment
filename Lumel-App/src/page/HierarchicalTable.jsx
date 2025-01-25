import TableRow from "../components/TableRow";
import React from "react";
import { useSelector } from "react-redux";

const HierarchicalTable = () => {
  const data = useSelector((state) => state.TableData);
  console.log(data);

  const grandTotal = 0;

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
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <TableRow row={row} isChild={false} />
            {row.children.map((child) => (
              <TableRow key={child.id} row={child} isChild={true} />
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
