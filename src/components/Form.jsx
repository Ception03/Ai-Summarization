import React, { useState } from "react";
import "./Form.scss";
import loading from "../assets/Ripple-0.9s-191px.svg";
import { useLazyGetSummaryQuery } from "../services/article";

function Form() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedAllArticles = [newArticle, ...allArticles];

      setArticle(newArticle);

      setAllArticles(updatedAllArticles);

      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };
  return (
    <section className="wrapper-form">
      <div className="container">
        <form className="main-form" onSubmit={handleSubmit}>
          
          <input
            type="url"
            placeholder="Paste the URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="link-search"
          />
          <button type="submit" className="submit-btn">
            ⏎
          </button>
        </form>

    
      </div>

      {/* results */}

      <div className="result-container">
        {isFetching ? (
          <img src={loading} alt="loader" className="loads" />
        ) : error ? (
          <p className="alert-error">
            Well, that wasn't supposed to happen...
            <br />
            <span className="error-type">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="result-wrapper">
              <br/>
              <h2 className="result-heading ">
                Article <span className="blue_gradient"> Summary</span>
              </h2>
              <div className="summary_box">
                
                <p className="summarized-text">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default Form;
