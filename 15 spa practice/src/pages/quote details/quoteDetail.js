import { Fragment, useEffect, useState } from "react";
import { Route, useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import CommentsList from "../../components/comments/CommentsList";
import { fetchQuotes } from "../../components/library/appFunctions";
import HighlightedQuote from "../../components/quotes/HighlightedQuote";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useApi from "../../hooks/useApi";

function QuoteDetails() {
  let params = useParams();

  let [quote, setquote] = useState([]);
  let { sendRequest, hasError, errorMessage, isLoading, isSuccess } = useApi();
  useEffect(async function () {
    let data = await sendRequest(fetchQuotes());
    let apiData = [];
    for (const key in data) {
      apiData.push({
        author: data[key].author,
        id: data[key].id,
        text: data[key].text,
      });
    }

    setquote(function () {
      return apiData.find(function (item) {
        return item.id == params.id;
      });
    });
  }, []);

  let componentRoute = useRouteMatch();
 

  let dataOkay = !isLoading && !hasError;
  return (
    <Fragment>
      <div className="centered m-10">
        <h2> Quote Details </h2>

        {isLoading && <LoadingSpinner />}
        {dataOkay && (
          <div>
            <HighlightedQuote author={quote.author} text={quote.text} />
            <Route path={componentRoute.path} exact>
              <Link className="btn " to={`${componentRoute.url}/comment`}>
                View Comment
              </Link>
            </Route>

            <Route path={`${componentRoute.path}/comment`}>
              <Comments />
              <Link
                className="btn-basic block mt border-none"
                to={`${componentRoute.url}`}
              >
                Hide comment
              </Link>
            </Route>
          </div>
        )}
      </div>
    </Fragment>
  );
}
export default QuoteDetails;
