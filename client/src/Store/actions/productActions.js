import {
    ABOUT_BANNER_DATA__GET,
    ABOUT_FOOTER_GET,
    ABOUT_GET,
    ABOUT_HOME_GET, BASKET_BANNER_DATA__GET,
    BASKET_POST,
    BASKET_POST_DELETE,
    CATEGORY_GET,
    CHOOSE_GET,
    CONTACT_POST, CONTACTS_GET, DELEVERY_DATA__GET, DELEVERY_FOOTER_GET,
    DELEVERY_GET,
    DELEVERY_GET_VALUE, DETAIL_FOOTER_GET,
    FILTER_PRODUCT, HOME_BANNER_DATA__GET, HOME_FOOTER_GET, LANG_GET,
    LOGIN_POST, PRODUCT_BANNER_DATA__GET, PRODUCT_DETAIL_BANNER_DATA__GET,
    PRODUCT_DETAIL_GET, PRODUCT_FOOTER_GET,
    PRODUCT_GET, PROFILE__GET,
    STATUS_CODE,
    SUBSCRIBE_POST, TERMS_GET, WISH_BANNER_DATA__GET,
    WISH_DELETE,
    WISH_POST
} from "../types";
import axios from "axios";
import keys from "../../keys";
import {type} from "@testing-library/user-event/dist/type";


export const productGet = (id, minValue, maxValue, page, limit, search, lang) => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/products`,
            {
                params:
                    {
                        category: id,
                        min_price: minValue,
                        max_price: maxValue,
                        offset: page,
                        limit: limit,
                        search: search,
                        lang: lang
                    }
            })
            .then(function (response) {
                // handle success
                dispatch({type: PRODUCT_GET, payload: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
}

export const productDetailGetId = (id) => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/products/single`, {params: {id: id}})
            .then(function (response) {
                // handle success
                dispatch({type: PRODUCT_DETAIL_GET, payload: response.data})
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }
}

export const basketPost = (arr) => {
    return (dispatch) => {
        dispatch({type: BASKET_POST, payload: arr})
    }
}

export const basketPostDelete = (id) => {
    return (dispatch) => {
        dispatch({type: BASKET_POST_DELETE, payload: id})
    }
}

export const wishPost = (arr) => {
    return (dispatch) => {
        dispatch({type: WISH_POST, payload: arr})
    }
}

export const wishDelete = (id) => {
    return (dispatch) => {
        dispatch({type: WISH_DELETE, payload: id})
    }
}

export const signUpPost = (dataSignUp) => {
    return (dispatch) => {
        axios.post(`${keys.baseURI}/users/create`, dataSignUp)
            .then(function (response) {
                dispatch({type: STATUS_CODE, payload: response.status})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const loginPost = (loginData) => {
    return (dispatch) => {
        axios.post(`${keys.baseURI}/users/login`, loginData)
            .then(function (response) {
                dispatch({type: LOGIN_POST, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}


export const categoryGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/category`)
            .then(function (response) {
                dispatch({type: CATEGORY_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const contactPost = (contactData) => {
    return (dispatch) => {
        axios.post(`${keys.baseURI}/contactUs`, contactData)
            .then(function (response) {
                dispatch({type: CONTACT_POST, payload: response.data.message ? true : false})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const subscriberPost = (values) => {
    return (dispatch) => {
        axios.post(`${keys.baseURI}/subscribers`, values)
            .then(function (response) {
                dispatch({type: SUBSCRIBE_POST, payload: response.data.email !== null ? true : false})
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export const filterProduct = (search) => {
    return (dispatch) => {
        dispatch({type: FILTER_PRODUCT, payload: search})
    }
}

export const aboutHomeGetData = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/aboutUsInfo`)
            .then(function (response) {
                dispatch({type: ABOUT_HOME_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const aboutUsGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/aboutUs`)
            .then(function (response) {
                dispatch({type: ABOUT_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const chooseGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/choose`)
            .then(function (response) {
                dispatch({type: CHOOSE_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}


export const deleveryGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/delevery`)
            .then(function (response) {
                dispatch({type: DELEVERY_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const deleveryGetValue = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/deleveryValue`)
            .then(function (response) {
                dispatch({type: DELEVERY_GET_VALUE, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const termsGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/termData`)
            .then(function (response) {
                dispatch({type: TERMS_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const aboutFooter = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/aboutFooter`)
            .then(function (response) {
                dispatch({type: ABOUT_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const homeFooter = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/homeFooter`)
            .then(function (response) {
                dispatch({type: HOME_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const productFooter = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/productFooter`)
            .then(function (response) {
                dispatch({type: PRODUCT_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const deleveryFooter = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/delevery`)
            .then(function (response) {
                dispatch({type: DELEVERY_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const detailFooter = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/detailFooter`)
            .then(function (response) {
                dispatch({type: DETAIL_FOOTER_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const langGet = (value) => {
    return (dispatch) => {
        dispatch({type: LANG_GET, payload: value})
    }
}

export const deleveryDataGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/deleveryData`)
            .then(function (response) {
                dispatch({type: DELEVERY_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const homeBannerGet = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/homeBanner`)
            .then(function (response) {
                dispatch({type: HOME_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const aboutBannerUs = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/aboutUsBanner`)
            .then(function (response) {
                dispatch({type: ABOUT_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const productBanner = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/productBanner`)
            .then(function (response) {
                dispatch({type: PRODUCT_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const wishBanner = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/wishBanner`)
            .then(function (response) {
                dispatch({type: WISH_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const basketBannerData = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/basketBanner`)
            .then(function (response) {
                dispatch({type: BASKET_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const detailBannerData = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/detailBanner`)
            .then(function (response) {
                dispatch({type: PRODUCT_DETAIL_BANNER_DATA__GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const contactsData = () => {
    return (dispatch) => {
        axios.get(`${keys.baseURI}/contacts`)
            .then(function (response) {
                dispatch({type: CONTACTS_GET, payload: response.data})
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export const profileGet = (val) => {
    return (dispatch) => {
        dispatch({type: PROFILE__GET, payload: val})
    }
}