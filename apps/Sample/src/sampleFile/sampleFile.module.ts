import { Module } from "@nestjs/common";
import { SampleFileModuleBase } from "./base/sampleFile.module.base";
import { SampleFileService } from "./sampleFile.service";
import { SampleFileController } from "./sampleFile.controller";
import { SampleFileResolver } from "./sampleFile.resolver";

@Module({
  imports: [SampleFileModuleBase],
  controllers: [SampleFileController],
  providers: [SampleFileService, SampleFileResolver],
  exports: [SampleFileService],
})
export class SampleFileModule {}
