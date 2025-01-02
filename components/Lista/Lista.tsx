import { Profissional } from "../entidades/profissional"


interface PropsLista {
    profissionais: Profissional[]
}


const Lista = (props: PropsLista) => {
    return (
        <div className=" w-full flex justify-center items-center ">
            {props.profissionais.length > 0 ? (
                <ul className="listaStyled mt-7 grid grid-cols-1 lg:grid-cols-2 gap-10  " >
                {props.profissionais.map(profissional => (
                    <li className="itemLista list-none flex flex-col justify-center items-center"
                    key={profissional.id}>
                        
                        <img src={profissional.foto}
                        className=" md:w-36 w-96 rounded-3xl"
                        />
                        <div className="nomeDescricao flex flex-col justify-center items-center">
                            <div className="nome mt-4 font-bold">{profissional.nome}</div>
                            <div className="valor m-0 font-bold text-primary">{profissional.valor_hora.
                                toLocaleString ('pt-br',
                                    {minimumFractionDigits: 2,
                                    style: 'currency',
                                    currency: 'BRL',})} Por Hora</div>
                            <div className="descricao break-words ">{profissional.descricao}</div>
                        </div>
                    </li>  ))}
            </ul> )

            : (
                <h3 className=" text-center font-bold">Não Temos Profissionais Cadastrados</h3> 
            )}

            
        </div>
        )
}

export default Lista