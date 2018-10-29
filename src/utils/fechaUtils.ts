import * as moment from 'moment';

export default class FechaUtils {
    static readonly FORMATO_FECHA_HORA_MOMENT: string = "DD/MM/YYYY HH:mm"
    static readonly FORMATO_FECHA_MOMENT: string = "DD/MM/YYYY"
    static readonly FORMATO_HORA_MOMENT: string = "HH:mm"

    static readonly FORMATO_FECHA_HORA_DATE: string = "dd/MM/yyyy HH:mm"
    
    static fechaHoraToMoment(fecha: Date, horaMinuto: string): moment.Moment {
        const tiempo = moment(horaMinuto, this.FORMATO_HORA_MOMENT)
        return moment(fecha).hour(tiempo.hour()).minute(tiempo.minute())
    }
    
}
