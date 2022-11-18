import { Card, Container } from "react-bootstrap"
import { Wrapper } from "@googlemaps/react-wrapper"
import Map from "./components/Map/"

const renderMaps = (status) => {
  return <h1>{status}</h1>
}

export default function Main() {
  return (
    <>
      <Container fluid id="main" className={`bg-background-primary`}>
        <h1 className="text-center pt-3">Sobre o projeto</h1>
        <h5 className="text-center text-muted mb-0">Mobilidade Urbana</h5>
        <Container fluid className="mx-0 px-0 pb-4 row justify-content-around">
          <Card className="col-12 col-md-5 col-lg-3 mx-md-1 mx-lg-0 py-2 px-4 shadow-sm mt-4">
            <Card.Title className="text-center">Objetivo</Card.Title>
            <Card.Text className="text-center">
              O objetivo da plataforma é criar uma central de mobilidade urbana, baseada em mapas
              providos pelo GoogleMaps, onde os usuários poderão criar pontos de interesse em um mapa dinamico
              (baseado em latitude e longitude)
            </Card.Text>
          </Card>
          <Card className="col-12 col-md-5 col-lg-4 mx-md-1 mx-lg-0 py-2 px-4 shadow-sm mt-4">
            <Card.Title className="text-center">Pontos de Interesse</Card.Title>
            <Card.Text className="text-center">
              Serão coordenadas em um mapa dinamico. Essas
              coordenadas poderão ser representadas de maneiras diferentes, de acordo com a categoria do ponto
              (Ex: Banheiros PCD / calçadas com acessibilidade / locais nao acessíveis para cadeirantes / vagas
              para PCD, etc...)
            </Card.Text>
          </Card>
          <Card className="col-12 col-md-7 col-lg-4 mx-md-1 mx-lg-0 py-2 px-4 shadow-sm mt-4">
            <Card.Title className="text-center">Cadastro</Card.Title>
            <Card.Text className="text-center">
              Apenas usuários cadastrados poderão criar e revisar pontos de interesse. A plataforma possuirá um recurso
              de {'"Ranqueamento"'} onde os usuários ganharão pontos e selos de conquista para exibirem em seu perfil
              e ganharem destaque
            </Card.Text>
          </Card>
        </Container>
      </Container>
      <Container fluid id="mapa" className={`bg-background-secondary mx-0 pb-3`}>
        <h1 className="text-center pt-3">Integração GoogleMaps</h1>
        <Container fluid className="col-12 col-md-10 mx-auto container-fluid px-0 mt-4">
          <Wrapper apiKey="AIzaSyDxDDPV5FNeuNF0FJY6vs4tOChzERjuh1E" render={renderMaps}>
            <Map style={{ height: "400px", width: "100%" }} />
          </Wrapper>
        </Container>
        <Container fluid className="px-0 text-center">
          <Card className="col-12 col-md-7 py-2 px-3 mt-3 mx-auto shadow-sm card">
            <Card.Text>
              Por enquanto esta é apenas uma implementação inicial (carregando com latitude e longitude da FIAP)
              <br />
              Futuramente o mapa carregará de acordo com a localidade atual do usuário e com os pontos de interesse
              personalizados conforme o cadastro na plataforma.
            </Card.Text>
          </Card>
        </Container>
      </Container>
    </>
  )
}
