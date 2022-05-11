import React, {useEffect, useState} from 'react';
import css from './contactUs.module.css';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import contactImgMian from '../../Images/contactImg.png';
import contactLoaction from '../../Images/contactLocation.svg';
import contactTel from '../../Images/contactTel.svg';
import contactEmail from '../../Images/contactEmail.svg';
import Iframe from "react-iframe";
import {useDispatch, useSelector} from "react-redux";
import {contactPost, contactsData} from "../../Store/actions/productActions";
import Pink from "../Pink";
import {Formik} from 'formik';
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";

const ContactUs = () => {

    const {t} = useTranslation();

    const contactUs = useSelector(state => state.productReducer.contactsGet)

    const [contactData, setContactData] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(contactsData())
    },[])

    const handleChangeForm = (e) => {
        contactData[e.target.name] = e.target.value;
        setContactData(contactData)
    }


    return (
        <div>
            <Container>
                <Row>
                    <Col lg={5} md={6} xs={12}>
                        <div className={css.divMain}>
                            <h2>{t("Getintouch")}</h2>
                            <Formik
                                initialValues={{email: '', name: '', subject: '', message: ''}}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: `${t("Requerid")}!`,
                                        });
                                        errors.email = `${t("Requerid")}!`
                                    } else if (!values.name) {
                                        errors.name = `${t("Requerid")}!`;
                                    } else if (!values.subject) {
                                        errors.subject = `${t("Requerid")}!`;
                                    } else if (!values.message) {
                                        errors.message = `${t("Requerid")}!`;
                                    } else if (
                                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                    ) {
                                        errors.email = `${t("Invalidemailaddress")}`;
                                    }
                                    return errors;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        values.email = ''
                                        values.name = ''
                                        values.subject = ''
                                        values.message = ''
                                        dispatch(contactPost(contactData))
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: `${t("ContactSuccess")}`,
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        setSubmitting(false);
                                    }, 400);
                                }}
                            >
                                {({
                                      values,
                                      errors,
                                      touched,
                                      handleChange,
                                      handleBlur,
                                      handleSubmit,
                                      isSubmitting,
                                  }) => (
                                    <form onSubmit={handleSubmit} onChange={handleChangeForm} className={css.form}>
                                        <input
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                            className={css.inpDiv}
                                            placeholder={t("Invalidemailaddress")}
                                        />
                                        <span className={css.err}>{errors.name && touched.name && errors.name}</span>

                                        <input
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                            className={css.inpDiv}
                                            placeholder={t("Email")}
                                        />
                                        <span className={css.err}>
                                            {errors.email && touched.email && errors.email}
                                        </span>

                                        <input
                                            type="text"
                                            name="subject"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.subject}
                                            className={css.inpDiv}
                                            placeholder={t("Subject")}
                                        />
                                        <span className={css.err}>
                                            {errors.subject && touched.subject && errors.subject}
                                        </span>
                                        <input
                                            type="text"
                                            name="message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.message}
                                            className={css.texterea}
                                            placeholder={t("Message")}
                                        />
                                        <span className={css.err}>
                                            {errors.message && touched.message && errors.message}
                                        </span>
                                        <button type="submit" className='btnContact' disabled={isSubmitting}>
                                            {t("Submit")}
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </Col>
                    <Col lg={6} md={6} xs={12}>
                        <div className={css.divImgContact}>
                            <img src={contactImgMian} height="180px" alt=""/>
                            <div className={css.divImgs}>
                                {
                                    contactUs?.map((item) => {
                                        return (
                                            <section className={css.sec}>
                                                <div>
                                                    <img src={contactLoaction} width="40" height="50" alt=""/>
                                                    <p>{item.location}</p>
                                                </div>
                                                <div>
                                                    <a href={`tel:${item.phone}`}>
                                                        <img src={contactTel} width="40" height="40" alt=""/>
                                                        <p>{item.phone}</p>
                                                    </a>
                                                </div>
                                                <div>
                                                    <img src={contactEmail} width="40" height="40" alt=""/>
                                                    <p>{item.email}</p>
                                                </div>
                                            </section>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div>
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48705.4866241636!2d44.5905548543176!3d40.2736861957187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1c3ec9f2329%3A0x5cee9f0e0c28a3b5!2sAbovyan%2C%20Armenia!5e0!3m2!1sen!2s!4v1650879037833!5m2!1sen!2s"
                    width="100%"
                    height="250vh"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"
                />
            </div>

            <Pink/>
        </div>
    );
};

export default ContactUs;