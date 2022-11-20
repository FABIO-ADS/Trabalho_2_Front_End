import { useEffect, useState } from 'react';
import { Card, Title, Paragraph, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { pegarCarroPorId } from '../services/cars'

export default function Detalhes({navigation, route}) {
    const [ carregando, setCarregando ] = useState(true)
    const [ car, setCar ] = useState({})
    const id = route.params?.id

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

    return (
        <Card elevation={0}>
            <Card.Cover source={{ uri: car.foto }} />
            <Card.Content>
                <Title>{car.nome}</Title>
                <Paragraph>km: {car.quilometragem}</Paragraph>
                <Paragraph>Marca: {car.marca}</Paragraph>
                <Paragraph>Placa: {car.placa}</Paragraph>
                <Paragraph>Ano: {car.ano}</Paragraph>
            </Card.Content>
        </Card>
    )
}