import React from "react";
import callImg from "../assets/call.png";

// import "../Style.css"; koristime koga importirame stilovi od src folderot

const ContactCard = (props) => {
  console.log(props);
  // props objektot go polnime taka shto koga ja povikuvame ovaa komponenta
  // stavame kako atributo vo html na samata komponenta
  let myVar = "OUR MAIN OFFICE";
  let myImg = process.env.PUBLIC_URL + "/assets/call.png"; // ova mozeme da go koristime na mestoto od callImg
  return (
    <div>
      <img className="img" src={props.img} alt="location" />{" "}
      {/* {} zagradi koristime koga ke sakame da povikame promenliva vo JSX  */}
      <h3>{props.title}</h3>
      <p>{props.disc}</p>
    </div>
  );
};

export default ContactCard;
