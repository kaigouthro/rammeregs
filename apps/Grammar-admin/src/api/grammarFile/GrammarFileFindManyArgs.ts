import { GrammarFileWhereInput } from "./GrammarFileWhereInput";
import { GrammarFileOrderByInput } from "./GrammarFileOrderByInput";

export type GrammarFileFindManyArgs = {
  where?: GrammarFileWhereInput;
  orderBy?: Array<GrammarFileOrderByInput>;
  skip?: number;
  take?: number;
};
