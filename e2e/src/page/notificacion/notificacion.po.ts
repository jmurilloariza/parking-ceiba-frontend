import { browser, by, element, ElementFinder } from 'protractor';

export class NotificacionPage {

  private notificacion: ElementFinder;

  async isDisplayed() {
    this.notificacion = element(by.id('notificacion'));
    return await this.notificacion.isDisplayed();
  }

  async getElementFromNotification(id: string) {
    const subelement = element(by.id(id));
    return await subelement.getText();
  }

  waitForNotification() {
    browser.wait(browser.ExpectedConditions.visibilityOf(this.notificacion), 1500); // timeout
  }

}
