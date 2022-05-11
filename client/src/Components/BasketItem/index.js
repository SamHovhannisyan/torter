import React, {useEffect, useState} from 'react';
import css from './basketItem.module.css';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {basketPost, basketPostDelete} from "../../Store/actions/productActions";
import {useTranslation} from "react-i18next";
import arrowUp from "../../Images/arrowIp.svg";
import arrowDown from "../../Images/arrowDown.svg";

const BasketItem = ({itemData, langValue}) => {

    const {t} = useTranslation();

    const [count, setCount] = useState(itemData.count)

    const dispatch = useDispatch();

    const [price, setPrice] = useState(Number(itemData.price))

    const handleClickCount = () => {
        setCount(count + 1)
        itemData.count = count + 1
        setPrice(price + itemData.price)
        itemData.total = price + itemData.price
    }

    const handleClickCountDown = () => {
        setCount(count - 1)
        itemData.count = count - 1
        setPrice(price - itemData.price)
        itemData.total = price - itemData.price
    }

    const deleteItem = (id) => {
        let array = [];
        let favorite_items = localStorage.getItem("basketProduct");
        array = JSON.parse(favorite_items) || [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === id) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1)
            }
        }
        localStorage.setItem("basketProduct", JSON.stringify(array))
        dispatch(basketPostDelete(id))
    }

    useEffect(() => {
        let array = [];
        let local_item = localStorage.getItem("basketProduct");
        array = JSON.parse(local_item) || [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].id === itemData.id) {
                let index = array.indexOf(array[i]);
                array.splice(index, 1)
            }
        }
        array.push(itemData)
        dispatch(basketPost(array))
        localStorage.setItem("basketProduct", JSON.stringify(array))
    },[count])

    return (
        <tr key={itemData.id} className={css.tr}>
            <>
                <td className={css.tdR}>
                    <img className={css.thImg}
                         src={itemData.productImg} alt=""/>
                </td>
                <td key={itemData.id} className={css.tdR}>
                    <h5>
                        {langValue == "en" ? itemData.productName
                            : langValue == "ru" ? itemData.productName
                                : langValue == "am" ? itemData.productName : null}
                    </h5>
                </td>
                <td key={itemData.id} className={css.tdR}><h6>{itemData.price} AMD</h6></td>
                <td key={itemData.id} className={css.tdR}><span className={css.countData}>
                    {count}
                    <div>
                                <img onClick={handleClickCount} src={arrowUp} alt=""/>
                        {
                            count <= 1 ? <img src={arrowDown} alt=""/> :
                                <img onClick={handleClickCountDown} src={arrowDown} alt=""/>
                        }
                    </div>
                </span></td>
                <td key={itemData.id} className={css.tdR}>
                    <div className={css.icons}>
                        <div className={css.iconsFlex}>
                            {itemData.total} AMD
                        </div>
                    </div>
                </td>
                <td key={itemData.id}>
                    <div className={css.icons}>
                        <div className={css.iconsFlex}>
                            <span>
                                <AiOutlineCloseCircle onClick={() => deleteItem(itemData.id)}/>
                            </span>
                        </div>
                    </div>
                </td>

            </>

        </tr>
    );
};

export default BasketItem;