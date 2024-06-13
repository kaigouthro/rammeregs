import { Injectable } from "@nestjs/common";
import { FixInput } from "../fixModule/FixInput";

@Injectable()
export class FixModuleService {
  constructor() {}
  async ApplyFix(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetSuggestedFixes(args: string): Promise<FixInput[]> {
    throw new Error("Not implemented");
  }
  async ImplementFix(args: FixInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ListFixes(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ProposeFix(args: FixInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async SuggestFix(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
