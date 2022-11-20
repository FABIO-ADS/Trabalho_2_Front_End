import {  Button, Card, Title, Paragraph } from 'react-native-paper';

export default function CardCar({name, image, km, deletarcarro, detalhes, editar }) {
    return <Card>
    <Card.Cover source={{ uri: image }} />
    <Card.Content>
      <Title>{name}</Title>
      <Paragraph>{km}</Paragraph>
      <Card.Actions>
        <Button onPress={deletarcarro} buttonColor="red" textColor="white">Deletar</Button>
        <Button onPress={editar} buttonColor="yellow" textColor="black">Editar</Button>
        <Button onPress={detalhes} buttonColor="green">Detalhes</Button>
      </Card.Actions>
    </Card.Content>
    </Card>
}

