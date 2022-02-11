import React, { Fragment } from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";

//fallback UI

//LazyLoad
let Quotes = React.lazy(() => import("./pages/all quotes/quotes"));
let Layout = React.lazy(function () {
  return import("./components/layout/layout");
});

let QuoteDetails = React.lazy(() =>
  import("./pages/quote details/quoteDetail")
);
let AddQuote = React.lazy(() => import("./pages/add quote/addquote"));
let NotFound = React.lazy(() => import("./pages/404/404"));

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes"></Redirect>
        </Route>
        <Route path="/quotes" exact>
          <Quotes />
        </Route>
        <Route path="/quotes/:id">
          <QuoteDetails />
        </Route>
        <Route path="/add">
          <AddQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
