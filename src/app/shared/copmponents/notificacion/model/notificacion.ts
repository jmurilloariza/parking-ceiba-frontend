export class Notificacion {
  title: string;
  message: string;
  status: boolean;

  constructor(title: string = '', message: string = '', status: boolean = false) {
    this.title = title;
    this.message = message;
    this.status = status;
  }

}
