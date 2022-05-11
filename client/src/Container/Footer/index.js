import React, {useEffect} from 'react';
import css from './footer.module.css';
import {AiFillFacebook} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs';
import {Col, Container, Row} from "react-bootstrap";
import {GoLocation} from 'react-icons/go'
import {BsTelephone} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {contactsData} from "../../Store/actions/productActions";
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation();

    const contactUsData = useSelector(state => state.productReducer.contactsGet);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contactsData())
    }, [])

    return (
        <div className={css.footerMain}>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={4} lg={4} xs={12}>
                        <div className={css.col}>
                            <h1>LOGO</h1>
                            <p>The production of COMPANY is distinguished by elegant taste and great design</p>
                            <div>
                                <i className={css.icons}><AiFillFacebook/></i>
                                <i><BsLinkedin/></i>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={4} xs={12}>
                        <div className={css.colLi}>
                            <h2>{t('Information')}</h2>
                            <ul>
                                <li>My Account</li>
                                <li><Link to={'/delivary'}>{t("delivary")}</Link></li>
                                <li><Link to='/terms'>{t("Termsandconditions")}</Link></li>
                                <li>{t("PrivacyPolicy")}</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={4} lg={4} xs={12}>
                        <div className={css.colLi}>
                            <h2>{t("ContactInfo")}</h2>
                            {
                                contactUsData?.map((item, index) => {
                                    return (
                                        <ul key={index}>
                                            <li><i><GoLocation/></i>{item.location}</li>
                                            <li>
                                                <a href={`tel:${item.phone}`}>
                                                    <i>
                                                        <BsTelephone/>
                                                    </i>
                                                    {item.phone}
                                                </a>
                                            </li>
                                            <li><i><AiOutlineMail/></i>{item.email}</li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;