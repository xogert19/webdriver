const { expect } = require("chai");
const { Browser, Builder } = require("selenium-webdriver");

const CatalogPage = require("../pages/CatalogPage");

const { COLORS, SIZES, XPATHES } = require("../constants");

describe("Filter items in catalog.", () => {
  const pageUrl = "https://us.jackwolfskin.com/jw/womens/c/033";

  beforeEach(async function () {
    this.driver = await new Builder().forBrowser(Browser.CHROME).build();
    await this.driver.manage().window().maximize();
  });

  it("Should add filters.", async function () {
    const expectedNumberOfFilters = 3;

    const catalogPage = new CatalogPage(this.driver);
    await catalogPage.openPage(pageUrl);

    await catalogPage.closeCookiePopup();

    await catalogPage.selectFilter(XPATHES[COLORS.BLACK]);
    await catalogPage.selectFilter(XPATHES[COLORS.BLUE]);
    await catalogPage.selectFilter(XPATHES[SIZES.M]);

    const numberOfFilters = await catalogPage.countFilters();

    expect(numberOfFilters).to.be.equal(expectedNumberOfFilters);
  }).timeout(50000);

  it("Should remove filters.", async function () {
    const emptyFiltersHTML = "\n ";

    const catalogPage = new CatalogPage(this.driver);
    await catalogPage.openPage(pageUrl);

    await catalogPage.closeCookiePopup();

    await catalogPage.selectFilter(XPATHES[COLORS.BLUE]);
    await catalogPage.selectFilter(XPATHES[SIZES.XS]);

    await catalogPage.clearFilters();

    const filtersHTML = await catalogPage.getFiltersHTML();

    expect(filtersHTML).to.be.equal(emptyFiltersHTML);
  }).timeout(50000);

  afterEach(async function () {
    await new Promise((resolve) => {
      setTimeout(async () => {
        resolve();
      }, 100);
    });
    await this.driver.quit();
  });
});
