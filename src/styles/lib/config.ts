import * as txProps from "@tenoxui/property";
import { useColor } from "../../lib/get-color";
import { merge } from "../../lib/merge";
import { cssClass } from "../../lib/get-classes";

type Colors = { [color: string]: string[] };

export const getStyleConfig = (colorSet: Colors) => ({
  property: [
    txProps.default,
    {
      blur: {
        property: "filter",
        value: "blur({value})"
      },
      "bg-opacity":"--bg-opa",
      "btn-text": "--btn-color",
      "btn-bg": "--btn-bg",
      "btn-border": "--btn-border",
      "btn-radius": "--btn-radius",
      "btn-padding": "--btn-padding",
      "btn-font-size": "--btn-font-size"
    }
  ],
  classes: merge(
    cssClass({
      "transition-color": { transitionProperty: "background-color, color, border-color", transitionDuration: "0.15s" },
      btn: {
        color: "var(--btn-color, #fff)",
        backgroundColor: "var(--btn-bg)",
        border: "var(--btn-border, 1px solid transparent)",
        borderRadius: "var(--btn-radius, 0.375rem)",
        height: "var(--btn-size-h, 2.25rem)",
        width: "var(--btn-size-w)",
        padding: "var(--btn-padding, 8px 1rem)",
        fontSize: "var(--btn-font-size, 1rem)",
        textDecoration: "none",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "background-color, color, border-color",
        transitionDuration: "0.15s",
        outline: "none"
      },
      "btn-sm": {
        "--btn-size-h": "2rem",
        "--btn-padding": "0 0.75rem",
        "--btn-font-size": "0.75rem"
      },
      "btn-lg": {
        "--btn-size-h": "2.5rem",
        "--btn-padding": "0 2rem"
      },
      "btn-icon": {
        "--btn-size-w": "2.25rem"
      },
      center: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }),
    {
      // Will generate color classNames from `text-primary-50` to `text-primary-950` range that can be used for changing element's color
      color: useColor(colorSet, "text"),
      backgroundColor: useColor(colorSet, "bg"),

      // other utilities
      display: {
        flex: "flex",
        iflex: "inline-flex"
      },
      justifyContent: {
        space: "space-between"
      }
    }
  )
});
