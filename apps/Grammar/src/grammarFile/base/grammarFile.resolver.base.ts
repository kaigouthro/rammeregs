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
import { GrammarFile } from "./GrammarFile";
import { GrammarFileCountArgs } from "./GrammarFileCountArgs";
import { GrammarFileFindManyArgs } from "./GrammarFileFindManyArgs";
import { GrammarFileFindUniqueArgs } from "./GrammarFileFindUniqueArgs";
import { CreateGrammarFileArgs } from "./CreateGrammarFileArgs";
import { UpdateGrammarFileArgs } from "./UpdateGrammarFileArgs";
import { DeleteGrammarFileArgs } from "./DeleteGrammarFileArgs";
import { GrammarFileService } from "../grammarFile.service";
@graphql.Resolver(() => GrammarFile)
export class GrammarFileResolverBase {
  constructor(protected readonly service: GrammarFileService) {}

  async _grammarFilesMeta(
    @graphql.Args() args: GrammarFileCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GrammarFile])
  async grammarFiles(
    @graphql.Args() args: GrammarFileFindManyArgs
  ): Promise<GrammarFile[]> {
    return this.service.grammarFiles(args);
  }

  @graphql.Query(() => GrammarFile, { nullable: true })
  async grammarFile(
    @graphql.Args() args: GrammarFileFindUniqueArgs
  ): Promise<GrammarFile | null> {
    const result = await this.service.grammarFile(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GrammarFile)
  async createGrammarFile(
    @graphql.Args() args: CreateGrammarFileArgs
  ): Promise<GrammarFile> {
    return await this.service.createGrammarFile({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => GrammarFile)
  async updateGrammarFile(
    @graphql.Args() args: UpdateGrammarFileArgs
  ): Promise<GrammarFile | null> {
    try {
      return await this.service.updateGrammarFile({
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

  @graphql.Mutation(() => GrammarFile)
  async deleteGrammarFile(
    @graphql.Args() args: DeleteGrammarFileArgs
  ): Promise<GrammarFile | null> {
    try {
      return await this.service.deleteGrammarFile(args);
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
