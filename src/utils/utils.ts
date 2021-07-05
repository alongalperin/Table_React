import _ from 'lodash';
import { HeaderCellType } from "../types/TableTypes";

export const getMaxCellsId = (cells: HeaderCellType[]) => {
  return (
    _.maxBy(cells, function (o) {
      return o.header_id;
    })?.header_id || 0
  );
};
