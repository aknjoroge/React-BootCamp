import { Fragment, useRef, useState } from "react";
import { Prompt, Redirect } from "react-router";
import useApi from "../../hooks/useApi";
import { addAQuote } from "../library/appFunctions";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  let [formTouched, setFormTouched] = useState(false);

  let { sendRequest, hasError, errorMessage, isLoading, isSuccess } = useApi();

  async function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    await sendRequest(addAQuote(enteredAuthor, enteredText));
  }

  function focusHandler() {
    setFormTouched(true);
  }
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

  return (
    <Fragment>
      <Prompt
        when={formTouched && !isSuccess}
        message="Quote not submitted! Are you sure you want to leave"
      />
      {isSuccess && <Redirect to="/" />}

      <Card>
        <form
          onFocus={focusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input required type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea required id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
