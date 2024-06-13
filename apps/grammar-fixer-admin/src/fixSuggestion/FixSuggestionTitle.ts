import { FixSuggestion as TFixSuggestion } from "../api/fixSuggestion/FixSuggestion";

export const FIXSUGGESTION_TITLE_FIELD = "id";

export const FixSuggestionTitle = (record: TFixSuggestion): string => {
  return record.id?.toString() || String(record.id);
};
