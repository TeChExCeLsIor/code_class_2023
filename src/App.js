import React from "react";
import ContactCard from "./components/ContactCard";
import Form from "./components/Form";
import Map from "./components/Map";

import location from "./assets/location.png";
import faxImg from "./assets/fax.png";
import callImg from "./assets/call.png";
import emailImg from "./assets/email.png";

function App() {
  return (
    <div>
      {/** Mozime da povikuvame in-line stilovi vo style atributot kako objekti */}
      <h1 style={{ textAlign: "center" }}>LET'S CONNECT</h1>\
      <div className="cardContainer">
        {/** Za da go napolnime prop objektot vo ContactCard komponentata stavame atributi na komponentata */}
        <ContactCard
          img={location}
          title="OUR MAIN OFFICE"
          disc="random neshto"
        />
        <ContactCard img={callImg} title="PHONE NUMBER" disc="088 888 999" />
        <ContactCard img={faxImg} title="FAX" disc="1111 2222 22" />
        <ContactCard img={emailImg} title="EMIAL" disc="jhon@doeski.com" />
      </div>
      <div className="formsContainer">
        <Form />
        <Map />
      </div>
    </div>
  );
}

export default App;
