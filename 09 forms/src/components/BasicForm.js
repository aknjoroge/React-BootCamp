import useForm from "../hook/useform";

const BasicForm = (props) => {
  function basicInput(data) {
    return data.trim() != "";
  }
  function emailInput(data) {
    return (
      data.trim() != "" &&
      data.trim().includes("@") &&
      data.trim().includes(".")
    );
  }

  let {
    isvalid: fistNameValid,
    inputTouched: fistNameTouched,
    inputHandler: fistNameChangeHandler,
    focusHandler: fistNamefocusChangeHandler,
    value: fistNameinputValue,
  } = useForm(basicInput);

  let {
    isvalid: lastNameValid,
    inputTouched: lastNameTouched,
    inputHandler: lastNameChangeHandler,
    focusHandler: lastNamefocusChangeHandler,
    value: lastNameinputValue,
  } = useForm(basicInput);
  let {
    isvalid: emailValid,
    inputTouched: emailTouched,
    inputHandler: emailChangeHandler,
    focusHandler: emailfocusChangeHandler,
    value: emailinputValue,
  } = useForm(emailInput);

  let formValid = emailValid && lastNameValid && fistNameValid;

  function submitHandler(event) {
    event.preventDefault();
    if (!formValid) {
      return;
    }

    alert(
      `F.Name : ${fistNameinputValue}, L.Name : ${lastNameinputValue}, Email : ${emailinputValue} `
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            onChange={fistNameChangeHandler}
            onBlur={fistNamefocusChangeHandler}
            type="text"
            id="name"
          />
          {!fistNameValid && fistNameTouched && (
            <p className="error-text"> First Name not valid </p>
          )}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            onBlur={lastNamefocusChangeHandler}
            onChange={lastNameChangeHandler}
            type="text"
            id="name"
          />
          {!lastNameValid && lastNameTouched && (
            <p className="error-text"> Last Name not valid </p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          onBlur={emailfocusChangeHandler}
          onChange={emailChangeHandler}
          type="text"
          id="name"
        />
        {!emailValid && emailTouched && (
          <p className="error-text"> Email not valid </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
