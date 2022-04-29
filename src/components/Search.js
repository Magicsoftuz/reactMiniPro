import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const onChangeInput = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          origin: "*",
          srsearch: term,
        },
      });
      setResults(data.data.query.search);
    };
    const timer = setTimeout(() => {
      if (term) {
        search();
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  console.log(results);
  const renderList = () => {
    return results.map((val) => {
      return (
        <div className="ui raised segment grid" key={val.pageid}>
          <div className="ui left floated">
            <h3 className="title">{val.title}</h3>
            <h5
              className="content"
              dangerouslySetInnerHTML={{ __html: val.snippet }}
              style={{ color: "#333" }}
            ></h5>
          </div>
          <div className="ui right floated">
            <a
              className="ui green button"
              href={`https://en.wikipedia.org?curid=${val.pageid}`}
            >
              GO
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="ui container" style={{ marginTop: "50px" }}>
        <div className="ui search">
          <div className="ui icon input" style={{ width: "100%" }}>
            <input
              onChange={onChangeInput}
              className="prompt"
              type="text"
              placeholder="Common passwords..."
            />
            <i className="search icon"></i>
          </div>
          <div className="content" style={{ marginTop: "10px" }}>
            {renderList()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
