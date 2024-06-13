import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ErrorListCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="columnNumber" source="columnNumber" />
        <NumberInput step={1} label="lineNumber" source="lineNumber" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Create>
  );
};
