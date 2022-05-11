import React, {useEffect, useState} from 'react';
import css from './productDelevriData.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {IoMdArrowDropup} from 'react-icons/io';
import arrowUp from '../../../Images/arrowIp.svg';
import arrowDown from '../../../Images/arrowDown.svg';
import {FiShoppingCart} from 'react-icons/fi';
import Swal from "sweetalert2";
import {basketPost, basketPostDelete, wishDelete, wishPost} from "../../../Store/actions/productActions";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

const ProductDelevriData = ({item, langValue}) => {

    const {t} = useTranslation();

    const [count, setCount] = useState(1)

    const [selected, setSelected] = useState(false);

    const [selectedWish, setSelectedWish] = useState(false);

    let itemMainPrice = item.price

    const [price, setPrice] = useState(Number(itemMainPrice))

    const dispatch = useDispatch();

    useEffect(() => {
        if (JSON.parse(localStorage.getItem("basketProduct"))) {
            JSON.parse(localStorage.getItem("basketProduct")).forEach(i => {
                if (i.id === item.id) {
                    setSelected(true)
                }
            });
        }
    }, [])

    const [data, setData] = useState({
        id: item.id,
        productImg: item.image,
        productName: item.nameEn,
        count: count,
        price: price,
        total: price
    })

    const handleClickCount = () => {
        setCount(count + 1)
        setPrice(price + Number(itemMainPrice))
        data["count"] = count
        data["price"] = price
        setData(data)
    }

    const handleClickCountDown = () => {
        setCount(count - 1)
        setPrice(price - Number(itemMainPrice))
        data["count"] = count
        data["price"] = price
        setData(data)
    }

    const handleChange = (e) => {
        data[e.target.name] = e.target.value
        setData(data)
    }

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const Toast2 = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ToastDeleteBasket = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const ToastDeleteWish = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const handleBasket = () => {
        let array = [];
        let local_item = localStorage.getItem("basketProduct");
        array = JSON.parse(local_item) || [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === data.id) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1)
            }
        }
        Toast2.fire({
            icon: 'success',
            title: 'Item Add Basket'
        })
        setSelected(true)
        array.push(data)
        dispatch(basketPost(array))
        localStorage.setItem("basketProduct", JSON.stringify(array))
    }

    let handleBasketDelete = id => {
        let array = [];
        let favorite_items = localStorage.getItem("basketProduct");
        array = JSON.parse(favorite_items) || [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1)
            }
        }
        setSelected(false)
        ToastDeleteBasket.fire({
            icon: 'success',
            title: 'Delete from Basket'
        })
        dispatch(basketPostDelete(id))
        localStorage.setItem("basketProduct", JSON.stringify(array))
    }

    const wishAdd = () => {
        let arrWish = [];
        let local_item = localStorage.getItem("wishList");
        arrWish = JSON.parse(local_item) || [];
        for (let i = 0; i < arrWish.length; i++) {
            if (arrWish[i].id === data.id) {
                let index = arrWish.indexOf(arrWish[i]);
                arrWish.splice(index, 1)
            }
        }
        Toast.fire({
            icon: 'success',
            title: 'Item Add WishList'
        })
        setSelectedWish(true)
        arrWish.push(data)
        dispatch(wishPost(arrWish))
        localStorage.setItem("wishList", JSON.stringify(arrWish))
    }

    let wishDeleteButton = id => {
        let array = [];
        let favorite_items = localStorage.getItem("wishList");
        array = JSON.parse(favorite_items) || [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1)
            }
        }
        setSelectedWish(false)
        ToastDeleteWish.fire({
            icon: 'success',
            title: 'Delete from Wish'
        })
        dispatch(wishDelete(id))
        localStorage.setItem("wishList", JSON.stringify(array))
    }

    let cakes_Count = item?.cake_count.split(",").map((i) => i);
    let cakes_Price = item?.cake_price.split(',').map((i) => i);
    let cake_addition_name = item?.cake_addition_name_en.split(",").map((i) => i);
    let cake_additionPrice = item?.cake_addition_price.split(',').map((i) => i);


    const handleIngredients = (e) => {
        data['Ingredients'] = e.target.name
        setData(data)
    }


    return (
        <div className={css.mainDesc} key={item.id}>
            <h1>{item.nameEn}</h1>
            <h2>{t("Price")} {price}</h2>
            <p>
                {langValue == "en" ? item.descriptionEn
                    : langValue == "ru" ? item.descriptionRu
                        : langValue == "am" ? item.descriptionHy : null}
            </p>
            <div className={css.dataDetail}>
                {cakes_Count[0] !== '' ? <select onChange={handleChange} className={css.selectDetail} name="countPeople" id="cars">
                    {
                        cakes_Count?.map((item, index) => {
                            return (
                                <option value={item}>{item}prs/{cakes_Price[index]}</option>
                            )
                        })
                    }
                </select> : null}
            </div>

                {
                    cakes_Count[0] !== '' ? <> <h3>{t("Ingredients")}</h3>
                        <div className={css.divCheckFlex}>
                            <div className={css.checkDiv}>
                                {
                                    cake_addition_name?.map((item, index) => {
                                        return (
                                            <label className={css.checkbox} key={index}>
                                                <input name={item} onChange={handleIngredients} type="checkbox"/>
                                                <span>{item}</span>
                                            </label>
                                        )
                                    })
                                }
                            </div>
                            <div className={css.checkDiv}>
                                {
                                    cake_additionPrice?.map((item, index) => {
                                        return (
                                            <label className={css.checkbox} key={index}>
                                                <span>{item} AMD</span>
                                            </label>
                                        )
                                    })
                                }

                            </div>
                        </div> </> : null
                }


            <div className={css.addToCartBtns}>
                {
                    cakes_Count[0] !== '' ? null : <span>
                    {count}
                        <div>
                                <img onClick={handleClickCount} src={arrowUp} alt=""/>
                            {
                                count <= 1 ? <img src={arrowDown} alt=""/> :
                                    <img onClick={handleClickCountDown} src={arrowDown} alt=""/>
                            }
                    </div>
                </span>
                }
                {
                    selected ? <button onClick={() => handleBasketDelete(item.id)}>{t("DeletetoCart")}</button> :
                        <button onClick={handleBasket}>{t("AddtoCart")}</button>
                }
                <i className={css.basket}><FiShoppingCart/></i>
                {
                    selectedWish ? <button onClick={() => wishDeleteButton(item.id)}>{t("DeletetoWish")}</button> :
                        <div className={css.heart} onClick={wishAdd}><AiOutlineHeart/></div>
                }
            </div>
        </div>
    );
};

export default ProductDelevriData;