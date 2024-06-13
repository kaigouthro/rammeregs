import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GrammarFileServiceBase } from "./base/grammarFile.service.base";

@Injectable()
export class GrammarFileService extends GrammarFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
