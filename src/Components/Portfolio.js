import React from "react";

function Portfolio() {
  return (
    <>
      <div className="portfolio-container">
        <p className="portfolio">Portfolio</p>
        <div className="heading-port">
          <strong>
            These are some of the cool projects I have done. From Html , Css ,
            Javascript to React and a bunch other stuff...
          </strong>
        </div>
        <div className="list">
          <p>{`//TextUtl Website`}</p>
          <p>{`//Tic-Tac-Toe Game`}</p>
          <p>{`//Real Time Currency Converter`}</p>
        </div>

        <div className="projects">
          <div className="proj-img"></div>
          <div className="proj-details">
            <div className="heading">Latest</div>
            <h2>TextUTL</h2>
            <strong>A Text Utility Website</strong>
            <p>Built from scratch, using ReactJs, BootStrap</p>
            <a href="https://shubht1575.github.io/TextUTL-App-React/">
              <button
                className="btn btn-outline-success  live-btn"
                type="submit"
              >
                SEE IT LIVE <i className="fa-solid fa-location-arrow arrow"></i>
              </button>
            </a>
          </div>
        </div>

        <div className="projects">
          <div className="proj-img img2"></div>
          <div className="proj-details">
            {/* <div className="heading">Latest</div> */}
            <h2>Tic-Tac-Toe</h2>
            <strong>A Single Player Game</strong>
            <p>Built from scratch, using Html, Css, Javascript</p>
          </div>
        </div>

        <div className="projects">
          <div className="proj-img img3"></div>
          <div className="proj-details">
            {/* <div className="heading">Latest</div> */}
            <h2>Currecy Converter</h2>
            <strong>A Real Time Currency Converter Website</strong>
            <p>Built from scratch, using Html,Css,Javascript and Api's</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
