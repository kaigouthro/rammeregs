/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FixSuggestionService } from "../fixSuggestion.service";
import { FixSuggestionCreateInput } from "./FixSuggestionCreateInput";
import { FixSuggestion } from "./FixSuggestion";
import { FixSuggestionFindManyArgs } from "./FixSuggestionFindManyArgs";
import { FixSuggestionWhereUniqueInput } from "./FixSuggestionWhereUniqueInput";
import { FixSuggestionUpdateInput } from "./FixSuggestionUpdateInput";

export class FixSuggestionControllerBase {
  constructor(protected readonly service: FixSuggestionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FixSuggestion })
  async createFixSuggestion(
    @common.Body() data: FixSuggestionCreateInput
  ): Promise<FixSuggestion> {
    return await this.service.createFixSuggestion({
      data: data,
      select: {
        applied: true,
        createdAt: true,
        id: true,
        suggestion: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FixSuggestion] })
  @ApiNestedQuery(FixSuggestionFindManyArgs)
  async fixSuggestions(
    @common.Req() request: Request
  ): Promise<FixSuggestion[]> {
    const args = plainToClass(FixSuggestionFindManyArgs, request.query);
    return this.service.fixSuggestions({
      ...args,
      select: {
        applied: true,
        createdAt: true,
        id: true,
        suggestion: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FixSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fixSuggestion(
    @common.Param() params: FixSuggestionWhereUniqueInput
  ): Promise<FixSuggestion | null> {
    const result = await this.service.fixSuggestion({
      where: params,
      select: {
        applied: true,
        createdAt: true,
        id: true,
        suggestion: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FixSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFixSuggestion(
    @common.Param() params: FixSuggestionWhereUniqueInput,
    @common.Body() data: FixSuggestionUpdateInput
  ): Promise<FixSuggestion | null> {
    try {
      return await this.service.updateFixSuggestion({
        where: params,
        data: data,
        select: {
          applied: true,
          createdAt: true,
          id: true,
          suggestion: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FixSuggestion })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFixSuggestion(
    @common.Param() params: FixSuggestionWhereUniqueInput
  ): Promise<FixSuggestion | null> {
    try {
      return await this.service.deleteFixSuggestion({
        where: params,
        select: {
          applied: true,
          createdAt: true,
          id: true,
          suggestion: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
