import React, {useState} from 'react';
import css from './productItem.module.css';
import {AiOutlineHeart} from 'react-icons/ai';
import {Link, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {basketPost, productDetailGetId, wishDelete, wishPost} from "../../../Store/actions/productActions";
import Swal from 'sweetalert2';
import {BsHeartFill} from 'react-icons/bs';
import {useTranslation} from "react-i18next";


const ProductItem = ({item, langValue}) => {

    const [selected, setSelected] = useState(false);

    const {t} = useTranslation();

    const dispatch = useDispatch()

    const addDetailId = (id) => {
        dispatch(productDetailGetId(id))
    }

    const [data, setData] = useState({
        id: item.id,
        productImg: item.productImg,
        productName: item.productName,
    })

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

    const ToastDelete = Swal.mixin({
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
        setSelected(true)
        arrWish.push(data)
        Toast.fire({
            icon: 'success',
            title: 'Add in Wish List'
        })
        dispatch(wishPost(arrWish))
        localStorage.setItem("wishList", JSON.stringify(arrWish))
    }

    const wishDeleteButton = (id) => {
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
        ToastDelete.fire({
            icon: 'success',
            title: 'Delete in Wish List'
        })
        dispatch(wishDelete(id))
        localStorage.setItem("basketProduct", JSON.stringify(array))
    }

    return (
        <div className={css.itemDiv} key={item.id}>
            <div className={css.dropdown}>
                <Link to={"/product/" + item.id} onClick={() => addDetailId(item.id)}>
                    <img src={item.image.split(',')[0]} alt=""/>
                </Link>
                <div className={css.dropdown_content}>
                    {
                        selected ? <i onClick={() => wishDeleteButton(item.id)}><BsHeartFill/></i> :
                            <i onClick={() => wishAdd(item.id)}><AiOutlineHeart/></i>
                    }
                </div>
            </div>
            <h5>{langValue == "en" ? item.nameEn
                : langValue == 'ru' ? item.nameRu
                    : langValue == 'am' ? item.nameHy : null}</h5>
            <h3>{t("Price")} {item.price}</h3>
            <button><Link to={"/product/" + item.id}>{t("Viewmore")}</Link></button>
        </div>
    );
};

export default ProductItem;