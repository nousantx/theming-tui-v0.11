import { useState } from "react";
import { colors } from "../../lib/color";

export const useColorSet = () => {
  const [colorSet, setColorSet] = useState(colors);

  const changeTheme = () => {
    setColorSet((prevColorSet) => ({
      ...prevColorSet,
      ...{
        primary: prevColorSet.secondary,
        secondary: prevColorSet.primary,
        neutral: [...prevColorSet.neutral].reverse(),
      },
    }));
  };

  return { colorSet, changeTheme };
};
