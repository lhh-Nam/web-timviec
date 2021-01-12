import React, { useState } from "react";
import "./Employer.scss";

function Employer() {
  const [flip, setFlip] = useState(false);
  const [clickId, setClickId] = useState(undefined);

  const user = [
    {
      id: 1,
      name: "JaySea.K",
      job: "Developer",
      language: "Javascript",
      info:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus ex quia, et dolor, natus a iure sint",
    },

    {
      id: 2,
      name: "JaySea.K",
      job: "Developer",
      language: "Javascript",
      info:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus ex quia, et dolor, natus a iure sint",
    },

    {
      id: 3,
      name: "JaySea.K",
      job: "Developer",
      language: "Javascript",
      info:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus ex quia, et dolor, natus a iure sint",
    },
  ];

  function handleFlip(item) {
    setFlip(!flip);
    setClickId(item.id);
  }

  return (
    <div className="employer">
      <h2>
        <span>Tư Vấn Nghề Nghiệp</span>
      </h2>

      <div className="employer__container">
        {user.map((item) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => handleFlip(item)}
            >
              <div
                className={
                  flip && clickId === item.id
                    ? "card__inner "
                    : "card__inner is-flipped"
                }
              >
                <div className="card__face front">
                  <h3>{item.job}</h3>
                </div>
                <div className="card__face back">
                  <div className="card__face--content">
                    <div className="header">
                      <img
                        src="https://images.unsplash.com/photo-1596420631671-3dce6d8186d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt=""
                      />
                      <h3>{item.name}</h3>
                    </div>

                    <div className="card__face--body">
                      <h4>{item.language}</h4>
                      <p>{item.info}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Employer;

// `card__inner ${flip ? "is-flipped" : null}`;
