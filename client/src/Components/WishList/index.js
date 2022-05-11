import React, {useEffect} from 'react';
import css from './wishList.module.css';
import {wishPost} from "../../Store/actions/productActions";
import {useDispatch, useSelector} from "react-redux";
import WishListItem from "../WhisIListItem";
import {Col, Container, Row} from "react-bootstrap";
import {GrBasket} from "react-icons/gr";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const WishList = () => {

    const {t} = useTranslation();

    const wishData = useSelector(state => state.productReducer.wish);

    const dispatch = useDispatch();

    useEffect(() => {
        // window.scrollTo(0, 0)
        if (JSON.parse(localStorage.getItem("wishList"))) {
            let arr = [];
            JSON.parse(localStorage.getItem("wishList")).forEach(i => {
                arr.push(i);
            });
            dispatch(wishPost(arr));
        }
    }, []);

    return (

        <div>
            {
                wishData.length > 0 ? <Container>
                    <Row>
                        <Col lg={12} md={4} xs={12} className="mt-5 mb-5">
                            <div className={css.mainFlex}>
                                {
                                    wishData?.map((item) => {
                                        return (
                                            <WishListItem itemData={item} />
                                        )
                                    })
                                }
                            </div>
                        </Col>
                    </Row>
                </Container> : <Container>
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
        </div>

    );
};

export default WishList;