import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const GrammarFileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fileContent" multiline source="fileContent" />
        <TextInput label="fileName" source="fileName" />
      </SimpleForm>
    </Create>
  );
};
