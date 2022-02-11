import { Fragment, useRef, useState } from "react";
import { useLocation, useParams } from "react-router";
import useApi from "../../hooks/useApi";
import { addAComment } from "../library/appFunctions";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();

  let [comentSent, setcomentSent] = useState({});

  let { sendRequest, hasError, errorMessage, isLoading, isSuccess } = useApi();
  let location = useLocation();

  let params = useParams();
  const submitFormHandler = async (event) => {
    event.preventDefault();

    let comment = commentTextRef.current.value;
    let id = Date.now();
    let quoteID = params.id;

    setcomentSent(function () {
      return {
        id,
        quoteID,
        text: comment,
      };
    });

    let data = await sendRequest(addAComment(comment, id, quoteID));
  };

  if (isSuccess) {
    props.passData(comentSent);

    props.hide();
  }

  if (hasError) {
    return (
      <Fragment>
        <Card>
          <div className="centered error">
            <h4>Error</h4>
            <p>{errorMessage}</p>
          </div>
        </Card>
      </Fragment>
    );
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <textarea
            required
            id="comment"
            rows="5"
            ref={commentTextRef}
          ></textarea>
        )}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
