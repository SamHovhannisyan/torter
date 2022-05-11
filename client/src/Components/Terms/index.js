import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import css from './terms.module.css';
import Pink from "../Pink";
import {useDispatch, useSelector} from "react-redux";
import {termsGet} from "../../Store/actions/productActions";
import {productReducer} from "../../Store/reducers/productReducer";

const Terms = ({langValue}) => {

    const termsData = useSelector(state => state.productReducer.terms)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(termsGet())
    }, [])

    return (
        <div>
            <Container>
                <Row className='p-5'>
                    {
                        termsData?.map((item) => {
                            return (
                                <Col lg={12} md={12} xs={12}>
                                    <div className={css.termsDiv}>
                                        <h1>
                                            {langValue == "en" ? item.subjectEn
                                                : langValue == "ru" ? item.subjectRu
                                                    : langValue == "am" ? item.subjectHy : null}
                                        </h1>
                                        <p>
                                            {langValue == "en" ? item.answerEn
                                                : langValue == "ru" ? item.answerRu
                                                    : langValue == "am" ? item.answerHy : null}
                                        </p>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
            <Pink/>
        </div>
    );
};

export default Terms;