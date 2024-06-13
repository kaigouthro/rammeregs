import { Injectable } from "@nestjs/common";
import { AddErrorInput } from "../errorModule/AddErrorInput";

@Injectable()
export class ErrorModuleService {
  constructor() {}
  async AddError(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AddParsingError(args: AddErrorInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ClearErrors(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetAllErrors(args: string): Promise<AddErrorInput[]> {
    throw new Error("Not implemented");
  }
  async ListErrors(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ResetAllErrors(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
