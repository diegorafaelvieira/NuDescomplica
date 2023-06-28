import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Card } from "../../components/Card/Card";
import { CardContainer } from "../../containers/Card/Card";
import { ModalSavePinContainer } from "../../containers/ModalSavePin/ModalSavePin";
import { ModalCreateFolderContainer } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { Notification } from "../../components/Notification/Notification";
import { useAppContext } from "../../store/AppContext";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <ModalSavePinContainer open={state.mode === 'savePin'} />
      <ModalCreateFolderContainer open={false} />
      <Notification
        message="Criado com sucesso"
        onClose={() => {
          console.log("Clicou em fechar");
        }}
      />
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <CardContainer
              title="Matemática"
              image="https://picsum.photos/200/300?53"
              total={0}
            />
          </Col>
          <Col xs={12} md={2}>
            <CardContainer
              title="Trigonometria"
              image="https://picsum.photos/200/300?13"
              total={1}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
