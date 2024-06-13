import { ErrorListWhereInput } from "./ErrorListWhereInput";
import { ErrorListOrderByInput } from "./ErrorListOrderByInput";

export type ErrorListFindManyArgs = {
  where?: ErrorListWhereInput;
  orderBy?: Array<ErrorListOrderByInput>;
  skip?: number;
  take?: number;
};
