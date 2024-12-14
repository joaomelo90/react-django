const Lista = ()=>{
    return (
        <ul className="listaStyled w-full w-max m-[0_auto] p-[10px_2px_10px_2px] grid grid-cols-1 lg:grid-cols-2 gap-14 " >
            <li className="itemLista list-none ">
                <img src="https://github.com/joaomelo90.png"
                className=" md:w-auto w-96 rounded-3xl"
                />
                <div className="nomeDescricao">
                    <div className="nome mt-4 font-bold">João Melo</div>
                    <div className="valor m-0 font-bold text-primary">R$ 80 por hora</div>
                    <div className="descricao break-words ">Trabalha com Tecnologias Web</div>
                </div>
            </li>



            <li className="itemLista list-none p-1">
                <img src="https://github.com/joaomelo90.png"
                className=" md:w-auto w-96 rounded-3xl "
                />
                <div className="nomeDescricao">
                    <div className="nome mt-4 font-bold">João Melo</div>
                    <div className="valor m-0 font-bold text-primary">R$ 80 por hora</div>
                    <div className="descricao break-words ">Trabalha com Tecnologias Web</div>
                </div>
            </li>

        </ul>


        
    )
}

export default Lista