import { useState, useEffect } from "react";
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
import { saveFolderSuccessType } from "../../store/types";

export const HomePage = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (state.type === saveFolderSuccessType) {
      setShowFeedback(true);
    }
  }, [state.type]);

  return (
    <div>
      <ModalSavePinContainer open={state.mode === "savePin"} />
      <ModalCreateFolderContainer open={state.mode === "createFolder"} />
      {showFeedback && (
        <Notification
          message="Criado com sucesso"
          onClose={() => setShowFeedback(false)}
        />
      )}
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <CardContainer id="123"
              title="Matemática"
              image="https://picsum.photos/200/300?53"
              total={0}
            />
          </Col>
          <Col xs={12} md={2}>
            <CardContainer id="133"
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
