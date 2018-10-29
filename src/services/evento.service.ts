import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import Invitacion from '../domain/invitacion';
import Usuario from '../domain/usuario';
import { formatDate, Time } from '@angular/common';
import Locacion from 'src/domain/locacion';
import Evento, { EventoAbierto, EventoCerrado } from 'src/domain/evento';
import FechaUtils from 'src/utils/fechaUtils';
import { REST_SERVER_URL } from "./configuration";

const tiposEvento = {
    'Abierto': new EventoAbierto,
    'Cerrado': new EventoCerrado
}

@Injectable({
    providedIn: 'root'
})
export class EventoService {
    usuarioLogeadoId: number
    locaciones: Locacion[] = []

    constructor(private http: Http) {
        this.usuarioLogeadoId = 1
        const jsonLocaciones = [
            { "x": -34.603759, "y": -58.381586, "nombre": "Salón El Abierto" },
            { "x": -34.572224, "y": -58.535651, "nombre": "Estadio Obras" }
        ]
        this.locaciones = jsonLocaciones.map(jsonLocacion =>
            Locacion.fromJson(jsonLocacion)
        )
    }

    async perfil(usuarioId: number): Promise<Usuario> {
        const res = await this.http.get(REST_SERVER_URL + "/perfil/" + usuarioId).toPromise()
        return Usuario.fromJson(res.json())
    }

    async amigos(usuarioId: number): Promise<Usuario[]> {
        const res = await this.http.get(REST_SERVER_URL + "/amigos/" + usuarioId).toPromise()
        return res.json().map(amigo =>
            Usuario.fromJson(amigo)
        );
    }

    async agenda(usuarioId: number): Promise<Evento[]> {
        const res = await this.http.get(REST_SERVER_URL + "/agenda/" + usuarioId).toPromise()
        return res.json().map(evento =>
            Evento.fromJson(evento)
        );
    }

    async organizados(usuarioId: number): Promise<Evento[]> {
        const res = await this.http.get(REST_SERVER_URL + "/organizados/" + usuarioId).toPromise()
        return res.json().map(evento =>
            Evento.fromJson(evento)
        );
    }

    async invitaciones(usuarioId: number): Promise<Invitacion[]> {
        const res = await this.http.get(REST_SERVER_URL + "/invitaciones/" + usuarioId).toPromise()
        return res.json().map(invitacion =>
            Invitacion.fromJson(invitacion)
        );
    }

    eliminarAmigo(usuarioId: number, amigoId: number): Promise<Response> {
        return this.http.get(REST_SERVER_URL + `/eliminarAmigo/${usuarioId}/${amigoId}`).toPromise()
    }

    aceptarInvitacion(usuarioId: number, eventoId: number, acompaniantes: number): Promise<Response> {
        return this.http.get(REST_SERVER_URL + `/aceptarInvitacion/${usuarioId}/${eventoId}/${acompaniantes}`).toPromise()
    }

    rechazarInvitacion(usuarioId: number, eventoId: number): Promise<Response> {
        return this.http.get(REST_SERVER_URL + `/rechazarInvitacion/${usuarioId}/${eventoId}`).toPromise()
    }

    crearEvento(tipoEvento: string): Evento {
        if (tipoEvento = "abierto") {
            return new EventoAbierto
        } else {
            return new EventoCerrado
        }
        //  return tiposEvento[tipoEvento].copy()
        // TODO: revisar por que tira el siguiente error: tiposEvento[tipoEvento].copy() is not a funcion
    }

    agregarEvento(evento: Evento) {
        console.log("evento pusheado: ", evento)
        // this.eventosOrganizados.push(evento)
    }
}
