import React from "react"

export const SocialMedia = (props) => {
  const { fontSize, fontColor } = props

  return (
    <div className="social-media" style={{fontSize: fontSize}}>
      <a href="https://www.linkedin.com/in/yennipernia/">
        <i className="fab fa-linkedin" style={{color: fontColor}}></i>
      </a>
      <a href="https://twitter.com/YenniPernia">
        <i className="fab fa-twitter-square" style={{color: fontColor}}></i>
      </a>
      <a href="https://www.instagram.com/yennipernia/">
        <i className="fab fa-instagram-square" style={{color: fontColor}}></i>
      </a>
      <a href="https://github.com/Perniayenni">
        <i className="fab fa-github-square" style={{color: fontColor}}></i>
      </a>
    </div>
  )
};
