import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import useApi from "../../hooks/useApi";
import { fetchComments } from "../library/appFunctions";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./Comments.module.css";
import CommentsList from "./CommentsList";
import NewCommentForm from "./NewCommentForm";

const Comments = () => {
  let params = useParams();

  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const CloseCommentForm = () => {
    setIsAddingComment(false);
  };

  let [isEmpty, setIsEmpty] = useState(true);
  let [comments, setComments] = useState([]);
  let { sendRequest, hasError, errorMessage, isLoading, isSuccess } = useApi();

  useEffect(async function () {
    let data = await sendRequest(fetchComments());
    let apiData = [];
    for (const key in data) {
      apiData.push({
        id: data[key].id,
        quoteID: data[key].quoteID,
        text: data[key].text,
      });
    }

    let componentQuotes = apiData.filter(function (items) {
      return items.quoteID == params.id;
    });

    setComments(function (prevdata) {
      return componentQuotes;
    });
    setIsEmpty(!apiData.length > 0);
  }, []);

  let getNewData = function (data) {
    setComments(function (prevdata) {
      let tmpArray = [
        ...prevdata,
        {
          id: data.id,
          quoteID: data.quoteID,
          text: data.text,
        },
      ];

      return tmpArray;
    });
  };

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

  let quotesAvailable = !isEmpty && !isLoading;
  let noData = isEmpty && !isLoading;

  return (
    <section className={classes.comments}>
      <h2 className="mt">User Comments</h2>
      {!isAddingComment && (
        <button className="btn mb" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm hide={CloseCommentForm} passData={getNewData} />
      )}
      {isLoading && <LoadingSpinner></LoadingSpinner>}
      {quotesAvailable && <CommentsList comments={comments} />}
      {noData && <p>No quote found</p>}
    </section>
  );
};

export default Comments;
