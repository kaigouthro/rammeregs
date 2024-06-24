import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FixSuggestionServiceBase } from "./base/fixSuggestion.service.base";

@Injectable()
export class FixSuggestionService extends FixSuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
