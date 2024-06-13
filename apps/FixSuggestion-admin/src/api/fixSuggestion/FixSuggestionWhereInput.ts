import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FixSuggestionWhereInput = {
  applied?: BooleanNullableFilter;
  id?: StringFilter;
  suggestion?: StringNullableFilter;
};
