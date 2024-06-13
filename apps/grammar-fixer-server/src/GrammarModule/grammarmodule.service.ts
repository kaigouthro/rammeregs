import { Injectable } from "@nestjs/common";
import { ParseGrammarInput } from "../grammarModule/ParseGrammarInput";
import { UploadGrammarInput } from "../grammarModule/UploadGrammarInput";

@Injectable()
export class GrammarModuleService {
  constructor() {}
  async ParseGrammar(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ParseGrammarFile(args: ParseGrammarInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadGrammar(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UploadGrammarFile(args: UploadGrammarInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
