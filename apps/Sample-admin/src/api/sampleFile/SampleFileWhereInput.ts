import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SampleFileWhereInput = {
  fileContent?: StringNullableFilter;
  fileName?: StringNullableFilter;
  id?: StringFilter;
};
