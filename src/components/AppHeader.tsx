import React from "react";

import { GitContainer } from "containers/GitContainer";

function App() {
  const { gitFactory } = GitContainer.useContainer();
  gitFactory
    .getRepositoryNames()
    .then((repoNames: any) => {
      console.log(repoNames);
    })
    .then((data: any) => {
      console.log(data);
    });

  return <div>asdfasdfasd</div>;
}

export default App;
