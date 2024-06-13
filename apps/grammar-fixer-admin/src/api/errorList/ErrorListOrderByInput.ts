import { SortOrder } from "../../util/SortOrder";

export type ErrorListOrderByInput = {
  columnNumber?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  lineNumber?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
};
