import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const ErrorListEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="columnNumber" source="columnNumber" />
        <NumberInput step={1} label="lineNumber" source="lineNumber" />
        <TextInput label="message" multiline source="message" />
      </SimpleForm>
    </Edit>
  );
};
