export const MudarCor = () => {
  let color;
  let timestamp = Date.now().toString();
  switch (timestamp.substring(timestamp.length - 1)) {
                case '0': color = "#ffffff"; break; 
                case '1': color = "#000000"; break; 
                case '2': color = "#0000ff"; break; 
                case '3': color = "#008000"; break;
                case '4': color = "#ff00ff"; break;
                case '5': color = "#ff0000"; break;
                case '6': color = "#5416b4"; break;
                case '7': color = "#ffff00"; break;
                case '8': color = "#808080"; break;
                case '9': color = "#e0b0ff"; break;
                default:  color = "#ffffff"; break;
            }
  return color;
};
