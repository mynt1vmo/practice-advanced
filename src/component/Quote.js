import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../actionCreator/ActionQuote";
import { randomArrVal } from "../random/index";

const Queto = () => {
  let dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [currentQuote, setCurrentQuote] = useState("");
  const currentArr = useSelector((state) => state);

  const getApi = async () => {
    const respone = await fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    const { quotes: data } = await respone.json();
    setColor(`#${randomArrVal(currentArr.quote.colorArr)}`);
    setCurrentQuote(randomArrVal(data));
    dispatch(getQuote(data));
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="Bg" style={{ backgroundColor: `${color}`, color: `${color}` }}>
      <div className="quote-box flex flex-col justify-between ">
        <div className="quote-text flex">
          <i className="fa fa-quote-left"> </i>
          <span id="text" className="quote">{
            currentQuote.quote
          }
          </span>
        </div>
        <div className="quote-author">
          <span id="author">{currentQuote.author}</span>
        </div>
        <div className="buttons flex justify-between">
          <div>
            <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top" style={{ backgroundColor: `${color}` }}>
              <i className="fa fa-twitter"></i>
            </a>
            <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank" style={{ backgroundColor: `${color}` }}>
              <i className="fa fa-tumblr"></i>
            </a>
          </div>
          <button style={{ background: `${color}` }} className="new-quote hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            onClick={getApi}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
};
export default Queto;
