import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SampleFileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fileContent" multiline source="fileContent" />
        <TextInput label="fileName" source="fileName" />
      </SimpleForm>
    </Edit>
  );
};
