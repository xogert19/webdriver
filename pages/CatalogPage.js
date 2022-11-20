const { By } = require("selenium-webdriver");

const BasePage = require("./BasePage");

class CatalogPage extends BasePage {
  async selectFilter(xpath) {
    const element = await this.findByXpath(xpath);

    await this.scrollToElement(element);
    await this.clickOnElement(element);

    return this;
  }

  async closeCookiePopup() {
    const xpath = `//*[@id="onetrust-close-btn-container"]/button`;
    const element = await this.findByXpath(xpath);

    await this.clickOnElement(element);

    return this;
  }

  async countFilters() {
    const filtersxpath = '//div[@class="row b--filtered b--desktop"]//span[@class="jws-fltrBox"]';
    const filters = await this.driver.findElements(By.xpath(filtersxpath));

    return filters.length;
  }

  async clearFilters() {
    const clearAllxpath = '//div[contains(@class, "b--filtered b--desktop")]/div/a';
    const clearAllFilters = await this.findByXpath(clearAllxpath);
    await this.clickOnElement(clearAllFilters);

    return this;
  }

  async getFiltersHTML() {
    const filtersDivxpath = '//div[contains(@class, "b--filtered b--desktop")]';
    const filtersDiv = await this.findByXpath(filtersDivxpath);
    const filtersHTML = await filtersDiv.getAttribute("innerHTML");

    return filtersHTML;
  }
}

module.exports = CatalogPage;
