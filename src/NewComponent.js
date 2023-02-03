import React from "react";

const NewComponent = (props) => {
  //   console.log("Re-render nova komponenta");
  return (
    <div>
      <h4>{props.ime}</h4>
      <h4>{props.prezime}</h4>
      <button onClick={() => props.keMeniState((pred) => pred + 1)}>
        Od nov komponent
      </button>
    </div>
  );
};

export default NewComponent;
