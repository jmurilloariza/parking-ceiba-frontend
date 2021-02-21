export class Ticket {
    id: string;
    placa_vehiculo: string;
    tipo_vehiculo: string;
    hora_entrada: string;
    hora_salida: string;
    total_pagado: number;

    constructor(id: string, placa_vehiculo: string, tipo_vehiculo: string, hora_entrada: string, 
        hora_salida: string, total_pagado: number) {
        this.id = id;
        this.placa_vehiculo = placa_vehiculo;
        this.tipo_vehiculo = tipo_vehiculo;
        this.hora_entrada = hora_entrada;
        this.hora_salida = hora_salida;
        this.total_pagado = total_pagado;
    }
}
