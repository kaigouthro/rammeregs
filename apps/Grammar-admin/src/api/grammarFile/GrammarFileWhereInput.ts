import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type GrammarFileWhereInput = {
  fileContent?: StringNullableFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
};
