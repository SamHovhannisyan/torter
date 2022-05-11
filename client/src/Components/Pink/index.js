import React, {useState} from 'react';
import css from './pink.module.css'
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {contactPost, subscriberPost} from "../../Store/actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import {productReducer} from "../../Store/reducers/productReducer";
import { Formik } from 'formik';
import Swal from 'sweetalert2'
import axios from "axios";
import keys from "../../keys";
import {SUBSCRIBE_POST} from "../../Store/types";
import {useTranslation} from "react-i18next";

const Pink = () => {

    const dispatch = useDispatch();

    const {t} = useTranslation();

    return (
        <div className={css.pink}>
            <Container>
                <Row>
                    <Col lg={5} md={6} xs={12}>
                        <div className={css.bhText}>
                            <p>Lorem ipsum dolor sit amet, consectetur </p>
                        </div>
                    </Col>
                    <Col lg={7} md={6} xs={12}>
                        <Formik
                            initialValues={{ email: ''}}
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
                                    errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    axios.post(`${keys.baseURI}/subscribers`, values)
                                        .then(function (response) {
                                            dispatch({type: SUBSCRIBE_POST, payload: response.data.email !== null ? true : false})
                                        })
                                        .catch(function (error) {
                                            console.log(error);
                                        });
                                    values.email = ''
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Success',
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
                                <form onSubmit={handleSubmit}>
                                    <div className={css.bhInput}>
                                        <div className={css.inp}>
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder={t("Email")}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </div>
                                        <div className={css.bhBtn}>
                                            <button type="submit" disabled={isSubmitting}>
                                                Subscribe
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pink;