import { useState } from "react"
import Form from "../template/form"
import { cadastrarCarro } from '../services/cars'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Cadastrar({navigation}) {

    const [carregando, setCarregando] = useState(false)
    const [car, setCar] = useState({
        "nome": "",
        "marca": "",
        "placa": "",
        "chassis": "",
        "ano": "",
        "quilometragem": "",
        "foto": "",
    })

    const handleInput = (field, value) => {
        setCar((s) => ({ ...s, [field]: value }))
    }

    if(carregando) {
        return (
            <ActivityIndicator style={{marginTop: 50}} size={50} animating={true} color={MD2Colors.blue400} />
        )
    }

    return <Form nomeChange={(txt) => handleInput('nome', txt)} placaChange={(txt) => handleInput('placa', txt)} marcaChange={(txt) => handleInput('marca', txt)} anoChange={(txt) => handleInput('ano', txt)} kmChange={(txt) => handleInput('quilometragem', txt)} chassisChange={(txt) => handleInput('chassis', txt)} fotoChange={(txt) => handleInput('foto', txt)} btnNome="Cadastrar" acao={() => {
        setCarregando(true)
        cadastrarCarro(car).then(() => {
            navigation.goBack()
        })
    }} />
}