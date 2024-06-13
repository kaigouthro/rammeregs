import * as graphql from "@nestjs/graphql";
import { UploadSampleInput } from "../sampleModule/UploadSampleInput";
import { ValidateSampleInput } from "../sampleModule/ValidateSampleInput";
import { SampleModuleService } from "./samplemodule.service";

export class SampleModuleResolver {
  constructor(protected readonly service: SampleModuleService) {}

  @graphql.Query(() => String)
  async UploadSample(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadSample(args);
  }

  @graphql.Mutation(() => String)
  async UploadSampleFile(
    @graphql.Args()
    args: UploadSampleInput
  ): Promise<string> {
    return this.service.UploadSampleFile(args);
  }

  @graphql.Query(() => String)
  async ValidateSample(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ValidateSample(args);
  }

  @graphql.Mutation(() => String)
  async ValidateSampleFile(
    @graphql.Args()
    args: ValidateSampleInput
  ): Promise<string> {
    return this.service.ValidateSampleFile(args);
  }
}
