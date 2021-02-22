export class Ticket {
    id: string;
    placaVehiculo: string;
    tipoVehiculo: string;
    horaEntrada: string;
    horaSalida: string;
    totalPagado: number;

    constructor(id: string, placaVehiculo: string, tipoVehiculo: string,
                horaEntrada: string, horaSalida: string, totalPagado: number) {
        this.id = id;
        this.placaVehiculo = placaVehiculo;
        this.tipoVehiculo = tipoVehiculo;
        this.horaEntrada = horaEntrada;
        this.horaSalida = horaSalida;
        this.totalPagado = totalPagado;
    }
}
