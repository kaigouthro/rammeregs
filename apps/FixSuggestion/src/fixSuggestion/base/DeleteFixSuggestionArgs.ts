/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FixSuggestionWhereUniqueInput } from "./FixSuggestionWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteFixSuggestionArgs {
  @ApiProperty({
    required: true,
    type: () => FixSuggestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FixSuggestionWhereUniqueInput)
  @Field(() => FixSuggestionWhereUniqueInput, { nullable: false })
  where!: FixSuggestionWhereUniqueInput;
}

export { DeleteFixSuggestionArgs as DeleteFixSuggestionArgs };
