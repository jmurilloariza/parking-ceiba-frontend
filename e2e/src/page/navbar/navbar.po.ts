import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkTickets = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));

    async clickTabHome() {
        await this.linkHome.click();
    }

    async clickTabTickets() {
        await this.linkTickets.click();
    }
}
