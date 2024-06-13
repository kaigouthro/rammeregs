import * as graphql from "@nestjs/graphql";
import { ParseGrammarInput } from "../grammarModule/ParseGrammarInput";
import { UploadGrammarInput } from "../grammarModule/UploadGrammarInput";
import { GrammarModuleService } from "./grammarmodule.service";

export class GrammarModuleResolver {
  constructor(protected readonly service: GrammarModuleService) {}

  @graphql.Query(() => String)
  async ParseGrammar(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ParseGrammar(args);
  }

  @graphql.Mutation(() => String)
  async ParseGrammarFile(
    @graphql.Args()
    args: ParseGrammarInput
  ): Promise<string> {
    return this.service.ParseGrammarFile(args);
  }

  @graphql.Query(() => String)
  async UploadGrammar(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UploadGrammar(args);
  }

  @graphql.Mutation(() => String)
  async UploadGrammarFile(
    @graphql.Args()
    args: UploadGrammarInput
  ): Promise<string> {
    return this.service.UploadGrammarFile(args);
  }
}
