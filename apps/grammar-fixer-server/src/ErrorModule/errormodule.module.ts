import { Module } from "@nestjs/common";
import { ErrorModuleService } from "./errormodule.service";
import { ErrorModuleController } from "./errormodule.controller";
import { ErrorModuleResolver } from "./errormodule.resolver";

@Module({
  controllers: [ErrorModuleController],
  providers: [ErrorModuleService, ErrorModuleResolver],
  exports: [ErrorModuleService],
})
export class ErrorModuleModule {}
