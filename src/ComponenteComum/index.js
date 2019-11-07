import React from "react";
import ChildComponent from "./ChildComponent";
import * as Style from "./style";

class MeuComponenteClassudo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filhoMontado: false,
      montarFilho: false
    };

    this.montou = this.montou.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        montarFilho: true
      });
    }, 2000);
  }
  avisaQueDesmontou = () => {
    this.setState({
      filhoMontado: false
    });
  };

  montou() {
    this.setState({
      filhoMontado: true
    });
  }

  render() {
    const filhoMontado = this.state.filhoMontado;
    const text = filhoMontado ? "montou!" : "Aguardando montar";

    const child = this.state.montarFilho && (
      <ChildComponent
        avisaQueMontou={this.montou}
        avisaQueDesmontou={this.avisaQueDesmontou}
      />
    );

    return (
      <Style.Container>
        <h1>{text}</h1>
        {child}
        <Style.Line/>
        {filhoMontado && (
          <Style.Button onClick={() => this.setState({ montarFilho: false })}>
            Desmontar
          </Style.Button>
        )}
      </Style.Container>
    );
  }
}

export default MeuComponenteClassudo;
