import { Module } from "@nestjs/common";
import { GrammarFileModuleBase } from "./base/grammarFile.module.base";
import { GrammarFileService } from "./grammarFile.service";
import { GrammarFileController } from "./grammarFile.controller";
import { GrammarFileResolver } from "./grammarFile.resolver";

@Module({
  imports: [GrammarFileModuleBase],
  controllers: [GrammarFileController],
  providers: [GrammarFileService, GrammarFileResolver],
  exports: [GrammarFileService],
})
export class GrammarFileModule {}
