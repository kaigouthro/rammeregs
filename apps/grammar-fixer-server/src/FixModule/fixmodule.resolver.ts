import * as graphql from "@nestjs/graphql";
import { FixInput } from "../fixModule/FixInput";
import { FixModuleService } from "./fixmodule.service";

export class FixModuleResolver {
  constructor(protected readonly service: FixModuleService) {}

  @graphql.Query(() => String)
  async ApplyFix(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ApplyFix(args);
  }

  @graphql.Query(() => [FixInput])
  async GetSuggestedFixes(
    @graphql.Args()
    args: string
  ): Promise<FixInput[]> {
    return this.service.GetSuggestedFixes(args);
  }

  @graphql.Mutation(() => String)
  async ImplementFix(
    @graphql.Args()
    args: FixInput
  ): Promise<string> {
    return this.service.ImplementFix(args);
  }

  @graphql.Query(() => String)
  async ListFixes(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ListFixes(args);
  }

  @graphql.Mutation(() => String)
  async ProposeFix(
    @graphql.Args()
    args: FixInput
  ): Promise<string> {
    return this.service.ProposeFix(args);
  }

  @graphql.Query(() => String)
  async SuggestFix(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SuggestFix(args);
  }
}
