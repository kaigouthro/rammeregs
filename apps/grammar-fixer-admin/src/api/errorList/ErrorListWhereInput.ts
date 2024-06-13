import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ErrorListWhereInput = {
  columnNumber?: IntNullableFilter;
  id?: StringFilter;
  lineNumber?: IntNullableFilter;
  message?: StringNullableFilter;
};
