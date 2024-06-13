import { Injectable } from "@nestjs/common";
import { UploadSampleInput } from "../sampleModule/UploadSampleInput";
import { ValidateSampleInput } from "../sampleModule/ValidateSampleInput";

@Injectable()
export class SampleModuleService {
  constructor() {}
  async UploadSample(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadSampleFile(args: UploadSampleInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ValidateSample(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ValidateSampleFile(args: ValidateSampleInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
