import React from "react";

// ternary expression
// uslov ? ako uslovot e tocen : ako uslovot e netocen

// uslov && shto sakame da se renderira ako uslovot e tocen

// uslov ? (druguslov ? ako tocno: ako netocno) : else tuka

function App() {
  const broj = 4;
  const isBlack = true;
  const nekojSiBroj = broj >= 5 ? 55 : 155;
  return (
    <div>
      <h1>
        {broj > 5 ? "Brojot e pogolem od 5 ||" : "Brojot e pomal od 5 ||"}
        {nekojSiBroj}
      </h1>
      <h1>
        {isBlack === true && "Bojata e crna"}
        {!isBlack && "Bojata ne e crna"}
      </h1>
      {isBlack === true && (
        <div style={{ width: 150, height: 150, backgroundColor: "black" }} />
      )}
    </div>
  );
}

export default App;
