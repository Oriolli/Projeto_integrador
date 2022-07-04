import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import './styles.css';
import Menu from '../../components/Menu';
import camposgerais from '../../utils/funcoes';
import funcoes from '../../utils/funcoes';
import somalucro from '../../utils/funcoes';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarChart, { canvas_exec } from '../../components/BarChart';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div>
      <div>
        <Menu />

        <div className="container-fluid">
          <div className="row" id="space">
            <div className="col-sm">
              <strong>
                Banca Inicial
                <input
                  type="number"
                  className="inputts"
                  id="inputbanca"
                  placeholder="R$"
                  step="0.01"
                  min="0"
                  onKeyUp={funcoes}
                ></input>
              </strong>
            </div>

            <div className="col-sm" md={1}>
              <strong>
                Meta Diária
                <input
                  type="varchar"
                  className="inputts"
                  id="inputmeta"
                  placeholder="R$"
                  step="0.01"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                Banca Atual
                <input
                  type="varchar"
                  className="inputts"
                  id="inputatual"
                  placeholder="R$"
                  step="0.01"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                Stake
                <input
                  type="varchar"
                  className="inputts"
                  id="inputstake"
                  placeholder="R$"
                  step="0.01"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                StopLoss
                <input
                  type="varchar"
                  className="inputts"
                  id="inputstop"
                  placeholder="R$"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                Lucro
                <input
                  type="varchar"
                  className="inputts"
                  id="inputlucro"
                  placeholder="R$"
                  step="0.01"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                Valorização
                <input
                  type="varchar"
                  className="inputts"
                  id="inputval"
                  placeholder="R$"
                  step="0.01"
                  disabled
                ></input>
              </strong>
            </div>

            <div className="col-sm">
              <strong>
                Objetivo
                <input
                  type="number"
                  className="inputts"
                  id="inputobj"
                  placeholder="%"
                  step="0.01"
                  onKeyUp={function funccoes() {
                    setTimeout(funcoes, 1000);
                  }}
                ></input>
              </strong>
            </div>
          </div>
        </div>

        <Form className="formulario">
          <div className="rows">
            <strong id="prof">Profit/Loss </strong>
            <strong id="banc">Banca </strong>
            <strong id="met">Meta </strong>
          </div>

          <div id="tabeladias">
            <Row className="rows">
              <span id="dias">DIA 1: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia1"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca1"
                />
              </Col>

              <Col md={1}>
                <Input
                  id="atingiu1"
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 2: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia2"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca2"
                />
              </Col>

              <Col md={1}>
                <Input
                  id="atingiu2"
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 3: </span>
              <Col md="1">
                <Input
                  id="dia3"
                  className="inputes"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca3"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 4: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia4"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca4"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 5: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia5"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca5"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 6: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia6"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca6"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 7: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia7"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca7"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 8: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia8"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca8"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA 9: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia9"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca9"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>

            <Row className="rows">
              <span id="dias">DIA10: </span>
              <Col md="1">
                <Input
                  className="inputes"
                  id="dia10"
                  name="lucro"
                  placeholder="R$"
                  type="number"
                  step="0.01"
                  min="0"
                  onKeyUp={somalucro}
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="banca"
                  placeholder="R$"
                  type="number"
                  id="banca10"
                />
              </Col>

              <Col md={1}>
                <Input
                  className="inputes"
                  name="meta"
                  placeholder="Atingiu / Não atingiu"
                  type="text"
                  disabled
                />
              </Col>
            </Row>
          </div>
        </Form>
        <div id="barchart">
          {' '}
          <BarChart />{' '}
        </div>
      </div>
    </div>
  );
};

export default PagesHome;
