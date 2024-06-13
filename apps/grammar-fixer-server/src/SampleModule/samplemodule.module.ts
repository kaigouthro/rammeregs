import { Module } from "@nestjs/common";
import { SampleModuleService } from "./samplemodule.service";
import { SampleModuleController } from "./samplemodule.controller";
import { SampleModuleResolver } from "./samplemodule.resolver";

@Module({
  controllers: [SampleModuleController],
  providers: [SampleModuleService, SampleModuleResolver],
  exports: [SampleModuleService],
})
export class SampleModuleModule {}
