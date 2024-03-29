// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("navigate", function () {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    vars = {};
  });
  afterEach(async function () {
    await driver.quit();
  });
  it("navigate to relatorio", async function () {
    await driver.get("http://localhost:3001/");
    await driver.manage().window().setRect(1323, 741);
    await driver.findElement(By.linkText("Gerar relatório")).click();
    {
      const elements = await driver.findElements(By.css(".ant-tree"));
      assert(elements.length);
    }
  });
  it("navigate to home", async function () {
    await driver.get("http://localhost:3001/relatorio");
    await driver.manage().window().setRect(1323, 741);
    await driver.findElement(By.css(".header .ant-typography")).click();
    {
      const elements = await driver.findElements(By.css(".quarter"));
      assert(elements.length);
    }
  });
});
