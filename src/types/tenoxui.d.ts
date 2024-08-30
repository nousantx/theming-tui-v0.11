type CSSProperty = keyof CSSStyleDeclaration;
type CSSPropertyOrVariable = CSSProperty | `--${string}`;
type GetCSSProperty = CSSPropertyOrVariable | CSSPropertyOrVariable[];

export type Property = {
  [type: string]:
    | GetCSSProperty
    | {
        property?: GetCSSProperty;
        value?: string;
      };
};
export type Breakpoint = {
  name: string;
  min?: number;
  max?: number;
};
export type DefinedValue = {
  [type: string]:
    | {
        [value: string]: string;
      }
    | string;
};
export type Classes = {
  [property in CSSPropertyOrVariable]?: {
    [className: string]: string;
  };
};
