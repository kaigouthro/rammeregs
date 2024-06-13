import * as graphql from "@nestjs/graphql";
import { FixSuggestionResolverBase } from "./base/fixSuggestion.resolver.base";
import { FixSuggestion } from "./base/FixSuggestion";
import { FixSuggestionService } from "./fixSuggestion.service";

@graphql.Resolver(() => FixSuggestion)
export class FixSuggestionResolver extends FixSuggestionResolverBase {
  constructor(protected readonly service: FixSuggestionService) {
    super(service);
  }
}
