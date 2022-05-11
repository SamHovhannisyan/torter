import React, {useEffect, useState} from 'react';
import css from './forget.module.css';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import chefWoman from '../../Images/chefWomen.png';
import {Link, useNavigate} from "react-router-dom";
import {Formik} from 'formik';
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import axios from "axios";
import keys from "../../keys";

const ForgetPassword = () => {

    const {t} = useTranslation();

    let navigate = useNavigate();

    const [checked, setChecked] = useState(false);
    const [checkVal, setCheckVal] = useState({val: false})
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [emailVal, setEmailVal] = useState()


    const handleCheck = (e) => {
        setChecked(!checked)
        checkVal.val = !checkVal.val
        setCheckVal(checkVal)
    }

    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);


    return (
        <div>
            <Container>
                <Row className='m-5'>
                    <Col lg={12} md={12} xs={12}>
                        <div className={css.mainDiv}>
                            <div className={css.divForm}>
                                <div className={css.divText}>
                                    <div className={css.mediaImg}>
                                        <h1>Forget Password</h1>
                                        <img src={chefWoman} alt=""/>
                                    </div>
                                    <h2>{t("Welcomebackto")} <span>{t("Companyname")}</span></h2>
                                </div>
                                <Formik
                                    initialValues={{email: ''}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                            errors.email = Swal.fire({
                                                icon: 'error',
                                                title: 'Oops...',
                                                text: 'Requerid!',
                                            });
                                            errors.email = ''
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                            errors.email = `${t("Invalidemailaddress")}`;
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {
                                        axios.post(`${keys.baseURI}/users/forgotMail`, values)
                                            .then(function (response) {
                                                if (response.data.answer == true) {
                                                    setShow(true)
                                                    setEmailVal(values.email)
                                                } else {
                                                    Swal.fire({
                                                        position: 'center',
                                                        icon: 'error',
                                                        title: 'Email not found',
                                                        showConfirmButton: false,
                                                        timer: 1500
                                                    })
                                                    values.email = ''
                                                }
                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            });
                                        setSubmitting(false);
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
                                        <form onSubmit={handleSubmit}
                                              className={css.formDiv}>
                                            <input
                                                placeholder={"Email"}
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <span
                                                className={css.err}>{errors.email && touched.email && errors.email}</span>
                                            <button className={css.btnDiv} type="submit" disabled={isSubmitting}>
                                                {t("Send")}
                                            </button>
                                        </form>
                                    )}
                                </Formik>
                            </div>

                            <div className={css.divImg}>
                                <img src={chefWoman} alt=""/>
                                <div className={css.blur}/>
                                {/*////////////////////////////////////////////////////*/}
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Formik
                                            initialValues={{text: ''}}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.text) {
                                                    errors.text = 'Required';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                setTimeout(() => {
                                                    axios.post(`${keys.baseURI}/users/checkCode`, {
                                                        code: values.text,
                                                        email: emailVal
                                                    })
                                                        .then(function (response) {
                                                            if (response.data.answer == true) {
                                                                setShow(false)
                                                                setShow2(true)
                                                            }
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        });
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
                                                  /* and other goodies */
                                              }) => (
                                                <form onSubmit={handleSubmit} className={css.forgetOne}>
                                                    <input
                                                        type="text"
                                                        name="text"
                                                        placeholder='Password'
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                    />
                                                    {errors.password && touched.password && errors.password}
                                                    <button type="submit" disabled={isSubmitting}>
                                                        Submit
                                                    </button>
                                                </form>
                                            )}
                                        </Formik>
                                    </Modal.Body>
                                </Modal>
                                {/*////////////////////////////////////////////////////*/}
                                <Modal show={show2} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Formik
                                            initialValues={{password: '', password1: ''}}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.password && !values.password1) {
                                                    errors.password = 'Required';
                                                } else if(values.password !== values.password1) {
                                                    errors.password = 'Password not much';
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                setTimeout(() => {
                                                    axios.post(`${keys.baseURI}/users/newPassword`, {
                                                        password: values.password,
                                                        email: emailVal
                                                    })
                                                        .then(function (response) {
                                                            if (response.data.answer == true) {
                                                                navigate('/log_in')
                                                            }
                                                        })
                                                        .catch(function (error) {
                                                            console.log(error);
                                                        });
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
                                                  /* and other goodies */
                                              }) => (
                                                <form onSubmit={handleSubmit} className={css.forgetTwo}>
                                                    <input
                                                        placeholder={"Password"}
                                                        type="password"
                                                        name="password1"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password1}
                                                    />
                                                    <input
                                                        placeholder={"Return Password"}
                                                        type="password"
                                                        name="password"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.password}
                                                    />
                                                    {errors.password && touched.password && errors.password}
                                                    <button type="submit" disabled={isSubmitting}>
                                                        Submit
                                                    </button>
                                                </form>
                                            )}
                                        </Formik>
                                    </Modal.Body>
                                </Modal>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgetPassword;