"use client";

import { useEffect, useState } from "react";
import { Profissional } from "@/components/entidades/profissional";
import { ApiServices } from "@/components/services/ApiServices";


export function useIndex(){
    const [listaProfissionais, setListaProfissionais] = useState<Profissional[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [profissionalSelecionado, setProfissionalSelecionado] = useState<Profissional | null>(null);

    useEffect(()=> {
        ApiServices.get('/profissionais').
        then((response) =>{
            setListaProfissionais(response.data)
        })
    },[])

    useEffect(() => {
        limparFormulario();
    },[profissionalSelecionado])

    function marcarJob(){
        if(profissionalSelecionado !== null){
            if(validarDados()){
                ApiServices.post('/profissional/' +
                    profissionalSelecionado.id + 
                    '/job', {
                        nome,
                        email
                    }
                ).then(() => {
                    setProfissionalSelecionado(null);
                    alert('Cadastrado com Sucesso');
                }).catch((erro) => {
                    alert(erro.response?.data.massage);
                })
            }else {
                alert('Preencha os dados corretamente')
            }
        }
        
        
    }

    function validarDados(){
        return nome.length > 0 && email.length > 0;
    }

    function limparFormulario (){
        setNome('');
        setEmail('');
    }

    return {
        listaProfissionais,
        nome,
        setNome,
        email,
        setEmail,
        profissionalSelecionado,
        setProfissionalSelecionado,
        marcarJob,
        validarDados,

    }
}