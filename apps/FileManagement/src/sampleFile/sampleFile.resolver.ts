import * as graphql from "@nestjs/graphql";
import { SampleFileResolverBase } from "./base/sampleFile.resolver.base";
import { SampleFile } from "./base/SampleFile";
import { SampleFileService } from "./sampleFile.service";

@graphql.Resolver(() => SampleFile)
export class SampleFileResolver extends SampleFileResolverBase {
  constructor(protected readonly service: SampleFileService) {
    super(service);
  }
}
