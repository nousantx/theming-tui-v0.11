import { cssClass } from "../../utils/get-classes";
import { useColor } from "../../utils/get-color";

type Colors = { [color: string]: string[] };

export const colorClass = (colors: Colors) => ({
  color: useColor(colors, "text"),
  backgroundColor: useColor(colors, "bg"),
});

export const classNames = cssClass({
  "transition-color": {
    transitionProperty: "background-color, color, border-color",
  },
  btn: {
    border: "unset",
    height: "35px",
    padding: "0 14px",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "inherit",
  },
  "btn-xs": {
    height: "25px",
    padding: "0 8px",
    fontSize: "0.750em",
  },
  "btn-sm": {
    height: "30px",
    padding: "0 12px",
    fontSize: "0.9em",
  },
  "btn-lg": {
    height: "40px",
    padding: "0 14px",
    fontSize: "1.1em",
  },
  "btn-icon": {
    width: "35px",
    padding: "0",
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const classUtils = {
  display: {
    flex: "flex",
    iflex: "inline-flex",
  },
  justifyContent: {
    space: "space-between",
  },
  flexWrap: {
    "flex-wrap": "wrap",
  },
};
