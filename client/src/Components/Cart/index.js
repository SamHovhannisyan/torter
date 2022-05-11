import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import css from './cart.module.css';
import visaSvg from '../../Images/visa.svg';
import maserCart from '../../Images/masterCart.svg';
import idramSvg from '../../Images/idram.svg';
import { Formik } from 'formik';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {deleveryDataGet, deleveryFooter, deleveryGet, deleveryGetValue} from "../../Store/actions/productActions";

const Cart = ({basketData}) => {

    const {t} = useTranslation();

    const deleveryValueData = useSelector(state => state.productReducer.deleveryValue);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch((deleveryDataGet()))
    }, []);

    let tot = basketData?.map(i => i.total)

    const [total, setTotal] = useState(Number(tot))

    const [isDisabled, setIsDisabled] = useState(true);

    const handleClick = () => {
        setIsDisabled(!isDisabled)
    };

    return (
        <div className={css.main}>
            <Container>
                <Row>
                        <div className={css.divTwo}>
                            <h2>{t("Getintouch")}</h2>
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validate={values => {
                                    const errors = {};
                                    if (!values.email) {
                                        errors.email = `${t("Requerid")}!`;
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
                                    <form onSubmit={handleSubmit} className='formFlex'>
                                            <div >
                                                <div className={css.nameInp}>
                                                    <div>
                                                        <label htmlFor="firstName">{t("FirstName")}</label>
                                                        <input
                                                            type="email"
                                                            name="firstName"
                                                            id="firstName"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="lastName">{t("LastName")}</label>
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            id="lastName"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="phone">{t("Phone")}</label><br/>
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        id="phone"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="email">{t("Email")}</label><br/>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="address">{t("Streetaddress")}</label><br/>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        id="address"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="Subject">{t("Subject")}</label><br/>
                                                    <input
                                                        type="text"
                                                        name="Subject"
                                                        id="Subject"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="Apartment">{t("Apartmentsuiteunit")}</label><br/>
                                                    <input
                                                        type="text"
                                                        name="Apartment"
                                                        id="Apartment"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.email}
                                                    />
                                                </div>
                                                <div className={css.divInp}>
                                                    <label htmlFor="State">{t("State")}</label> <br/>
                                                    <select name="State" id="State">
                                                        {
                                                            deleveryValueData?.map((item) => {
                                                                return (
                                                                    <option value="volvo">
                                                                        <span>{item.loacation}-{item.price}</span>
                                                                    </option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                            </div>
                                            {/*///////////////////////////////////////*/}
                                            <div>
                                                <div className={css.ship}>
                                                    <label className={css.checkbox}>
                                                        <input
                                                            type="checkbox"
                                                            name="Apartment"
                                                            id="check1"
                                                            onChange={handleClick}
                                                            onBlur={handleBlur}
                                                        />
                                                        <span>{t("ShipToADifferentAddress")}</span>
                                                    </label>
                                                </div>
                                                {/*.............................................,,,,,,,,,,,,,,,,*/}
                                                <div className={`${isDisabled ? css.opac : null}`}>
                                                    <div className={css.nameInp}>
                                                        <div>
                                                            <label htmlFor="firstName">{t("FirstName")}</label><br/>
                                                            <input
                                                                type="text"
                                                                name="firstName"
                                                                id="firstName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                disabled={isDisabled}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="lastName">{t("LastName")}</label><br/>
                                                            <input
                                                                type="text"
                                                                name="lastName"
                                                                id="lastName"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                value={values.email}
                                                                disabled={isDisabled}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={css.divInp}>
                                                        <label htmlFor="address">{t("Streetaddress")}</label><br/>
                                                        <input
                                                            type="text"
                                                            name="address"
                                                            id="address"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            disabled={isDisabled}
                                                        />
                                                    </div>
                                                    <div className={css.divInp}>
                                                        <label htmlFor="Apartment">{t("Apartmentsuiteunit")}</label><br/>
                                                        <input
                                                            type="text"
                                                            name="Apartment"
                                                            id="Apartment"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            disabled={isDisabled}
                                                        />
                                                    </div>
                                                    <div className={css.divInp}>
                                                        <label htmlFor="State">{t("State")}</label> <br/>
                                                        <select name="State" id="State" disabled={isDisabled}>
                                                            {
                                                                deleveryValueData?.map((item) => {
                                                                    return (
                                                                        <option value="volvo">
                                                                            <span>{item.loacation}-{item.price}</span>
                                                                        </option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                    <div className={css.divInpTexterea}>
                                                        <label htmlFor="Notes">{t("Notes")}</label><br/>
                                                        <input
                                                            type="text"
                                                            name="Notes"
                                                            id="Notes"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.email}
                                                            disabled={isDisabled}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        {errors.password && touched.password && errors.password}
                                        <div className={css.byDiv}>
                                            {
                                                basketData?.map((item) => {
                                                    return (
                                                        <div>
                                                            <h2>Your order</h2>
                                                            <h5>Product</h5>
                                                            <div className={css.byDIvBorder}>
                                                                <div>
                                                                    <p>{item.productName}</p>
                                                                    <h6>{item.count}</h6>
                                                                    <h6>{item.total} AMD</h6>
                                                                </div>
                                                            </div>
                                                            <h3>{t("TOTAL")} {total} AMD</h3>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div className={css.payment}>
                                                <h5>{t("Paymenttype")}</h5>
                                                <div>
                                                    <input type="radio" id="html" name="fav_language" value="HTML" />
                                                    <label htmlFor="html">{t("Onlinepayment")}</label>
                                                    <input type="radio" id="html2" name="fav_language" value="HTML" />
                                                    <label htmlFor="html2">{t("Cashondelivery")}</label>
                                                </div>
                                                <img src={idramSvg} alt=""/>
                                            </div>
                                        </div>

                                        <div className={css.btnDiv}>
                                            <Button variant="primary"  type="submit">
                                                {t("Send")}
                                            </Button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                        </div>
                </Row>
            </Container>
        </div>
    );
};

export default Cart;