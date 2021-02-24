import { by, element } from 'protractor';

export class TicketPage {

    /**
     * Links
     */
    private linkCrearTicket = element(by.id('linkPageCrearTicket'));
    private linkListarTickets = element(by.id('linkPageListarTickets'));
    private linkBuscarTicket = element(by.id('linkPageBuscarTicket'));

    /**
     * Listar Tickets
     */
    private listaTickets = element.all(by.xpath('/html/body/app-root/div/app-ticket/div/app-listar-ticket/div/table/tbody/tr'));

    /**
     * Formulario crear ticket
     */
    private fieldPlacaVehiculo = element(by.id('placaVehiculo'));
    private fieldTIpoVehiculo = element(by.id('tipoVehiculo'));
    private btnCrearTicket = element(by.id('btnCrearTicket'));

    private fieldIdTicketBuscar = element(by.id('idTicketBuscar'));
    private btnBuscarTicket = element(by.id('btnBuscarTicket'));

    async accessPageListarTickets() {
        await this.linkListarTickets.click();
    }

    async countTickets() {
        return await this.listaTickets.count();
    }

    async accessPageCrearTicket() {
        await this.linkCrearTicket.click();
    }

    async setPlacaVehiculo(placaVehiculo: string = '') {
        await this.fieldPlacaVehiculo.sendKeys(placaVehiculo);
    }

    async setTipoVehiculo(tipoVehiculo: string = '') {
        await this.fieldTIpoVehiculo.sendKeys(tipoVehiculo);
    }

    public initializeCrearTicketForm(placaVehiculo: string, tipoVehiculo: string): void {
        this.setPlacaVehiculo(placaVehiculo);
        this.setTipoVehiculo(tipoVehiculo);
    }

    async clickButtonCrearTicket() {
        await this.btnCrearTicket.click();
    }

    async isEnabledButtonCrearTicket() {
        return await this.btnCrearTicket.isEnabled();
    }

    async accessPageBuscarTicket() {
        await this.linkBuscarTicket.click();
    }

    async setIdTicketBuscar(idTicket: string = '') {
        await this.fieldIdTicketBuscar.sendKeys(idTicket);
    }

    async clickButtonBuscarTicket() {
        await this.btnBuscarTicket.click();
    }

    async isEnabledButtonBuscarTicket() {
        return await this.btnBuscarTicket.isEnabled();
    }

    public initializeBucarTicketForm(idTicket: string): void {
        this.setIdTicketBuscar(idTicket);
    }

}