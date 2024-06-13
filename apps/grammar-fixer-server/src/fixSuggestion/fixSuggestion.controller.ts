import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FixSuggestionService } from "./fixSuggestion.service";
import { FixSuggestionControllerBase } from "./base/fixSuggestion.controller.base";

@swagger.ApiTags("fixSuggestions")
@common.Controller("fixSuggestions")
export class FixSuggestionController extends FixSuggestionControllerBase {
  constructor(protected readonly service: FixSuggestionService) {
    super(service);
  }
}
