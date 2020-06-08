// Generated by Selenium IDE
const { Builder, By, Key, until } = require("selenium-webdriver");
const assert = require("assert");

describe("validate", function () {
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
  it("validate especie modal", async function () {
    await driver.get("http://localhost:3001/");
    await driver.manage().window().setRect(1323, 741);
    await driver
      .findElement(By.css(".quarter:nth-child(1) .ant-card-head svg"))
      .click();
    await driver.findElement(By.css(".ant-modal-body")).click();
    await driver.findElement(By.css(".ant-btn-primary")).click();
    {
      const elements = await driver.findElements(
        By.css(".ant-form-item-has-error")
      );
      assert(elements.length);
    }
  });
  it("validate arvore modal", async function () {
    await driver.get("http://localhost:3001/");
    await driver.manage().window().setRect(1323, 741);
    await driver
      .findElement(By.css(".quarter:nth-child(2) .ant-card-head svg"))
      .click();
    await driver.findElement(By.css(".ant-modal-body")).click();
    await driver.findElement(By.css(".ant-btn-primary")).click();
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(1).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(2).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(3).ant-form-item-has-error")
      );
      assert(elements.length);
    }
  });
  it("validate grupo modal", async function () {
    await driver.get("http://localhost:3001/");
    await driver.manage().window().setRect(1323, 741);
    await driver
      .findElement(By.css(".quarter:nth-child(3) .ant-card-head svg"))
      .click();
    await driver.findElement(By.css(".ant-modal-body")).click();
    await driver.findElement(By.css(".ant-btn-primary")).click();
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(1).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(2).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(3).ant-form-item-has-error")
      );
      assert(elements.length);
    }
  });
  it("validate colheita modal", async function () {
    await driver.get("http://localhost:3001/");
    await driver.manage().window().setRect(1323, 741);
    await driver
      .findElement(By.css(".quarter:nth-child(4) .ant-card-head svg"))
      .click();
    await driver.findElement(By.css(".ant-modal-body")).click();
    await driver.findElement(By.css(".ant-btn-primary")).click();
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(1).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(2).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(3).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(4).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(5).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(6).ant-form-item-has-error")
      );
      assert(!elements.length);
    }
    await driver.findElement(By.id("form_in_modal_isGroup")).click();
    await driver
      .findElement(By.css(".ant-select-item-option:nth-child(2)"))
      .click();
    await driver.findElement(By.css(".ant-btn-primary")).click();
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(1).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(2).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(3).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(6).ant-form-item-has-error")
      );
      assert(elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(4).ant-form-item-has-error")
      );
      assert(!elements.length);
    }
    {
      const elements = await driver.findElements(
        By.css("#form_in_modal > .ant-row:nth-child(5).ant-form-item-has-error")
      );
      assert(!elements.length);
    }
  });
});
