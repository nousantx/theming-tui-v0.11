import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { getStyleConfig } from "./lib/config";
import { useColorContext } from "./lib/colorContext";

export const styler = (deps = []) => {
  const { colorSet } = useColorContext();

  useLayoutEffect(() => {
    use(getStyleConfig(colorSet));
    makeStyles({
      body: "bg-neutral-900 text-neutral-100",
    });
    tenoxui();
  }, [colorSet, ...deps]);
};
