const CATEGORIES = {
  ACCESSORIES: "ACCESSORIES",
  BOTTOMS: "BOTTOMS",
  JACKETS: "JACKETS",
  SHOES: "SHOES",
  TOPS: "TOPS",
  VESTS: "VESTS",
};

const COLORS = {
  BLUE: "BLUE",
  BLACK: "BLACK",
  GREY: "GREY",
  BROWN: "BROWN",
  GREEN: "GREEN",
  VIOLET: "VIOLET",
  RED: "RED",
  ORANGE: "ORANGE",
  WHITE: "WHITE",
  PINK: "PINK",
  YELLOW: "YELLOW",
  PATTERN: "PATTERN",
};

const SIZES = {
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
};

const XPATHES = {
  [CATEGORIES.ACCESSORIES]: '//li[contains(@class, "js-plp-List1")]/a[text()="accessories"]',
  [CATEGORIES.BOTTOMS]: '//li[contains(@class, "js-plp-List1")]/a[text()="bottoms"]',
  [CATEGORIES.JACKETS]: '//li[contains(@class, "js-plp-List1")]/a[text()="jackets"]',
  [CATEGORIES.SHOES]: '//li[contains(@class, "js-plp-List1")]/a[text()="shoes"]',
  [CATEGORIES.TOPS]: '//li[contains(@class, "js-plp-List1")]/a[text()="tops"]',
  [CATEGORIES.VESTS]: '//li[contains(@class, "js-plp-List1")]/a[text()="vests"]',
  [COLORS.BLUE]: '//input[contains(@value, "BLUE") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.BLACK]: '//input[contains(@value, "BLACK") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.GREY]: '//input[contains(@value, "GREY") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.BROWN]: '//input[contains(@value, "BROWN") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.GREEN]: '//input[contains(@value, "GREEN") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.VIOLET]: '//input[contains(@value, "VIOLET") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.RED]: '//input[contains(@value, "RED") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.ORANGE]: '//input[contains(@value, "ORANGE") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.WHITE]: '//input[contains(@value, "WHITE") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.PINK]: '//input[contains(@value, "PINK") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.YELLOW]: '//input[contains(@value, "YELLOW") and contains(@class, "js-desktop-color-facet-input")]',
  [COLORS.PATTERN]: '//input[contains(@value, "PATTERN") and contains(@class, "js-desktop-color-facet-input")]',
  [SIZES.XS]: '//input[contains(@value, "XS") and contains(@class, "js-desktop-size-facet")]',
  [SIZES.S]: '//input[contains(@value, "S") and contains(@class, "js-desktop-size-facet")]',
  [SIZES.M]: '//input[contains(@value, "M") and contains(@class, "js-desktop-size-facet")]',
  [SIZES.L]: '//input[contains(@value, "L") and contains(@class, "js-desktop-size-facet")]',
  [SIZES.XL]: '//input[contains(@value, "XL") and contains(@class, "js-desktop-size-facet")]',
  [SIZES.XXL]: '//input[contains(@value, "XXL") and contains(@class, "js-desktop-size-facet")]',
};

module.exports = {
  CATEGORIES,
  COLORS,
  SIZES,
  XPATHES,
};
