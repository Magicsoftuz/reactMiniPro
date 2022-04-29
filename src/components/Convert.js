import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Convert = (props) => {
  const [limitText, setLimitText] = useState(props.text);
  const [results, setResults] = useState("");

  const renderOutput = () => {
    if (results) {
      return <h2>{results.data.data.translations[0].translatedText}</h2>;
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setLimitText(props.text);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [props.text]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: limitText,
            target: props.lang.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setResults(data);
    };
    getData();
  }, [limitText, props.lang]);

  return (
    <div className="ui message">
      <div className="header">Output</div>
      {renderOutput()}
    </div>
  );
};
export default Convert;
