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
};

const XPATHES = {
  [CATEGORIES.ACCESSORIES]: '//li[contains(@class, "js-plp-List1")]/a[text()="accessories"]',
  [CATEGORIES.BOTTOMS]: '//li[contains(@class, "js-plp-List1")]/a[text()="bottoms"]',
  [CATEGORIES.JACKETS]: '//li[contains(@class, "js-plp-List1")]/a[text()="jackets"]',
  [CATEGORIES.SHOES]: '//li[contains(@class, "js-plp-List1")]/a[text()="shoes"]',
  [CATEGORIES.TOPS]: '//li[contains(@class, "js-plp-List1")]/a[text()="tops"]',
  [CATEGORIES.VESTS]: '//li[contains(@class, "js-plp-List1")]/a[text()="vests"]',
  [COLORS.BLUE]: '//input[contains(@value, "BLUE") and contains(@class, "js-desktop-color-facet-input")]',
  [SIZES.XS]: '//input[contains(@value, "XS") and contains(@class, "js-desktop-size-facet")]',
};

module.exports = {
  CATEGORIES,
  COLORS,
  SIZES,
  XPATHES,
};
