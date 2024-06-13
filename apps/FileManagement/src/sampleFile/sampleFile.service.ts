import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SampleFileServiceBase } from "./base/sampleFile.service.base";

@Injectable()
export class SampleFileService extends SampleFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
