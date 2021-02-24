import { AppPage } from "../app.po";
import { NavbarPage } from "../page/navbar/navbar.po";
import { NotificacionPage } from "../page/notificacion/notificacion.po";
import { TicketPage } from "../page/ticket/ticket.po";

describe('workspace-project Ticket', () => {

    let page: AppPage;
    let navBar: NavbarPage;
    let ticket: TicketPage;
    let notificacion: NotificacionPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        ticket = new TicketPage();
        notificacion = new NotificacionPage();
    });

    it('Debería listar los tickets', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageListarTickets();
        expect(ticket.countTickets()).toBeGreaterThanOrEqual(0);
    });

    it('Debería estar deshabilitado el boton de Registrar ticket si el formulario es invalido', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageCrearTicket();
        ticket.initializeCrearTicketForm('', '');
        expect(ticket.isEnabledButtonCrearTicket()).toBeFalsy();
    });

    it('Debería mostrarse un mensaje de error en caso que el vehiculo ya esté dentro del parqueadero', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageCrearTicket();
        ticket.initializeCrearTicketForm('UNA003', '1');
        ticket.clickButtonCrearTicket();
        ticket.initializeCrearTicketForm('UNA003', '1');
        ticket.clickButtonCrearTicket();
        expect(notificacion.isDisplayed()).toBeTruthy();
        expect(notificacion.getElementFromNotification('tituloNotificacion'))
            .toContain('Error');
    });

    it('Debería crear un ticket y mostrar un mensaje de ticket creado', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageCrearTicket();
        ticket.initializeCrearTicketForm('UNA0056', '1');
        ticket.clickButtonCrearTicket();
        expect(notificacion.isDisplayed()).toBeTruthy();
        expect(notificacion.getElementFromNotification('tituloNotificacion'))
            .toContain('¡Ticket Creado!');
        expect(notificacion.getElementFromNotification('mensajeNotificacion'))
            .toContain('El numero del ticket es:');
    });

    it('Debería pagar un ticket y mostrar un mensaje de ticket pagado', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageBuscarTicket();
        ticket.initializeBucarTicketForm('1');
        ticket.clickButtonBuscarTicket();
        expect(notificacion.isDisplayed()).toBeTruthy();
        expect(notificacion.getElementFromNotification('tituloNotificacion'))
            .toContain('¡Ticket pagado!');
        expect(notificacion.getElementFromNotification('mensajeNotificacion'))
            .toContain('Debe cobrar:');
    });

    it('Debería intentar buscar un ticket que no existe y mostrar un mensaje de error', async () => {
        await page.navigateTo();
        navBar.clickTabTickets();
        ticket.accessPageBuscarTicket();
        ticket.initializeBucarTicketForm('999');
        ticket.clickButtonBuscarTicket();
        expect(notificacion.isDisplayed()).toBeTruthy();
        expect(notificacion.getElementFromNotification('tituloNotificacion'))
            .toContain('Error :(');
        expect(notificacion.getElementFromNotification('mensajeNotificacion'))
            .toContain('Debe cobrar:');
    });

});