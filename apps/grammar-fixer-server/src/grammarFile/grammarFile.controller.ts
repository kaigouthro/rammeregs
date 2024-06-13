import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GrammarFileService } from "./grammarFile.service";
import { GrammarFileControllerBase } from "./base/grammarFile.controller.base";

@swagger.ApiTags("grammarFiles")
@common.Controller("grammarFiles")
export class GrammarFileController extends GrammarFileControllerBase {
  constructor(protected readonly service: GrammarFileService) {
    super(service);
  }
}
