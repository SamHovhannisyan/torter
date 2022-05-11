import React from 'react';
import css from "./ProductFilter/productFilter.module.css";

const CheckCategory = ({item, index, langValue, handleChangeCheckBox}) => {

    return (
        <span>
                                <label className={css.checkbox}>
                                    <input key={item.id} id={`custom-checkbox-${index}`}
                                           // defaultChecked={check}
                                           class="checkbox"
                                           onChange={(e) => handleChangeCheckBox(e, index + 1)}
                                           type="checkbox"/>
                                    <span>
                                        {langValue == "en" ? item.nameEn
                                            : langValue == "ru" ? item.nameRu
                                                : langValue == "am" ? item.nameHy : null}
                                    </span>
                                 </label>
                            </span>
    );
};

export default CheckCategory;