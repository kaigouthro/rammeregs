import { ErrorList as TErrorList } from "../api/errorList/ErrorList";

export const ERRORLIST_TITLE_FIELD = "id";

export const ErrorListTitle = (record: TErrorList): string => {
  return record.id?.toString() || String(record.id);
};
