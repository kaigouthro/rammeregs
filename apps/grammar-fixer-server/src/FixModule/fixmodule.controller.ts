import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FixModuleService } from "./fixmodule.service";
import { FixInput } from "../fixModule/FixInput";

@swagger.ApiTags("fixModules")
@common.Controller("fixModules")
export class FixModuleController {
  constructor(protected readonly service: FixModuleService) {}

  @common.Get("/:id/apply-fix")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyFix(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ApplyFix(body);
      }

  @common.Get("/get-suggested-fixes")
  @swagger.ApiOkResponse({
    type: FixInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetSuggestedFixes(
    @common.Body()
    body: string
  ): Promise<FixInput[]> {
        return this.service.GetSuggestedFixes(body);
      }

  @common.Post("/implement-fix")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ImplementFix(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ImplementFix(body);
      }

  @common.Get("/:id/list-fixes")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListFixes(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ListFixes(body);
      }

  @common.Post("/propose-fix")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ProposeFix(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ProposeFix(body);
      }

  @common.Get("/:id/suggest-fix")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SuggestFix(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SuggestFix(body);
      }
}
