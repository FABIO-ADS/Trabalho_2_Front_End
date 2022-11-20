import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { HelperText, TextInput, Button } from 'react-native-paper';

export default function Form({ initNome = '', initMarca = '', initAno = '', initPlaca = '', initKm = '', initChassis = '', initFoto = '' ,acao, btnNome, nomeChange, marcaChange, anoChange, placaChange, kmChange, chassisChange, fotoChange }) {
    const [nome, setNome] = useState(initNome);
    const [marca, setMarca] = useState(initMarca);
    const [ano, setAno] = useState(initAno);
    const [placa, setPlaca] = useState(initPlaca);
    const [quilometragem, setQuilometragem] = useState(initKm);
    const [chassis, setChassis] = useState(initChassis);
    const [foto, setFoto] = useState(initFoto);

    const onNomeChange = (text) => {
        const novoValor = text
        setNome(novoValor)

        !!nomeChange && nomeChange(novoValor)
    }

    const onMarcaChange = (text) => {
        const novoValor = text
        setMarca(novoValor)

        !!marcaChange && marcaChange(novoValor)
    }

    const onAnoChange = (text) => {
        const novoValor = text
        setAno(novoValor)

        !!anoChange && anoChange(novoValor)
    }

    const onPlacaChange = (text) => {
        const novoValor = text
        setPlaca(novoValor)

        !!placaChange && placaChange(novoValor)
    }

    const onKmChange = (text) => {
        const novoValor = text
        setQuilometragem(novoValor)

        !!kmChange && kmChange(novoValor)
    }
    
    const onChassisChange = (text) => {
        const novoValor = text
        setChassis(novoValor)

        !!chassisChange && chassisChange(novoValor)
    }

    const onFotoChange = (text) => {
        const novoValor = text
        setFoto(novoValor)

        !!fotoChange && fotoChange(novoValor)
    }

    const vazioErrors = (txt) => txt == ''

    const anoErrors = (txt) => !(txt.length == 4 && !isNaN(parseFloat(txt)))

    const placaErrors = (txt) => !(new RegExp("[A-Z]{3}[0-9][0-9A-Z][0-9]{2}").test(txt))

    const chassisErrors = (txt) => !(txt.length == 11)

    return (
    <ScrollView>
        <TextInput label="Nome" value={nome} onChangeText={onNomeChange} />
        <HelperText type="error" visible={vazioErrors(nome)}>
            Nome inválido
        </HelperText>
        <TextInput label="Marca" value={marca} onChangeText={onMarcaChange} />
        <HelperText type="error" visible={vazioErrors(marca)}>
            Marca inválida
        </HelperText>
        <TextInput label="Ano" value={ano} onChangeText={onAnoChange} />
        <HelperText type="error" visible={anoErrors(ano)}>
            Ano inválido
        </HelperText>
        <TextInput label="Placa" value={placa} onChangeText={onPlacaChange} />
        <HelperText type="error" visible={placaErrors(placa)}>
            Placa inválida
        </HelperText>
        <TextInput label="Quilometragem" value={quilometragem} onChangeText={onKmChange} />
        <HelperText type="error" visible={vazioErrors(quilometragem)}>
            Quilometragem inválida
        </HelperText>
        <TextInput label="Chassis" value={chassis} onChangeText={onChassisChange} />
        <HelperText type="error" visible={chassisErrors(chassis)}>
            Chassis inválido
        </HelperText>
        <TextInput label="Foto" value={foto} onChangeText={onFotoChange} />
        <HelperText type="error" visible={vazioErrors(foto)}>
            Foto inválida
        </HelperText>
        <Button mode="contained" onPress={acao}>
            {btnNome}
        </Button>
    </ScrollView>)
}