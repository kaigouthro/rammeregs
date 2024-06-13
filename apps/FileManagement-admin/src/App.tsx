import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GrammarFileList } from "./grammarFile/GrammarFileList";
import { GrammarFileCreate } from "./grammarFile/GrammarFileCreate";
import { GrammarFileEdit } from "./grammarFile/GrammarFileEdit";
import { GrammarFileShow } from "./grammarFile/GrammarFileShow";
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
        title={"FileManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="GrammarFile"
          list={GrammarFileList}
          edit={GrammarFileEdit}
          create={GrammarFileCreate}
          show={GrammarFileShow}
        />
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
