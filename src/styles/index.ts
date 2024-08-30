import { useLayoutEffect } from "react";
import tenoxui, { use, makeStyles } from "tenoxui";
import { useColorContext } from "../context/ThemeContext";
import { merge } from "../utils/merge";
import { property } from "./lib/property";
import { values } from "./lib/values";
import { colorClass, classNames, classUtils } from "./lib/classes";
export const styler = (deps = []) => {
  const { colorSet } = useColorContext();

  useLayoutEffect(() => {
    use({
      property,values,
      classes: merge(colorClass(colorSet), classNames, classUtils),
    });
    makeStyles({
      body: "bg-neutral-900 text-neutral-100",
    });
    tenoxui();
  }, [colorSet, ...deps]);
};
