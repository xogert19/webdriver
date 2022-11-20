const { expect } = require("chai");
const { Browser, Builder } = require("selenium-webdriver");

const CatalogPage = require("../pages/CatalogPage");

const { COLORS, SIZES, XPATHES } = require("../contants");

describe("Filter items in catalog.", () => {
  const pageUrl = "https://us.jackwolfskin.com/jw/womens/c/033";

  beforeEach(async function () {
    this.driver = await new Builder().forBrowser(Browser.CHROME).build();
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

    expect(filtersHTML).to.be.equal(emptyFiltersHTML);
  }).timeout(100000);

  afterEach(async function () {
    await this.driver.quit();
  });
});
