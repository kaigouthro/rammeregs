import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
} from "react-admin";

export const FixSuggestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="applied" source="applied" />
        <TextInput label="suggestion" multiline source="suggestion" />
      </SimpleForm>
    </Edit>
  );
};
