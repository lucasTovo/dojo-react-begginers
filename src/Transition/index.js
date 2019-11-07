import React, { useState } from "react";
import * as Style from "./style";
const TransitionComponent = () => {
  const [error, setError] = useState(false);

  return (
    <Style.Container>
      <Style.Paragrafo margin={'10px'} error={error}>
        Clique no botão para me alternar!
      </Style.Paragrafo>
      <Style.Button onClick={() => setError(!error)}>
        Aqui mesmo!
      </Style.Button>
    </Style.Container>
  );
};

export default TransitionComponent;
