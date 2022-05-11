import React, {useEffect, useState} from 'react';
import css from './productFilter.module.css';
import {RiFilterLine} from 'react-icons/ri';
import {RiFilterOffLine} from 'react-icons/ri';
import {useDispatch, useSelector} from "react-redux";
import {categoryGet, filterProduct, productGet} from "../../../Store/actions/productActions";
import {useTranslation} from "react-i18next";
import CheckCategory from "../checkCategory";

const ProductFilter = ({
                           maxValue,
                           minValue,
                           categoryId,
                           setCategoryId,
                           search,
                           setMinValue,
                           setSearch,
                           setMaxValue,
                           lang,
                           setLang,
                           langValue
                       }) => {

    const categoryData = useSelector(state => state.productReducer.category)

    const {t} = useTranslation();

    const [btn, setBtn] = useState(false)
    let [check, setCheck] = useState()

    const handleMain = (e) => {
        setMinValue(e.target.value)
    }

    const handleMax = (e) => {
        setMaxValue(e.target.value)
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoryGet())
    }, [])

    const handleChangeCheckBox = (e, index) => {
        let prev = categoryId;
        let itemIndex = prev.indexOf(index);
        if (itemIndex !== -1) {
            prev.splice(itemIndex, 1);
        } else {
            setBtn(true)
            prev.push(index);
        }
        setCategoryId([...prev]);
    }

    const mainBtn = () => {
        dispatch(productGet(categoryId, minValue, maxValue, '', '', search, lang))
        // setBtn(true)
    }

    const unCheck = () => {
        let x = document.getElementsByClassName("checkbox");
        for (let i = 0; i <= x.length; i++) {
            x[i].checked = false;
        }
    }


    const filterNo = () => {
        dispatch(productGet(null, null, null, 0, 6, null, null))
        minValue = ''
        maxValue = ''
        setMaxValue(maxValue)
        minValue = ''
        setMinValue(minValue)
        search = ''
        setSearch(search)
        setBtn(false)
        unCheck()
    }

    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className={css.main}>
            <div className={css.search}>
                <h5>{t("Search")}</h5>
                <input value={search} onChange={changeSearch} type="text" placeholder={t("Search")}/>
                <div/>
            </div>
            <div className={css.filterDiv}>
                <h5>{t("Filter")}</h5>
                {
                    btn ? <span><RiFilterOffLine onClick={filterNo}/></span> : <span><RiFilterLine/></span>
                }
            </div>
            <div className={css.checkDiv}>
                <div>{t("Categories")}</div>
                {
                    categoryData?.map((item, index) => {
                        return (
                            <CheckCategory item={item} index={index} langValue={langValue} setCheck={setCheck}
                                           check={check} handleChangeCheckBox={handleChangeCheckBox}/>
                        )
                    })
                }
            </div>
            <div className={css.priceDiv}>
                <div>{t("Price")}</div>
                <span className={css.priceFlex}>
                    <input value={minValue} onChange={handleMain} type="number"/>
                    <h5>{t("To")}</h5>
                    <input value={maxValue} onChange={handleMax} type="number"/>
                </span>
            </div>
            <div className={css.btnDiv}>
                <button onClick={mainBtn}>{t("Search")}</button>
            </div>
        </div>
    );
};

export default ProductFilter;