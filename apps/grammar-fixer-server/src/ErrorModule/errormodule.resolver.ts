import * as graphql from "@nestjs/graphql";
import { AddErrorInput } from "../errorModule/AddErrorInput";
import { ErrorModuleService } from "./errormodule.service";

export class ErrorModuleResolver {
  constructor(protected readonly service: ErrorModuleService) {}

  @graphql.Query(() => String)
  async AddError(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddError(args);
  }

  @graphql.Mutation(() => String)
  async AddParsingError(
    @graphql.Args()
    args: AddErrorInput
  ): Promise<string> {
    return this.service.AddParsingError(args);
  }

  @graphql.Mutation(() => String)
  async ClearErrors(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ClearErrors(args);
  }

  @graphql.Query(() => [AddErrorInput])
  async GetAllErrors(
    @graphql.Args()
    args: string
  ): Promise<AddErrorInput[]> {
    return this.service.GetAllErrors(args);
  }

  @graphql.Query(() => String)
  async ListErrors(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ListErrors(args);
  }

  @graphql.Mutation(() => String)
  async ResetAllErrors(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ResetAllErrors(args);
  }
}
