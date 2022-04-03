import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>
    
    <div className="pcards">
        <div className="pimg">
          <img src={"assets/CricBuzz_Index.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Cricbuzz (Clone)</h3>
          <p>Cricbuzz is an Indian cricket news website, It features, news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings.</p>

          <div className="features">
            <h3>Feature</h3>
            <ul>
              <li>Sign-in / Sign-up and Fully functional NavBar.</li>
              <li>Live Scores / Scheduled / Upcoming Matches.</li>
              <li>Player Ranking and details.</li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 , CSS3 , Javascript(ES6) , MongoDB , React , React-Reudx , Express JS , Mongoose , Material UI </p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://newcricbuzzcb.netlify.app/">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/VijayaprakashVp/cricbuzz"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
    
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/Tomtop_Clone.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Tomtop.com(clone)</h3>
          <p>We had to clone a Tomtop.com, which is e-commerce website.</p>

          <div className="features">
            <h3>Feature</h3>
            <ul>
              <li>Sign-in/Sign-up</li>
              <li>Clothes gallery based on age and gender</li>
              <li>Add products to a shopping bag</li>
            </ul>
          </div>

          {/* </div> */}
          <h4>Tech Stack</h4>
          <p>
            HTML5 , CSS3 , Javascript(ES6) , MongoDB , Mongoose , Express.js
          </p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://tomtop-clone-zeta.vercel.app/">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/VijayaprakashVp/Tomtop_Clone"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/Plural_Site_landing-page.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>PluralSight (Clone)</h3>
          <p>
            We've cloned a Website PluralSight, which is online learning site.
          </p>

          <div className="features">
            <h3>Feature</h3>
            <ul>
              <li>Product details getting from backend</li>
              <li>checking login credential using mangodb </li>
            </ul>
          </div>

          <h4>Tech Stack</h4>
          <p>HTML5 , CSS3 , JavaScript , MongoDb , Mongoose , Express.js</p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://aadityaneve.github.io/Clone-Pluralsight">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/aadityaneve/Clone-Pluralsight/tree/Vijayaprakash"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      

      </div>
    </div>
  );
}
