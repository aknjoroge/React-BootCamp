export let addAQuote = function (author, text) {
  let quote = { id: Date.now(), author, text };

  let apiConfig = {
    url: "quotes.json",
    data: JSON.stringify(quote),
    method: "POST",
  };

  return apiConfig;
};
export let addAComment = function (text, id, quoteID) {
  let comment = {
    id: id,
    quoteID,
    text,
  };

  let apiConfig = {
    url: "comments.json",
    data: JSON.stringify(comment),
    method: "POST",
  };

  return apiConfig;
};
export let fetchComments = function () {
  let apiConfig = {
    url: "comments.json",
    return: true,
  };

  return apiConfig;
};
export let fetchQuotes = function () {
  let apiConfig = {
    url: "quotes.json",
    return: true,
  };

  return apiConfig;
};
