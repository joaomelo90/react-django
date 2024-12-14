
const Cabecalho = () => {
    return(
        <div className=" w-full h-full flex flex-col items-center justify-center">
        <main
        className=" w-64 mt-10 ">
            <div >
                <img 
                src="/imagens/hireMe.jpg"
                alt="hireMe"
                className=" w-full rounded-xl opacity-75"                
                />
            </div>
            <p className=" text-center text-primary">Encontre o Profissional para o seu Trabalho!</p>
        </main>
        </div>
    )
}

export default Cabecalho