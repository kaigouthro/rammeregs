import { SortOrder } from "../../util/SortOrder";

export type SampleFileOrderByInput = {
  createdAt?: SortOrder;
  fileContent?: SortOrder;
  fileName?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
