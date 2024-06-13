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
import { GrammarFileList } from "./grammarFile/GrammarFileList";
import { GrammarFileCreate } from "./grammarFile/GrammarFileCreate";
import { GrammarFileEdit } from "./grammarFile/GrammarFileEdit";
import { GrammarFileShow } from "./grammarFile/GrammarFileShow";
import { FixSuggestionList } from "./fixSuggestion/FixSuggestionList";
import { FixSuggestionCreate } from "./fixSuggestion/FixSuggestionCreate";
import { FixSuggestionEdit } from "./fixSuggestion/FixSuggestionEdit";
import { FixSuggestionShow } from "./fixSuggestion/FixSuggestionShow";
import { ErrorListList } from "./errorList/ErrorListList";
import { ErrorListCreate } from "./errorList/ErrorListCreate";
import { ErrorListEdit } from "./errorList/ErrorListEdit";
import { ErrorListShow } from "./errorList/ErrorListShow";
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
        title={"GrammarFixer"}
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
        <Resource
          name="GrammarFile"
          list={GrammarFileList}
          edit={GrammarFileEdit}
          create={GrammarFileCreate}
          show={GrammarFileShow}
        />
        <Resource
          name="FixSuggestion"
          list={FixSuggestionList}
          edit={FixSuggestionEdit}
          create={FixSuggestionCreate}
          show={FixSuggestionShow}
        />
        <Resource
          name="ErrorList"
          list={ErrorListList}
          edit={ErrorListEdit}
          create={ErrorListCreate}
          show={ErrorListShow}
        />
      </Admin>
    </div>
  );
};

export default App;
