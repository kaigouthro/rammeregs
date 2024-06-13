import { SortOrder } from "../../util/SortOrder";

export type GrammarFileOrderByInput = {
  createdAt?: SortOrder;
  fileContent?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
