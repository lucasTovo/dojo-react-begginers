import React, { useState } from "react";
import * as Style from "./style";
import { MudarCor } from "./objectHelper";

const ChangeColor = () => {
  const [cor, novaCor] = useState("#ffffff");

  return (
    <Style.Container style={{backgroundColor:cor}}>
      <Style.Titulo>Olha essas Cores!</Style.Titulo>
      <Style.Button onClick={() => novaCor(MudarCor())}>Clicke - Me</Style.Button>
    </Style.Container>
  );
};
export default ChangeColor;
