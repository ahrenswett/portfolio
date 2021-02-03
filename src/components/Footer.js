import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Ahren Swett
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={4.5}>
                        This site was made by Ahren Swett.
                    </Col>
                </Row>
            </Container>
        </footer>
    )

}

export default footer