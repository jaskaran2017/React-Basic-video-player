import React, { useState } from "react";
import "./CourseStructure";

// import { Link } from "react-router-dom";

function CourseStructure(props) {
  const courseName = props.match.params.coursename;

  const courses = {
    reactjs: [
      { title: "reactjs Components", vid: "Cla1WwguArA" },
      { title: "reactjs Hook updates", vid: "oecI26cWqzk" },
      { title: "reactjs Index as key Anti-pattren", vid: "xlPxnc5uUPQ" },
    ],
    nodejs: [
      { title: "nodejs Globle Objects", vid: "PY-AycMkEAg" },
      { title: "nodejs Function Expressions", vid: "https:lK42xIMcA0Y" },
      { title: "nodejs Creating & Removing directories ", vid: "Ejgd-la6nSY" },
    ],
  };

  const [vid, uid] = useState(courses[courseName][0].vid);
  const [title, utit] = useState(courses[courseName][0].title);

  const renderVideo = () => {
    return (
      <>
        <h1>{title}</h1>
        <div className="video-container">
          <iframe
            title={title}
            width="500"
            height="480"
            src={"//www.youtube.com/embed/" + vid + "?rel=0"}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </>
    );
  };
  return (
    <div className="main">
      {renderVideo()}
      <div className="collection">
        {courses[courseName].map((items) => {
          return (
            <a
              href="#!"
              className="collection-item"
              onClick={() => {
                uid(items.vid);
                utit(items.title);
              }}
            >
              {items.title}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default CourseStructure;
