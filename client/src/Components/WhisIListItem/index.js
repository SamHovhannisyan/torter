import React from 'react';
import css from './whisListItem.module.css';
import {AiOutlineCloseCircle, AiOutlineHeart} from "react-icons/ai";
import {useDispatch} from "react-redux";
import {basketPostDelete, productDetailGetId, wishDelete} from "../../Store/actions/productActions";
import {Link} from "react-router-dom";
import Swal from 'sweetalert2'

const WishListItem = ({itemData}) => {

    const dispatch = useDispatch();

    const deleteItem = (id) => {
        let arrWish = [];
        let wish_list = localStorage.getItem("wishList");
        arrWish = JSON.parse(wish_list) || [];
        for (let i = 0; i < arrWish.length; i++) {
            if (arrWish[i].id === id) {
                let index = arrWish.indexOf(arrWish[i]);
                arrWish.splice(index, 1)
            }
        }
        Swal.fire('Deleted Item')
        localStorage.setItem("wishList", JSON.stringify(arrWish))
        dispatch(wishDelete(id))
    }

    const addDetailId = (id) => {
        dispatch(productDetailGetId(id))
    }

    return (
            <div className={css.itemDiv} key={itemData.id}>
                <div className={css.dropdown}>
                    <Link to={"/product/" + itemData.id} onClick={() => addDetailId(itemData.id)}>
                        <img src={itemData.productImg} alt=""/>
                    </Link>
                    <div className={css.dropdown_content}>
                        <i onClick={() => deleteItem(itemData.id)} className={css.heart}><AiOutlineCloseCircle/></i>
                    </div>
                </div>
                <h5>{itemData.productName}</h5>
                <h3>Price {itemData.price}</h3>
                <button><Link to={"/product/" + itemData.id}>View more</Link></button>
            </div>
    );
};

export default WishListItem;