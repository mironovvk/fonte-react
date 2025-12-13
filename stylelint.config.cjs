/** @type {import('stylelint').Config} */
module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-standard-scss"],

  plugins: [
    "stylelint-order",
    "stylelint-scss",
    "stylelint-selector-bem-pattern",
  ],

  ignoreFiles: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],

  rules: {
    /* =====================
       Base / sanity rules
    ====================== */

    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "font-family-no-duplicate-names": true,
    "no-descending-specificity": null, // слишком шумный
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"],
      },
    ],

    /* =====================
       Order
    ====================== */

    "order/order": [
      "custom-properties",
      "dollar-variables",
      "declarations",
      {
        type: "at-rule",
        name: "media",
      },
      {
        type: "rule",
      },
    ],

    "order/properties-order": [
      [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index",

        "display",
        "flex",
        "flex-direction",
        "flex-wrap",
        "justify-content",
        "align-items",
        "gap",

        "width",
        "height",
        "max-width",
        "min-width",
        "max-height",
        "min-height",

        "margin",
        "padding",

        "font",
        "font-size",
        "font-weight",
        "line-height",
        "color",
        "text-align",

        "background",
        "background-color",
        "border",
        "border-radius",

        "opacity",
        "transition",
        "transform",
      ],
      {
        unspecified: "bottomAlphabetical",
      },
    ],

    /* =====================
       SCSS
    ====================== */

    "scss/dollar-variable-pattern": "^[_a-z]+[a-z0-9-]*$",
    "scss/percent-placeholder-pattern": "^[_a-z]+[a-z0-9-]*$",
    "scss/at-mixin-pattern": "^[_a-z]+[a-z0-9-]*$",
    "scss/at-function-pattern": "^[_a-z]+[a-z0-9-]*$",

    "scss/no-global-function-names": true,
    "scss/operator-no-newline-after": null,

    /* =====================
       BEM (мягкий)
    ====================== */

    "plugin/selector-bem-pattern": {
      preset: "bem",
      componentName: "[a-z]+(?:-[a-z]+)*",
      componentSelectors: {
        initial: "^\\.{component}(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
        combined: "^\\.([a-z0-9-]+)(?:__[a-z0-9-]+)?(?:--[a-z0-9-]+)?$",
      },
      implicitComponents: [
        "src/components/**/*.scss",
        "src/ui/**/*.scss",
        "src/modules/**/*.scss",
        "src/pages/**/*.scss",
      ],
    },
  },
};
