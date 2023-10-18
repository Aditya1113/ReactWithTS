import React from "react";

interface Iprops {
  imgSrc: string;
  title: string;
  text: string;
}


interface Iprops1 {
    imgSrc: string;
    title: string;
    text: string;
  }

const Card = (props: Iprops) => {
  return (
    <div>
      <img src={props.imgSrc} height={400} width={400} alt="" />
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
