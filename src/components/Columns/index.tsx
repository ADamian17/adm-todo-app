import React from "react";

import Column from "../Column";

type ColumnsType = {
  columns: string[]
};

const Columns: React.FC<ColumnsType> = ({ columns }) => {
  const columnsList = columns && columns.map(column => (
    <Column key={column} headline={column} />
  ))

  return columnsList
};

export default Columns;
