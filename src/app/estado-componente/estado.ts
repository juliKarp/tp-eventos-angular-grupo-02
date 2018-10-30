export class Estado {
    error: string
    loading: boolean = true

    limpiarErrores() {
        this.error = undefined
    }

    respuestaError(error) {
        console.log(error);
        if (error.status == 0) {
            this.error = "No se pudo comunicar con el servidor."
        } else {
            this.error = error._body
        }
    }

    cargando() {
        this.loading = true
    }

    listo() {
        this.loading = false
    }
}
