import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SampleFileService } from "./sampleFile.service";
import { SampleFileControllerBase } from "./base/sampleFile.controller.base";

@swagger.ApiTags("sampleFiles")
@common.Controller("sampleFiles")
export class SampleFileController extends SampleFileControllerBase {
  constructor(protected readonly service: SampleFileService) {
    super(service);
  }
}
