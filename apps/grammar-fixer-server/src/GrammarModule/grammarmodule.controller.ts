import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GrammarModuleService } from "./grammarmodule.service";
import { UploadGrammarInput } from "../grammarModule/UploadGrammarInput";

@swagger.ApiTags("grammarModules")
@common.Controller("grammarModules")
export class GrammarModuleController {
  constructor(protected readonly service: GrammarModuleService) {}

  @common.Get("/:id/parse-grammar")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ParseGrammar(
    @common.Body()
    body: UploadGrammarInput
  ): Promise<string> {
        return this.service.ParseGrammar(body);
      }

  @common.Post("/parse-grammar-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ParseGrammarFile(
    @common.Body()
    body: UploadGrammarInput
  ): Promise<string> {
        return this.service.ParseGrammarFile(body);
      }

  @common.Get("/:id/upload-grammar")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadGrammar(
    @common.Body()
    body: UploadGrammarInput
  ): Promise<string> {
        return this.service.UploadGrammar(body);
      }

  @common.Post("/upload-grammar-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadGrammarFile(
    @common.Body()
    body: UploadGrammarInput
  ): Promise<string> {
        return this.service.UploadGrammarFile(body);
      }
}
