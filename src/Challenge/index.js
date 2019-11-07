import React, { useState } from 'react';
import { SwitchHero, GetHeroName, GetHeroAttribute, GetHeroColor } from './objectHelper';
import * as heroeImg from './Icons';
import * as Styled from './style';

const SeletorDePersonagem = () => {
    const [participanteEscolhido, AlteraParticipanteEscolhido] = useState({
        giovani: false,
        nikolas: false,
        lucas: false,
        evandro: false,
    });

    const name = GetHeroName(participanteEscolhido) || 'the Heros!';
    const theClasse = GetHeroAttribute(name);
    
    return (
        <Styled.Container>
            <Styled.Title color={GetHeroColor(name)}>{`${name} ${theClasse}`}</Styled.Title>
            <Styled.HeroContainer>
                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Giovani
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'giovani'))}
                            isSelected={participanteEscolhido.giovani}
                        >
                            <img src={heroeImg.boy} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Nikolas
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'nikolas'))}
                            isSelected={participanteEscolhido.nikolas}
                        >
                            <img src={heroeImg.boy2} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Lucas
                        </Styled.HeroName>
                        <Styled.HeroImage
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'lucas'))}
                            isSelected={participanteEscolhido.lucas}
                        >
                            <img src={heroeImg.man2} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>

                <Styled.CardLike>
                    <Styled.HeroBox>
                        <Styled.HeroName>
                            Evandro
                        </Styled.HeroName>
                        <Styled.HeroImage 
                            onClick={() => AlteraParticipanteEscolhido(SwitchHero(participanteEscolhido, 'evandro'))} 
                            isSelected={participanteEscolhido.evandro}
                        >
                            <img src={heroeImg.man} />
                        </Styled.HeroImage>
                    </Styled.HeroBox>
                </Styled.CardLike>
            </Styled.HeroContainer>
        </Styled.Container>
    )
}

export default SeletorDePersonagem;
