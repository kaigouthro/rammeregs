import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ErrorModuleService } from "./errormodule.service";
import { AddErrorInput } from "../errorModule/AddErrorInput";

@swagger.ApiTags("errorModules")
@common.Controller("errorModules")
export class ErrorModuleController {
  constructor(protected readonly service: ErrorModuleService) {}

  @common.Get("/:id/add-error")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddError(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddError(body);
      }

  @common.Post("/add-parsing-error")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddParsingError(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddParsingError(body);
      }

  @common.Delete("/clear-errors")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ClearErrors(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ClearErrors(body);
      }

  @common.Get("/get-all-errors")
  @swagger.ApiOkResponse({
    type: AddErrorInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetAllErrors(
    @common.Body()
    body: string
  ): Promise<AddErrorInput[]> {
        return this.service.GetAllErrors(body);
      }

  @common.Get("/:id/list-errors")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ListErrors(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ListErrors(body);
      }

  @common.Delete("/reset-all-errors")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ResetAllErrors(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ResetAllErrors(body);
      }
}
