import React from "react";
import { registerPlugins, getPlugins } from "@webiny/plugins";
import { PageBuilderProvider } from "@webiny/app-page-builder/contexts/PageBuilder";
import { GenericErrorPage, GenericNotFoundPage } from "./webiny/pageBuilder";
import plugins from "./webiny/plugins";
import "./App.scss";

registerPlugins(plugins);

const defaults = {
  pages: {
    notFound: GenericNotFoundPage,
    error: GenericErrorPage
  }
};

const App = () => {
  return (
    <PageBuilderProvider defaults={defaults}>
      {getPlugins("route").map(pl =>
        React.cloneElement(pl.route, { key: pl.name, exact: true })
      )}
    </PageBuilderProvider>
  );
};

export default App;
