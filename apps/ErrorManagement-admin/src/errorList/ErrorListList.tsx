import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ErrorListList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ErrorLists"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="columnNumber" source="columnNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="lineNumber" source="lineNumber" />
        <TextField label="message" source="message" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
