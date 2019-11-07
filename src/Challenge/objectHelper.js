export const SwitchHero = (defaultObject, parametroTrue) => {
    console.log({defaultObject});
    
    const handler =  {};
    Object.keys(defaultObject).forEach( parametro => handler[parametro] = parametro === parametroTrue);
    console.log({handler});
    
    return handler;
}

export const GetHeroName = (defaultObject) => {
    const getNameArray = Object.keys(defaultObject).filter(nome => defaultObject[nome]);

    return getNameArray.length && getNameArray[0];
}

export const GetHeroAttribute = (heroName) => {
    const attribute = {
        giovani: '"o grande"!',
        nikolas: '"o astuto"!',
        lucas: '"o místico"!',
        evandro: '"o sábio"!',
    };

    return attribute[heroName] || '';
}

export const GetHeroColor = (heroName) => {
    const color = {
        giovani: '#3cacde',
        nikolas: '#74a32e',
        lucas: '#ad3228',
        evandro: '#2e6aa3',
    };

    return color[heroName] || false;
}
