/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, GrammarFile as PrismaGrammarFile } from "@prisma/client";

export class GrammarFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GrammarFileCountArgs, "select">
  ): Promise<number> {
    return this.prisma.grammarFile.count(args);
  }

  async grammarFiles<T extends Prisma.GrammarFileFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrammarFileFindManyArgs>
  ): Promise<PrismaGrammarFile[]> {
    return this.prisma.grammarFile.findMany<Prisma.GrammarFileFindManyArgs>(
      args
    );
  }
  async grammarFile<T extends Prisma.GrammarFileFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrammarFileFindUniqueArgs>
  ): Promise<PrismaGrammarFile | null> {
    return this.prisma.grammarFile.findUnique(args);
  }
  async createGrammarFile<T extends Prisma.GrammarFileCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrammarFileCreateArgs>
  ): Promise<PrismaGrammarFile> {
    return this.prisma.grammarFile.create<T>(args);
  }
  async updateGrammarFile<T extends Prisma.GrammarFileUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrammarFileUpdateArgs>
  ): Promise<PrismaGrammarFile> {
    return this.prisma.grammarFile.update<T>(args);
  }
  async deleteGrammarFile<T extends Prisma.GrammarFileDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GrammarFileDeleteArgs>
  ): Promise<PrismaGrammarFile> {
    return this.prisma.grammarFile.delete(args);
  }
}