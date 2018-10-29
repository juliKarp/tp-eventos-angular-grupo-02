import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import Invitacion from '../domain/invitacion';
import Usuario from '../domain/usuario';
import { formatDate, Time } from '@angular/common';
import Locacion from 'src/domain/locacion';
import Evento, { EventoAbierto, EventoCerrado } from 'src/domain/evento';
import FechaUtils from 'src/utils/fechaUtils';
import { REST_SERVER_URL } from "./configuration";

@Injectable({
    providedIn: 'root'
})
export class EventoService {
    usuarioLogeadoId: number
    constructor(private http: Http) {
        this.usuarioLogeadoId = 1
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

    async locaciones(): Promise<Locacion[]> {
        const res = await this.http.get(REST_SERVER_URL + "/locaciones").toPromise()
        return res.json().map(locacion =>
            Locacion.fromJson(locacion)
        );
    }

    agregarEvento(usuarioId: number, evento: Evento) {
        console.log("evento pusheado: ", evento)
        return this.http.put(REST_SERVER_URL + "/nuevoEvento/" + usuarioId, evento).toPromise()
        // this.eventosOrganizados.push(evento)
    }
}
