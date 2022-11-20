import Form from "../template/form";
import { pegarCarroPorId, editarCarroPorId } from '../services/cars'
import { useEffect, useState } from "react";
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

export default function Editar({navigation, route}) {
    const id = route.params?.id
    const [carregando, setCarregando] = useState(true)
    const [car, setCar] = useState({})

    const handleInput = (field, value) => {
        setCar((s) => ({ ...s, [field]: value }))
    }

    const editar = (infos) => {
        setCarregando(true)
        editarCarroPorId(id, infos).then(() => {
            navigation.goBack()
        })
    }

    useEffect(() => {
        pegarCarroPorId(id).then((value) => {
            setCar(value.data)
            setCarregando(false)
        })
    }, [])

    if(carregando) {
        return (
            <ActivityIndicator style={{marginTop: 50}} size={50} animating={true} color={MD2Colors.blue400} />
        )
    }

    return <Form nomeChange={(txt) => handleInput('nome', txt)} placaChange={(txt) => handleInput('placa', txt)} marcaChange={(txt) => handleInput('marca', txt)} anoChange={(txt) => handleInput('ano', txt)} kmChange={(txt) => handleInput('quilometragem', txt)} chassisChange={(txt) => handleInput('chassis', txt)} fotoChange={(txt) => handleInput('foto', txt)} initNome={car.nome} initAno={car.ano.toString()} initChassis={car.chassis} initFoto={car.foto} initKm={car.quilometragem} initMarca={car.marca} initPlaca={car.placa} btnNome={'Editar'} acao={() => editar({ "nome": car.nome, "marca": car.marca, "placa": car.placa, "chassis": car.chassis, "ano": `${car.ano}`, "quilometragem": car.quilometragem, "foto": car.foto })} />
}