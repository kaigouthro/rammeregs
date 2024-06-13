import { SampleFileWhereInput } from "./SampleFileWhereInput";
import { SampleFileOrderByInput } from "./SampleFileOrderByInput";

export type SampleFileFindManyArgs = {
  where?: SampleFileWhereInput;
  orderBy?: Array<SampleFileOrderByInput>;
  skip?: number;
  take?: number;
};
