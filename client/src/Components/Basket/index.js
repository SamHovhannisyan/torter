import React, {useEffect, useState} from 'react';
import css from './basket.module.css';
import BasketItem from "../BasketItem";
import {useDispatch, useSelector} from "react-redux";
import {basketPost} from "../../Store/actions/productActions";
import {useTranslation} from "react-i18next";
import {Col, Container, Row} from "react-bootstrap";
import {GrBasket} from 'react-icons/gr';
import {Link} from "react-router-dom";
import Cart from "../Cart";

const Basket = ({langValue}) => {

    const {t} = useTranslation();

    const basketData = useSelector(state => state.productReducer.basket);

    const dispatch = useDispatch();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("basketProduct"))) {
            let arr = [];
            JSON.parse(localStorage.getItem("basketProduct")).forEach(i => {
                arr.push(i);
            });
            dispatch(basketPost(arr))
        }
    }, []);


    return (
        <div>
            {
                basketData.length > 0 ? <div className={css.mainTable}>
                    <table>
                        <thead>
                        <tr className={css.tr}>
                            <th className={css.tdR}>{t("IMAGE")}</th>
                            <th className={css.tdR}>{t("NAME")}</th>
                            <th className={css.tdR}>{t("Price")}</th>
                            <th className={css.tdR}>{t("QUANTITY")}</th>
                            <th className={css.tdR}>{t("TOTAL")}</th>
                            <th>{t("ACTION")}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            basketData?.map((item) => {
                                return (
                                    <BasketItem itemData={item} langValue={langValue}/>
                                )
                            })
                        }
                        </tbody>

                    </table>
                </div> : <Container>
                    <Row>
                        <Col className='mt-5 mb-5'>
                            <div className={css.mainBasket}>
                                <h1>{t("Mybasketisempty")} ...</h1>
                                <span><GrBasket/></span>
                                <p>
                                    {t("YouBasket")}
                                </p>

                                <button>
                                    <Link to={'/product'}>
                                        {t("Returntoshop")}
                                    </Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }


            {
                basketData?.length > 0 ? <Cart basketData={basketData}/> : null
            }


        </div>
    );
};

export default Basket;