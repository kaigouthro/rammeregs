import { Module } from "@nestjs/common";
import { ErrorListModuleBase } from "./base/errorList.module.base";
import { ErrorListService } from "./errorList.service";
import { ErrorListController } from "./errorList.controller";
import { ErrorListResolver } from "./errorList.resolver";

@Module({
  imports: [ErrorListModuleBase],
  controllers: [ErrorListController],
  providers: [ErrorListService, ErrorListResolver],
  exports: [ErrorListService],
})
export class ErrorListModule {}
