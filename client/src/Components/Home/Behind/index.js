import React, {useEffect, useState} from 'react';
import css from './behind.module.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import behindImg from '../../../Images/behindImg.png';
import Pink from "../../Pink";
import {useDispatch, useSelector} from "react-redux";
import {homeFooter} from "../../../Store/actions/productActions";
import {productReducer} from "../../../Store/reducers/productReducer";
import {useTranslation} from "react-i18next";

const Behind = ({langValue}) => {

    const {t} = useTranslation();

    const home_footer = useSelector(state => state.productReducer.home_footer_get);

    const homeFootImg = home_footer?.map(i => i.image)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(homeFooter());
    }, []);

    return (
        <div>
            <div style={{
                backgroundImage: `url(${homeFootImg})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "500px",
                backgroundRepeat: "no-repeat",
                marginTop: "5rem"
            }}>
                <Container>
                    <Row className="justify-content-md-center mt-5 mb-5">
                        {
                            home_footer?.map((item) => {
                                return (
                                    <Col lg={12} md={12} xs={12}>
                                        <div className={css.divOne}>
                                            <div className={css.behid}>
                                                <h1>{langValue == 'en' ? item.titleEn : langValue == 'ru' ? item.titleRu
                                                    : langValue == 'am' ? item.titleHy : null}</h1>
                                                <p>{langValue == 'en' ? item.subTitleEn : langValue == 'ru' ? item.subTitleRu
                                                    : langValue == 'am' ? item.subTitleHy : null}}</p>
                                                <button>{t("Seemore")}</button>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>

            <Pink/>

        </div>
    );
};

export default Behind;