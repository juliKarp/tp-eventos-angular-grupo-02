import { Injectable } from '@angular/core';
import Evento from '../domain/evento';
import Invitacion from '../domain/invitacion';
import Usuario from '../domain/usuario';
import { formatDate } from '@angular/common';
import Locacion from 'src/domain/locacion';
import { EventoAbierto } from 'src/domain/eventoAbierto';

@Injectable({
    providedIn: 'root'
})
export class EventoService {
    readonly FORMATO_FECHA_HORA: string = "dd/MM/yyyy HH:mm"
    usuario: Usuario
    eventosAgenda: Evento[] = []
    eventosOrganizados: Evento[] = []
    invitacionesPendientes: Invitacion[] = []
    locaciones: Locacion[] = []
    
    constructor() {
        const jsonUsuario = { "nombreUsuario": "martin1990", "nombreApellido": "Martín Varela", "email": "martinvarela90@yahoo.com", "tipoDeUsuario": "Usuario Free", "amigos": [{ "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" }, { "nombreUsuario": "elotroamigo", "nombreApellido": "Otro Amigo" }] }
        this.usuario = Usuario.fromJson(jsonUsuario)

        const jsonAgenda = [
            { "nombre": "La Fiesta", "fechaDesde": formatDate(new Date, this.FORMATO_FECHA_HORA, "en-US"), "locacion": "Casa de Fiesta", "organizador": { "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" } },
            { "nombre": "Mi Cumpleaños", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 3), this.FORMATO_FECHA_HORA, "en-US"), "locacion": "Mi Casa", "organizador": { "nombreUsuario": "martin1990", "nombreApellido": "Martín Varela" } }
        ]
        this.eventosAgenda = jsonAgenda.map(jsonEvento =>
            Evento.fromJson(jsonEvento)
        );

        const jsonOrganizados = [
            { "nombre": "Mi Cumpleaños", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 3), this.FORMATO_FECHA_HORA, "en-US"), "locacion": "Mi Casa", "invitados": 3, "confirmados": 0, "rechazados": 3 },
            { "nombre": "Mi Cumpleaños Proximo", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 368), this.FORMATO_FECHA_HORA, "en-US"), "locacion": "Mi Casa", "invitados": 50000, "confirmados": 1, "rechazados": 2 }
        ]
        this.eventosOrganizados = jsonOrganizados.map(jsonEvento =>
            Evento.fromJson(jsonEvento)
        );

        this.invitacionesPendientes = this.eventosAgenda.map(evento =>
            new Invitacion(evento, 4)
        );

        const jsonLocaciones = [
            { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" },
            { "x": -34.572224, "y": -58.535651, "nombre": "Estadio Obras" }
        ]
        this.locaciones = jsonLocaciones.map(jsonLocacion =>
            Locacion.fromJson(jsonLocacion)
        )
    }

    eliminarAmigo(eliminado: Usuario): void {
        const index = this.usuario.amigos.findIndex(amigo => eliminado.nombreUsuario == amigo.nombreUsuario)
        if (index != -1) {
            this.usuario.amigos.splice(index, 1)
        }
    }

    crearEventoAbierto(nombre: string, fechaMaximaConfirmacion: Date, fechaDesde: Date, fechaHasta: Date, locacion: Locacion, precio: number, edadMinima: number) : EventoAbierto {
        return new EventoAbierto(nombre, fechaMaximaConfirmacion, fechaDesde, fechaHasta, locacion, precio, edadMinima)
    }
    agregarEvento(evento:Evento) {
        this.eventosOrganizados.push(evento)
    }
}
