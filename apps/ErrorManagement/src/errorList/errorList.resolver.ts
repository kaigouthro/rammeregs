import * as graphql from "@nestjs/graphql";
import { ErrorListResolverBase } from "./base/errorList.resolver.base";
import { ErrorList } from "./base/ErrorList";
import { ErrorListService } from "./errorList.service";

@graphql.Resolver(() => ErrorList)
export class ErrorListResolver extends ErrorListResolverBase {
  constructor(protected readonly service: ErrorListService) {
    super(service);
  }
}
