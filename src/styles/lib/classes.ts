import { cssClass } from "../../utils/get-classes";
import { useColor, useRGBColor } from "../../utils/get-color";

type Colors = { [color: string]: string[] };

export const colorClass = (colors: Colors) => ({
  color: useColor(colors, "text"),
  backgroundColor: useColor(colors, "bg"),
  "--tx_shadow-color": useRGBColor(colors, "shadow")
});

export const classNames = cssClass({
  "transition-color": {
    transitionProperty: "background-color, color, border-color"
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
    color: "inherit"
  },
  "btn-xs": {
    height: "25px",
    padding: "0 8px",
    fontSize: "0.750em"
  },
  "btn-sm": {
    height: "30px",
    padding: "0 12px",
    fontSize: "0.9em"
  },
  "btn-lg": {
    height: "40px",
    padding: "0 14px",
    fontSize: "1.1em"
  },
  "btn-icon": {
    width: "35px",
    padding: "0"
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export const classUtils = {
  display: {
    flex: "flex",
    iflex: "inline-flex"
  },
  justifyContent: {
    space: "space-between"
  },
  flexWrap: {
    "flex-wrap": "wrap"
  },
  boxShadow: {
    // @tailwindcss box-shadow | https://tailwindcss.com/docs/box-shadow
    "shadow-sm": "0 1px 2px 0 rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.05))",
    shadow:
      "0 1px 3px 0 rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1)), 0 1px 2px -1px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1))",
    "shadow-md":
      "0 4px 6px -1px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1)), 0 2px 4px -2px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1))",
    "shadow-lg":
      "0 10px 15px -3px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1)), 0 4px 6px -4px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1))",
    "shadow-xl":
      "0 20px 25px -5px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1)), 0 8px 10px -6px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.1))",
    "shadow-2xl": "0 25px 50px -12px rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.25))",
    "shadow-inner": "inset 0 2px 4px 0 rgb(var(--tx_shadow-color, 0 0 0) / var(--tx_shadow-opa, 0.05))",
    "shadow-none": "0 0 #0000",
    // @tailwindcss ring | https://tailwindcss.com/docs/ring-width
    "ring-0": "var(--tx_ring-inset,  ) 0 0 0 calc(0px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)",
    "ring-1": "var(--tx_ring-inset,  ) 0 0 0 calc(1px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)",
    "ring-2": "var(--tx_ring-inset,  ) 0 0 0 calc(2px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)",
    ring: "var(--tx_ring-inset,  ) 0 0 0 calc(3px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)",
    "ring-4": "var(--tx_ring-inset,  ) 0 0 0 calc(4px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)",
    "ring-8": "var(--tx_ring-inset,  ) 0 0 0 calc(8px + var(--tx_ring-offset-width, 0px)) var(--tx_ring-color)"
  }
};
