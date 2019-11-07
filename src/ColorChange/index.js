import React, { useState } from "react";
import * as Style from "./style";
import { MudarCor } from "./objectHelper";

const ChangeColor = () => {
  const [cor, novaCor] = useState("#ffffff");
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Style.Container background={cor}>
      <Style.Titulo>Olha essas Cores!</Style.Titulo>
      <Style.Button onClick={() => {
        novaCor(MudarCor());
        setIsClicked(true);
        }}>
        Clicke - Me
      </Style.Button>
      {isClicked && (
        <Style.GrowContainer>
          <p>O tempo não para</p>
          <p>
            <b> timestamp: {Date.now().toString()}</b>
          </p>
        </Style.GrowContainer>
      )}
    </Style.Container>
  );
};
export default ChangeColor;
