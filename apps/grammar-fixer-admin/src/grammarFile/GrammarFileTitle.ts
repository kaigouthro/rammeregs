import { GrammarFile as TGrammarFile } from "../api/grammarFile/GrammarFile";

export const GRAMMARFILE_TITLE_FIELD = "fileName";

export const GrammarFileTitle = (record: TGrammarFile): string => {
  return record.fileName?.toString() || String(record.id);
};
