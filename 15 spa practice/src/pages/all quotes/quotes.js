import { Fragment, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { fetchQuotes } from "../../components/library/appFunctions";
import QuoteList from "../../components/quotes/QuoteList";
import Card from "../../components/UI/Card";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import useApi from "../../hooks/useApi";

function Quotes() {
  let [isEmpty, setIsEmpty] = useState(true);
  let [quotes, setquotes] = useState([]);
  let [apiData, setapiData] = useState([]);

  let { sendRequest, hasError, errorMessage, isLoading, isSuccess } = useApi();

  let [sortArc, setSortArc] = useState(true);

  let location = useLocation();

  let history = useHistory();
  let queryID;

  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.text.length > quoteB.text.length ? 1 : -1;
      } else {
        return quoteA.text.length < quoteB.text.length ? 1 : -1;
      }
    });
  };

  useEffect(async function () {
    let data = await sendRequest(fetchQuotes());
    let responce = [];
    for (const key in data) {
      responce.push({
        author: data[key].author,
        id: data[key].id,
        text: data[key].text,
      });
    }

    setapiData(function (prevdata) {
      return responce;
    });
  }, []);

  useEffect(
    function () {
      queryID = new URLSearchParams(location.search).get("sort");
      let sortedQuotes = sortQuotes(apiData, sortArc);
      setIsEmpty(!sortedQuotes.length > 0);

      setSortArc(function () {
        return queryID == "arc" ? false : true;
      });
      setquotes(function (prevdata) {
        return sortedQuotes;
      });
    },

    [location.search, apiData]
  );

  if (hasError) {
    return (
      <Fragment>
        <Card>
          <div className="centered error">
            <h1>Error</h1>
            <h2>{errorMessage}</h2>
          </div>
        </Card>
      </Fragment>
    );
  }

  let dataready = !isLoading && !isEmpty;

  function sortHandler(event) {
    event.preventDefault();
    history.push(`?sort=${sortArc ? "arc" : "dsc"}`);
  }

  return (
    <Fragment>
      <div className="centered">
        <div className="center-right">
          <button onClick={sortHandler} className="btn-basic">
            Sort By length {sortArc ? "assending" : "descending"}
          </button>
        </div>

        {isLoading && <LoadingSpinner />}
        {dataready && <QuoteList quotes={quotes} />}
      </div>
    </Fragment>
  );
}
export default Quotes;
