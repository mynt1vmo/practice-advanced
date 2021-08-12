import { produce } from "immer";
const current = {
  quote: [],
  colorArr: [
    "4FC1FF",
    "E8B9AB",
    "CB769E",
    "69995D",
    "D2D7DF",
    "3AA7A3",
    "ECA400",
    "006992",
    "AFECE7",
    "81F499",
    "890620",
    "B6465F",
    "8ACDEA"
  ]
};
const reducer = produce((draft = current, action) => {
  switch (action.type) {
    case "GET_LIST":
      draft.quote = action.payload;
      return draft;
    default:
      return draft;
  }
});
export default reducer;
