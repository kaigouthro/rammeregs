/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SampleFile as PrismaSampleFile } from "@prisma/client";

export class SampleFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SampleFileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.sampleFile.count(args);
  }

  async sampleFiles<T extends Prisma.SampleFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFileFindManyArgs>
  ): Promise<PrismaSampleFile[]> {
    return this.prisma.sampleFile.findMany<Prisma.SampleFileFindManyArgs>(args);
  }
  async sampleFile<T extends Prisma.SampleFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFileFindUniqueArgs>
  ): Promise<PrismaSampleFile | null> {
    return this.prisma.sampleFile.findUnique(args);
  }
  async createSampleFile<T extends Prisma.SampleFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFileCreateArgs>
  ): Promise<PrismaSampleFile> {
    return this.prisma.sampleFile.create<T>(args);
  }
  async updateSampleFile<T extends Prisma.SampleFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFileUpdateArgs>
  ): Promise<PrismaSampleFile> {
    return this.prisma.sampleFile.update<T>(args);
  }
  async deleteSampleFile<T extends Prisma.SampleFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SampleFileDeleteArgs>
  ): Promise<PrismaSampleFile> {
    return this.prisma.sampleFile.delete(args);
  }
}
