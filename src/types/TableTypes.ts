export type Cell = {
  header_id: number;
  row_id: number;
  value: string;
};

export type HeaderCellType = {
  header_id: number;
  header_name: string;
};

export type TableRawData = {
  headers: HeaderCellType[];
  rows: { row_id: number }[];
  values: Cell[];
};
