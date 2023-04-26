import React from "react";
import "./Hero.scss"
import Form from "./Form";

function Hero() {
  return (
    <>
      <div className="section-wrapper">
        <div className="heading-section">
          <h1 className="title-heading">Transform the way you read</h1>
          <h1 className="title-heading">With OpenAi GPT-4</h1>
          
          <p>
            Revolutionize your reading with our AI-powered webapp. Get concise
            article summaries in seconds and stay ahead of the curve. Try it
            now!
          </p>
        </div>
        <br/><br/><br/><br/>
        <Form/>
        
      </div>
    </>
  );
}

export default Hero;
