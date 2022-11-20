const BasePage = require("./BasePage");

class CatalogPage extends BasePage {
  async selectFilter(xpath) {
    const element = await this.findByXpath(xpath);

    await this.scrollToElement(element);
    await this.clickOnElement(element);

    return this;
  }

  async closePopup() {
    const xpath = `//*[@id="onetrust-close-btn-container"]/button`;
    const element = await this.findByXpath(xpath);

    await this.clickOnElement(element);

    return this;
  }
}

module.exports = CatalogPage;
