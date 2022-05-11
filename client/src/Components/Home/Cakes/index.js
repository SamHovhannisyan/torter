import React, {useEffect} from 'react';
import css from './cakes.module.css';
import {useDispatch, useSelector} from "react-redux";
import {productGet} from "../../../Store/actions/productActions";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import {MdArrowBackIosNew} from 'react-icons/md';
import {MdArrowForwardIos} from 'react-icons/md';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const Cakes = ({langValue}) => {

    const productData = useSelector(state => state.productReducer.product)

    const {t} = useTranslation();

    const dispatch = useDispatch();

    const limit = 5;

    useEffect(() => {
        dispatch(productGet("", "", "", "", limit, '', ''))
    }, []);

    const NextArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={css.nextArrow} onClick={onClick}>
                <MdArrowBackIosNew/>
            </div>
        );
    };

    const PrevArrow = (props) => {
        const {onClick} = props;
        return (
            <div className={css.prevArrow} onClick={onClick}>
                <MdArrowForwardIos/>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <PrevArrow/>,
        prevArrow: <NextArrow/>,
        responsive: [
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },

        ]
    };

    return (
        <>
            <div className={css.ourCakes}>
                <h2>- {t("OurCakes")}</h2>
                <p>{t("text")}</p>
            </div>
            <Slider {...settings}>
                {
                    productData?.map((item) => {
                        return (
                            <Col lg={4}>
                                <div className={css.productMain} key={item.id}>
                                    <div className={css.cakesDiv}/>
                                    <div className={css.position}>
                                        <Link to={"/product/" + item.id}>
                                            <img src={item.image} alt=""/>
                                        </Link>
                                        <h3>{langValue == 'en' ? item.nameEn : langValue == 'ru' ? item.nameRu
                                            : langValue == 'am' ? item.nameHy : null}</h3>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
            </Slider>
        </>
    );
};

export default Cakes;