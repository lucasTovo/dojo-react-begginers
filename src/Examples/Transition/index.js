import React, { useState } from "react";
import * as Style from "./style";
const TransitionComponent = () => {
  const [error, setError] = useState(false);

  return (
    <Style.Container>
      <Style.Paragrafo error={error}>
        Clique no botão para me alternar!
      </Style.Paragrafo>
      <Style.AlternaError onClick={() => setError(!error)}>
        Aqui mesmo!
      </Style.AlternaError>
    </Style.Container>
  );
};

export default TransitionComponent;
