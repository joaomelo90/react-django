"use client";
import Lista from "@/components/Lista/Lista";
import { useIndex } from "@/components/hooks/pages/useindex";

export default function Home() {
  const { 
    listaProfissionais,
    nome,
    setNome,
    email,
    setEmail,
    profissionalSelecionado,
    setProfissionalSelecionado,
    marcarJob
  } = useIndex();

  // Função de fechamento do modal
  const handleClose = () => {
    setProfissionalSelecionado(null); 
  };

  return (
    <div>
      <Lista 
        profissionais={listaProfissionais}
        onSelect={(profissional) => setProfissionalSelecionado(profissional)}
      />

     
      {profissionalSelecionado && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300"
          onClick={handleClose} // Fecha ao clicar fora do modal
          > <div 
            className="bg-white rounded-lg p-6 shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Impede que o clique dentro do modal feche ele
          >
            <div className="container tracking-normal">
              <form>
                <div>
                  <input
                    type="text"
                    placeholder="Digite seu nome"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                    className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </form>
            </div>

            <div className="mt-5 flex flex-col gap-4">
              <button 
              className="bg-primary text-white font-bold rounded w-28 shadow-lg text-sm"
              onClick={() => marcarJob()}
              >
                Contratar DEV
              </button>
              <button
                className="bg-red-500 text-white font-bold rounded w-28 shadow-lg text-sm"
                onClick={handleClose} // Chama a função de fechar
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
}
