import { Injectable } from '@angular/core';
import Evento from '../domain/evento';
import Invitacion from '../domain/invitacion';
import Usuario from '../domain/usuario';
import { formatDate, Time } from '@angular/common';
import Locacion from 'src/domain/locacion';
import { EventoAbierto } from 'src/domain/eventoAbierto';
import { EventoCerrado } from 'src/domain/eventoCerrado';
import FechaUtils from 'src/utils/fechaUtils';

@Injectable({
    providedIn: 'root'
})
export class EventoService {
    usuario: Usuario
    eventosAgenda: Evento[] = []
    eventosOrganizados: Evento[] = []
    invitacionesPendientes: Invitacion[] = []
    locaciones: Locacion[] = []
    
    constructor() {
        const jsonUsuario = { "nombreUsuario": "martin1990", "nombreApellido": "Martín Varela", "email": "martinvarela90@yahoo.com", "tipoDeUsuario": "Usuario Free", "amigos": [{ "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" }, { "nombreUsuario": "elotroamigo", "nombreApellido": "Otro Amigo" }] }
        this.usuario = Usuario.fromJson(jsonUsuario)

        const jsonAgenda = [
            { "nombre": "Evento de hoy", "fechaDesde": formatDate(new Date, FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" }, "organizador": { "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" } },
            { "nombre": "La Fiesta", "fechaDesde": formatDate(new Date, FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Bolichito" }, "organizador": { "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" } },
            { "nombre": "Evento futuro", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 30), FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Bolichito" }, "organizador": { "nombreUsuario": "usuarioMejorAmigo", "nombreApellido": "Mejor amigo" } },
            { "nombre": "Mi Cumpleaños", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 3), FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" }, "organizador": { "nombreUsuario": "martin1990", "nombreApellido": "Martín Varela" } }
        ]
        this.eventosAgenda = jsonAgenda.map(jsonEvento =>
            Evento.fromJson(jsonEvento)
        );

        const jsonOrganizados = [
            { "nombre": "Mi Cumpleaños", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 3), FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" }, "invitados": 3, "confirmados": 0, "rechazados": 3 },
            { "nombre": "Mi Cumpleaños Proximo", "fechaDesde": formatDate((new Date).setDate((new Date).getDate() + 368), FechaUtils.FORMATO_FECHA_HORA_DATE, "en-US"), "locacion": { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" }, "invitados": 50000, "confirmados": 1, "rechazados": 2 }
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

    crearEventoAbierto(nombre: string, fechaMaximaConfirmacion: Date, fechaDesde: Date, fechaHasta: Date, horaMaximaConfirmacion: string, horaDesde: string, horaHasta: string, locacion: Locacion): EventoAbierto {
        return new EventoAbierto(nombre, fechaMaximaConfirmacion, fechaDesde, fechaHasta, horaMaximaConfirmacion, horaDesde, horaHasta, locacion)
    }

    crearEventoCerrado(nombre: string, fechaMaximaConfirmacion: Date, fechaDesde: Date, fechaHasta: Date, horaMaximaConfirmacion: string, horaDesde: string, horaHasta: string, locacion: Locacion): EventoAbierto {
        return new EventoCerrado(nombre, fechaMaximaConfirmacion, fechaDesde, fechaHasta, horaMaximaConfirmacion, horaDesde, horaHasta, locacion)
    }

    agregarEvento(evento: Evento) {
        this.eventosOrganizados.push(evento)
    }
}
