export interface Usuario{
    username: string,
    observacion: string,
    salario: number,
    genero: number,
    fechaRegistro: Date,
    aficiones: [
        {
            id:number
        }
    ]
}