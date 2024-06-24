import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SampleFileList } from "./sampleFile/SampleFileList";
import { SampleFileCreate } from "./sampleFile/SampleFileCreate";
import { SampleFileEdit } from "./sampleFile/SampleFileEdit";
import { SampleFileShow } from "./sampleFile/SampleFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Sample"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SampleFile"
          list={SampleFileList}
          edit={SampleFileEdit}
          create={SampleFileCreate}
          show={SampleFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
