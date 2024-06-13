import { Module } from "@nestjs/common";
import { GrammarModuleService } from "./grammarmodule.service";
import { GrammarModuleController } from "./grammarmodule.controller";
import { GrammarModuleResolver } from "./grammarmodule.resolver";

@Module({
  controllers: [GrammarModuleController],
  providers: [GrammarModuleService, GrammarModuleResolver],
  exports: [GrammarModuleService],
})
export class GrammarModuleModule {}
