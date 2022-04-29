import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const data = [
  { color: "Uzbek", value: "uz" },
  { color: "Russian", value: "ru" },
  { color: "Arabian", value: "ar" },
  { color: "English", value: "en" },
];

const Translate = () => {
  const [lang, setLang] = useState("");
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <label className="ui label">Enter Text</label>
        <input onChange={(e) => setText(e.target.value)} className="ui input" />
      </div>
      <Dropdown
        data={data}
        label="Select Language"
        lang={lang}
        setLang={setLang}
      />
      <Convert lang={lang} text={text} />
    </div>
  );
};
export default Translate;
