import { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardCar from '../components/card';
import {  Dialog, Paragraph, Button, ActivityIndicator, MD2Colors } from 'react-native-paper';
import { listarCarros, deletarCarro } from '../services/cars'

export default function Inicio({navigation}) {

    const [ carros, setCarros ] = useState([])

    const [carregando, setCarregando] = useState(true)

    const [ carroDelete, setCarroDelete ] =  useState({})

    const [visible, setVisible] = useState(false);

    const showDialog = (car) => {
        setCarroDelete(car)
        setVisible(true)
    };

    const hideDialog = () => setVisible(false);

    const deleteCarro = () => {
        setCarregando(true)
        deletarCarro(carroDelete._id)
        hideDialog()
        getCarros()
    }

    const getCarros = () => {
        setCarregando(true)
        listarCarros().then((value) => {
            setCarros(value.data)
            setCarregando(false)
        })
    }

    useEffect(() => {
        getCarros()
    }, [])

    if(carregando) {
        return (
            <ActivityIndicator style={{marginTop: 50}} size={50} animating={true} color={MD2Colors.blue400} />
        )
    }

    return (
        <View style={{padding: 10, flex: 1}}>
            <FlatList
                data={carros}
                renderItem={({ item }) => <View style={{marginBottom: 10}}><CardCar km={item.quilometragem} name={item.nome} image={item.foto} deletarcarro={() => { 
                    showDialog(item)
                }}
                detalhes={() => 
                    navigation.push('Detalhes', {id: item._id})
                } 
                editar={() => navigation.push('Editar', {id: item._id})} /></View>}
            />
            <Dialog visible={visible} onDismiss={hideDialog}>
                <Dialog.Title>Você tem certeza que deseja deletar o carro {carroDelete.nome} ?</Dialog.Title>
                <Dialog.Content>
                <Paragraph>Ação não podera ser revertida</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                <Button onPress={hideDialog}>Não</Button>
                <Button onPress={deleteCarro}>Sim</Button>
                </Dialog.Actions>
            </Dialog>
            <Button
                buttonColor='blue'
                textColor='white'
                icon={'plus'}
                onPress={() => navigation.push('Cadastrar')}
                style={[styles.addcar]}
            >Adicionar</Button>
            <Button
                buttonColor='blue'
                textColor='white'
                onPress={() => getCarros()}
                style={[styles.reload]}
            >Recarregar</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    reload: {
        bottom: 16,
        left: 16,
        position: 'absolute',
    },
    addcar: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
});