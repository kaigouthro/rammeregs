import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const FixSuggestionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="applied" source="applied" />
        <TextInput label="suggestion" multiline source="suggestion" />
      </SimpleForm>
    </Create>
  );
};
