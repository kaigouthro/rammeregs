import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ErrorListServiceBase } from "./base/errorList.service.base";

@Injectable()
export class ErrorListService extends ErrorListServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
