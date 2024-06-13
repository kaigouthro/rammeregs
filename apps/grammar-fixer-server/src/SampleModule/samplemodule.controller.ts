import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SampleModuleService } from "./samplemodule.service";
import { ValidateSampleInput } from "../sampleModule/ValidateSampleInput";

@swagger.ApiTags("sampleModules")
@common.Controller("sampleModules")
export class SampleModuleController {
  constructor(protected readonly service: SampleModuleService) {}

  @common.Get("/:id/upload-sample")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadSample(
    @common.Body()
    body: ValidateSampleInput
  ): Promise<string> {
        return this.service.UploadSample(body);
      }

  @common.Post("/upload-sample-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadSampleFile(
    @common.Body()
    body: ValidateSampleInput
  ): Promise<string> {
        return this.service.UploadSampleFile(body);
      }

  @common.Get("/:id/validate-sample")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ValidateSample(
    @common.Body()
    body: ValidateSampleInput
  ): Promise<string> {
        return this.service.ValidateSample(body);
      }

  @common.Post("/validate-sample-file")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ValidateSampleFile(
    @common.Body()
    body: ValidateSampleInput
  ): Promise<string> {
        return this.service.ValidateSampleFile(body);
      }
}
