import React from 'react'

import { Row, Col } from '../../components/Grid'
import ButtonSpreadType from '../../components/ButtonSpreadType'

import { chooseSpreadType } from '../../actions'
import store from '../../store'

const IndexContainer = props => {

  const handleChoice = choice => {
    store.dispatch(chooseSpreadType(choice))
    props.router.push(`/tarot-table`)
  }

  return (
    <div className="index">
      <h1 className="page-title">Escolha o tipo de tiragem:</h1>
      <Row>
        <Col lg="3" md="4" sm="6" xs="12" offset={['lg', 3]}>
          <ButtonSpreadType spreadType="simple" click={choice => handleChoice(choice)} />
        </Col>
        <Col lg="3" md="4" sm="6" xs="12">
          <ButtonSpreadType spreadType="period" click={choice => handleChoice(choice)} />
        </Col>
      </Row>
    </div>
  )
}

export default IndexContainer