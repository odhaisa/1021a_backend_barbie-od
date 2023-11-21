import FilmeRepositorioInterface from "../aplicacao/filme-repositorio-interface";

export default class ListarFilme{
    constructor(private filmeRepositorio:FilmeRepositorioInterface){}
    public async execute():Promise<Filme[]>{
        return this.filmeRepositorio.listar()
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}
// type Output = {
//     id:number,
//     titulo:string,
//     descricao:string,
//     foto:string
// }