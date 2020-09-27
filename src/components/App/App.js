import React from 'react';
import Main from '../Main/Main'
// import { QueryCache, ReactQueryCacheProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";

// const queryCache = new QueryCache();


function App() {

  return (
    <>
    {/* <ReactQueryCacheProvider queryCache={queryCache}> */}
      <Main />
    {/* </ReactQueryCacheProvider> */}
    {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  );
}

export default App;
