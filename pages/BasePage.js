const { By, until } = require("selenium-webdriver");

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage(url) {
    await this.driver.get(url);

    return this;
  }

  async findByXpath(xpath) {
    return this.driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
  }

  async scrollToElement(element) {
    await this.driver.executeScript("arguments[0].scrollIntoView(true)", element);
  }

  async clickOnElement(element) {
    await this.driver.executeScript("arguments[0].click()", element);
  }
}

module.exports = BasePage;
