const { expect, assert } = require("chai");
const { Builder, Capabilities } = require("selenium-webdriver");

const webdriver = require("selenium-webdriver");
const { By, until } = webdriver;

const capabilities = require("../capabilities.json");

const CatalogPage = require("../pages/CatalogPage");

const { CATEGORIES, COLORS, SIZES, XPATHES } = require("../contants");

describe("Filter items in catalog.", () => {
  const pageUrl = "https://us.jackwolfskin.com/jw/womens/c/033";

  beforeEach(async function () {
    const driver = new webdriver.Builder()
      .usingServer("http://siarhei_PZnKCE:uC6xmcW8zPMtWKaMB2xR@hub-cloud.browserstack.com/wd/hub")
      .withCapabilities({
        ...capabilities,
        ...(capabilities["browser"] && { browserName: capabilities["browser"] }),
      })
      .build();
    // this.driver = await new Builder().forBrowser("chrome").build();

    await this.driver.manage().window().maximize();
  });

  it("Should remove filters.", async function () {
    const emptyFiltersHTML = "\n ";

    const catalogPage = new CatalogPage(this.driver);
    await catalogPage.openPage(pageUrl);

    await catalogPage.closePopup();

    await catalogPage.selectFilter(XPATHES[COLORS.BLUE]);
    await catalogPage.selectFilter(XPATHES[SIZES.XS]);

    const clearAllxpath = '//div[contains(@class, "b--filtered b--desktop")]/div/a';
    const clearAllFilters = await catalogPage.findByXpath(clearAllxpath);
    await catalogPage.clickOnElement(clearAllFilters);

    const filtersDivxpath = '//div[contains(@class, "b--filtered b--desktop")]';
    const filtersDiv = await catalogPage.findByXpath(filtersDivxpath);
    const filtersHTML = await filtersDiv.getAttribute("innerHTML");

    assert(filtersHTML === emptyFiltersHTML, "Filters are not removed.");
  }).timeout(20000);

  afterEach(async function () {
    await this.driver.quit();
  });
});
