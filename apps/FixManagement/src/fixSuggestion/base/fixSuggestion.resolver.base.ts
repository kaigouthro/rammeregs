/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FixSuggestion } from "./FixSuggestion";
import { FixSuggestionCountArgs } from "./FixSuggestionCountArgs";
import { FixSuggestionFindManyArgs } from "./FixSuggestionFindManyArgs";
import { FixSuggestionFindUniqueArgs } from "./FixSuggestionFindUniqueArgs";
import { CreateFixSuggestionArgs } from "./CreateFixSuggestionArgs";
import { UpdateFixSuggestionArgs } from "./UpdateFixSuggestionArgs";
import { DeleteFixSuggestionArgs } from "./DeleteFixSuggestionArgs";
import { FixSuggestionService } from "../fixSuggestion.service";
@graphql.Resolver(() => FixSuggestion)
export class FixSuggestionResolverBase {
  constructor(protected readonly service: FixSuggestionService) {}

  async _fixSuggestionsMeta(
    @graphql.Args() args: FixSuggestionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FixSuggestion])
  async fixSuggestions(
    @graphql.Args() args: FixSuggestionFindManyArgs
  ): Promise<FixSuggestion[]> {
    return this.service.fixSuggestions(args);
  }

  @graphql.Query(() => FixSuggestion, { nullable: true })
  async fixSuggestion(
    @graphql.Args() args: FixSuggestionFindUniqueArgs
  ): Promise<FixSuggestion | null> {
    const result = await this.service.fixSuggestion(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FixSuggestion)
  async createFixSuggestion(
    @graphql.Args() args: CreateFixSuggestionArgs
  ): Promise<FixSuggestion> {
    return await this.service.createFixSuggestion({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => FixSuggestion)
  async updateFixSuggestion(
    @graphql.Args() args: UpdateFixSuggestionArgs
  ): Promise<FixSuggestion | null> {
    try {
      return await this.service.updateFixSuggestion({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FixSuggestion)
  async deleteFixSuggestion(
    @graphql.Args() args: DeleteFixSuggestionArgs
  ): Promise<FixSuggestion | null> {
    try {
      return await this.service.deleteFixSuggestion(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
