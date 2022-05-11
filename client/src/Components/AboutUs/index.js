import React, {useEffect, useState} from 'react';
import css from './about.module.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {AiOutlineLine} from 'react-icons/ai';
import aboutPovrOneImg from '../../Images/aboutPovrOne.png';
import aboutPovrTwoImg from '../../Images/aboutPovrTwo.png';
import aboutPovrThree from '../../Images/p3.png';
import aboutPovrForImg from '../../Images/p4.png';
import aboutBg from '../../Images/aboutBg.png';
import povrsSmileImg from '../../Images/aboutSmilePovers.png';
import arrow from '../../Images/arrow.svg'
import Pink from "../Pink";
import {useDispatch, useSelector} from "react-redux";
import {aboutFooter, aboutUsGet, chooseGet} from "../../Store/actions/productActions";

const AboutUs = ({langValue}) => {

    const [validated, setValidated] = useState(false);

    const aboutData = useSelector(state => state.productReducer.about)
    const chooseData = useSelector(state => state.productReducer.choose)
    const about_footer = useSelector(state => state.productReducer.about_footer_get)

    let x = aboutData?.map(i => i.images.split(','))

    let y = x[0]?.map(i => i)

    const footerBgImg = about_footer?.map(i => i.image)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(aboutUsGet())
        dispatch(chooseGet())
        dispatch(aboutFooter())
    }, [])

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        {
                            aboutData?.map((item) => {
                                return (
                                    <div className={css.aboutTitle}>
                                        <h1>
                                            <AiOutlineLine/>
                                            {langValue == "en" ? item.titleEn : langValue == "ru" ?
                                                item.titleRu : langValue == "am" ? item.titleHy : null}
                                        </h1>
                                        <p>
                                            {langValue == "en" ? item.textEn : langValue == "ru" ?
                                                item.textRu : langValue == "am" ? item.textHy : null}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
                <Row>

                    <Col lg={6} md={6} xs={12}>
                        <div className={css.povrsOne}>
                            {
                                y?.slice(0, 1).map((item) => {
                                    return <img className={css.p1} src={item} alt=""/>
                                })
                            }
                            {
                                y?.slice(1, 2).map((item) => {
                                    return <img className={css.p2} src={item} alt=""/>
                                })
                            }
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.povrsTwo}>
                            {
                                y?.slice(2, 3).map((item) => {
                                    return <img className={css.p3} src={item} alt=""/>
                                })
                            }
                            {
                                y?.slice(3, 4).map((item) => {
                                    return <img className={css.p4} src={item} alt=""/>
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <div style={{
                backgroundImage: `url(${footerBgImg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                height: "600px",
                marginTop: "3rem",
                marginBottom: "3rem",
                width: "100%"
            }}>
                <Container>
                    <Row>
                        {
                            about_footer?.map((item) => {
                                return (
                                    <Col lg={12} md={12} xs={12}>
                                        <div className={css.banerText}>
                                            <h1>{langValue == "en" ? item.titleEn
                                                : langValue == "ru" ? item.titleRu
                                                    : langValue == "am" ? item.titleHy : null}</h1>
                                            <p>{langValue == "en" ? item.subTitleEn
                                                : langValue == "ru" ? item.subTitleRu
                                                    : langValue == "am" ? item.subTitleHy : null}</p>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.smileDiv}>
                            {
                                chooseData?.map((item) => {
                                    return (
                                        <h1>
                                            <i><AiOutlineLine/></i>
                                            {langValue == "en" ? item.titleEn
                                                : langValue == "ru" ? item.titleRu
                                                    : langValue == "am" ? item.titleHy : null}
                                        </h1>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12} className='mb-5'>
                        <div>
                            {
                                chooseData?.map((item) => {
                                    return (
                                        <img className={css.imgOne} src={item.image} alt=""/>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.arrowMain}>
                            {
                                chooseData?.slice(0, 3).map((item) => {
                                    return (
                                        <div className={css.arrowFlex}>
                                            <img src={arrow} alt=""/>
                                            <p>
                                                {langValue == "en" ? item.textEn
                                                    : langValue == "ru" ? item.textRu
                                                        : langValue == "am" ? item.textHy : null}
                                            </p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <Pink/>
        </div>
    );
};

export default AboutUs;