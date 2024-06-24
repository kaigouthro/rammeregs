import { Module } from "@nestjs/common";
import { FixSuggestionModuleBase } from "./base/fixSuggestion.module.base";
import { FixSuggestionService } from "./fixSuggestion.service";
import { FixSuggestionController } from "./fixSuggestion.controller";
import { FixSuggestionResolver } from "./fixSuggestion.resolver";

@Module({
  imports: [FixSuggestionModuleBase],
  controllers: [FixSuggestionController],
  providers: [FixSuggestionService, FixSuggestionResolver],
  exports: [FixSuggestionService],
})
export class FixSuggestionModule {}
