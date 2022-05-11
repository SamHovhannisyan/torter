import React, {useState} from 'react';
import css from './profile.module.css';
import {useTranslation} from "react-i18next";
import {Container, Row} from "react-bootstrap";
import {Formik} from "formik";

const Profile = () => {

    const {t} = useTranslation();

    const [show, setShow] = useState(false);

    const clickShow = () => {
        setShow(!show)
    };

    return (
        <div>
            <Container>
                <Row>
                    <div className={css.main}>
                        <h1>{t("Myprofile")}</h1>
                        <div>
                            <div className={css.title}>
                                <span onClick={clickShow} className={show == false ? css.active : null}>{t("Mypurchases")}</span>
                                <span onClick={clickShow} className={show == true ? css.active : null}>{t("PersonalInfo")}</span>
                            </div>

                            {
                                !show ? "Product"
                                    :
                                    <div>
                                        <h3>{t("GeneralInfo")}</h3>
                                        <Formik
                                            initialValues={{ email: '', name: '', lastName: '', phone: '' }}
                                            validate={values => {
                                                const errors = {};
                                                if (!values.email) {
                                                    errors.email = `${t("Requerid")}`;
                                                } else if(!values.name) {
                                                    errors.name = `${t("Requerid")}`;
                                                } else if(!values.lastName) {
                                                    errors.lastName = `${t("Requerid")}`;
                                                } else if(!values.phone) {
                                                    errors.phone = `${t("Requerid")}`;
                                                } else if (
                                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                                ) {
                                                    errors.email = `${t("Invalidemailaddress")}`;
                                                }
                                                return errors;
                                            }}
                                            onSubmit={(values, { setSubmitting }) => {
                                                setTimeout(() => {
                                                    alert(JSON.stringify(values, null, 2));
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
                                                <form onSubmit={handleSubmit} className={css.formikMain}>
                                                    <div>
                                                        <label htmlFor="name">{t("Name")}</label>
                                                        <div className={css.inpFlex}>
                                                            <input
                                                                type="text"
                                                                name="name"
                                                                placeholder={t("Name")}
                                                                id="name"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.name}
                                                            />
                                                            <span>{errors.name && touched.name && errors.name}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="LastName">{t("LastName")}</label>
                                                        <div className={css.inpFlex}>
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                placeholder={t("LastName")}
                                                                id="LastName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.lastName}
                                                            />
                                                            <span>{errors.lastName && touched.lastName && errors.lastName}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="email">{t("Email")}</label>
                                                        <div className={css.inpFlex}>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                placeholder={t("Name")}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                            />
                                                            <span>{errors.email && touched.email && errors.email}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="phone">{t("Phone")}</label>
                                                        <div className={css.inpFlex}>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                placeholder={t("Phone")}
                                                                id="phone"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.phone}
                                                            />
                                                            <span>{errors.phone && touched.phone && errors.phone}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="submit" disabled={isSubmitting}>
                                                        {t("Save")}
                                                    </button>
                                                    </div>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                            }

                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;