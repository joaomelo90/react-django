import Lista from "@/components/Lista/Lista";
import { Profissional } from "@/components/entidades/profissional";

export default function Home() {
  const profissionais : Profissional[] = [
    {
      id: 1,
      nome: 'João',
      foto: "https://github.com/joaomelo90.png",
      descricao: "Profissional que trabalha com desenvolvimento web",
      valor_hora: 85,
    },
    {
      id: 2,
      nome: 'Django',
      foto: "https://github.com/django.png",
      descricao: "Profissional que trabalha com desenvolvimento web em python",
      valor_hora: 120,
    },
    {
      id: 3,
      nome: 'React',
      foto: "https://github.com/react.png",
      descricao: "Profissional que trabalha com desenvolvimento web em Javascript",
      valor_hora: 120,
    }
  ]
  return ( 
    <Lista profissionais={profissionais}></Lista>
  );
}










