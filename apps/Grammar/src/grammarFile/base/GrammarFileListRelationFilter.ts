/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GrammarFileWhereInput } from "./GrammarFileWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GrammarFileListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GrammarFileWhereInput,
  })
  @ValidateNested()
  @Type(() => GrammarFileWhereInput)
  @IsOptional()
  @Field(() => GrammarFileWhereInput, {
    nullable: true,
  })
  every?: GrammarFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => GrammarFileWhereInput,
  })
  @ValidateNested()
  @Type(() => GrammarFileWhereInput)
  @IsOptional()
  @Field(() => GrammarFileWhereInput, {
    nullable: true,
  })
  some?: GrammarFileWhereInput;

  @ApiProperty({
    required: false,
    type: () => GrammarFileWhereInput,
  })
  @ValidateNested()
  @Type(() => GrammarFileWhereInput)
  @IsOptional()
  @Field(() => GrammarFileWhereInput, {
    nullable: true,
  })
  none?: GrammarFileWhereInput;
}
export { GrammarFileListRelationFilter as GrammarFileListRelationFilter };
