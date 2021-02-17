import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(50, 50, 50, 0.35), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <b>
          <p
            style={{ fontSize: "0.8rem", textShadow: "2rem" }}
            className="text"
          >
            {paragraph}
          </p>
        </b>
        {/* <a
          href={projectLink ? projectLink : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a> */}
      </div>
    </div>
  )
}

export default Card
