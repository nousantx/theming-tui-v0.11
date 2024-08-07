import { useState, useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import property from "@tenoxui/property";
import { useColor } from "./lib/get-color";
import { colors } from "./lib/color";

function App() {
  const [colorSet, setColorSet] = useState(colors);

  const changeTheme = () => {
    setColorSet(prevColorSet => ({
      primary: prevColorSet.secondary,
      secondary: prevColorSet.primary,
      neutral: [...prevColorSet.neutral].reverse()
    }));
  };

  useLayoutEffect(() => {
    use({
      property: [property],
      classes: {
        // Will generate color classNames from `text-primary-50` to `text-primary-950` range that can be used for changing element's color
        color: useColor(colorSet, "text"),
        backgroundColor: useColor(colorSet, "bg")
      }
    });
    makeStyles({
      body: "bg-neutral-900 family-[sans-serif]" // tr-0.3s = transition: 0.3s
    });
    tenoxui();
  }, [colorSet]);

  return (
    <>
      <h1 className="text-primary-500 hover:text-neutral-40">Hello World!</h1>
      <h1 className="text-secondary-500">Hello World!</h1>
      <h1 className="text-neutral-300">Hello World!</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </>
  );
}

export default App;
