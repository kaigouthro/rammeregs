import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ErrorListService } from "./errorList.service";
import { ErrorListControllerBase } from "./base/errorList.controller.base";

@swagger.ApiTags("errorLists")
@common.Controller("errorLists")
export class ErrorListController extends ErrorListControllerBase {
  constructor(protected readonly service: ErrorListService) {
    super(service);
  }
}
