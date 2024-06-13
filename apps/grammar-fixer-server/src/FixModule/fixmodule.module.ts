import { Module } from "@nestjs/common";
import { FixModuleService } from "./fixmodule.service";
import { FixModuleController } from "./fixmodule.controller";
import { FixModuleResolver } from "./fixmodule.resolver";

@Module({
  controllers: [FixModuleController],
  providers: [FixModuleService, FixModuleResolver],
  exports: [FixModuleService],
})
export class FixModuleModule {}
