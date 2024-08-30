import * as txProps from "@tenoxui/property";
import type { Property } from "../../types/tenoxui";
export const property: Property = {
  ...txProps.default,
  ...{
    blur: {
      property: "filter",
      value: "blur({value})"
    },
    "back-blur": {
      property: "backdropFilter",
      value: "blur({value})"
    },
    "bg-opacity": "--bg-opa",
    "text-opacity": "--text-opa"
  }
};
