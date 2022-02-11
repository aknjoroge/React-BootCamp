import { Fragment } from "react";
import QuoteForm from "../../components/quotes/QuoteForm";

function AddQuote(params) {
  return (
    <Fragment>
      <div className="centered">
        <h2 className="block">Add a Quote</h2>
        <QuoteForm></QuoteForm>
      </div>
    </Fragment>
  );
}
export default AddQuote;
