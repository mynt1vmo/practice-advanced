function getQuote(list) {
  return {
    type: "GET_LIST",
    payload: list
  };
}
export { getQuote };
