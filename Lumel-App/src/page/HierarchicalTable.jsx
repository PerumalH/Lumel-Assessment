import TableRow from "../components/TableRow";
import React from "react";
import { useSelector } from "react-redux";

const HierarchicalTable = () => {
  const data = useSelector((state) => state.TableData);

  const grandTotal = data.reduce((init, row) => init + row.value, 0);

  return (
    <fieldset>
      <legend style={{ fontSize: "1.4rem", textAlign: "left" }}>
        <p>Hierarchical Table Webiste</p>
      </legend>
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
              <TableRow row={row} isChild={false} parent={row.id} />
              {row.children.map((child) => (
                <TableRow
                  key={child.id}
                  row={child}
                  isChild={true}
                  parent={row.id}
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
    </fieldset>
  );
};

export default HierarchicalTable;
