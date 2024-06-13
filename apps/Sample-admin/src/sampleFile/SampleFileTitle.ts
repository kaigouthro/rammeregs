import { SampleFile as TSampleFile } from "../api/sampleFile/SampleFile";

export const SAMPLEFILE_TITLE_FIELD = "fileName";

export const SampleFileTitle = (record: TSampleFile): string => {
  return record.fileName?.toString() || String(record.id);
};
