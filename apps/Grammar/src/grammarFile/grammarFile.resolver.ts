import * as graphql from "@nestjs/graphql";
import { GrammarFileResolverBase } from "./base/grammarFile.resolver.base";
import { GrammarFile } from "./base/GrammarFile";
import { GrammarFileService } from "./grammarFile.service";

@graphql.Resolver(() => GrammarFile)
export class GrammarFileResolver extends GrammarFileResolverBase {
  constructor(protected readonly service: GrammarFileService) {
    super(service);
  }
}
