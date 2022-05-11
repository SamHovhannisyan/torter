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
import basket from "../../Components/Basket";
import {basketBanner} from "../actions/productActions";

const initialState = {
    product: [],
    productDetailGetId: [],
    basket: [],
    wish: [],
    statusCode: undefined,
    loginErr: [],
    category: [],
    count: null,
    contact: [],
    subscribe: [],
    productFilter: undefined,
    about_home_get: [],
    about: [],
    choose: [],
    delevery: [],
    deleveryValue: [],
    terms: [],
    about_footer_get: [],
    home_footer_get: [],
    product_footer_get: [],
    delevery_footer_get: [],
    detailFooter: [],
    lang: undefined,
    deleveryDataGet: [],
    homeBanner: [],
    aboutBanner: [],
    productBanner: [],
    wishBanner: [],
    basketBanner: [],
    detailBanner: [],
    profileType: [],
    contactsGet: []
}


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GET:

            return {...state, product: action.payload.products, count: action.payload.count}

        case PRODUCT_DETAIL_GET:

            return {...state, productDetailGetId: [action.payload]}

        case BASKET_POST:

            return {...state, basket: action.payload}

        case BASKET_POST_DELETE:

            const deleteItem = state.basket?.filter((item) => {
                return item.id !== action.payload
            })

            return {...state, basket: deleteItem}

        case WISH_POST:

            return {...state, wish: action.payload}

        case WISH_DELETE:

            const deleteItemWish = state.wish?.filter((item) => {
                return item.id !== action.payload
            })

            return {...state, wish: deleteItemWish}

        case STATUS_CODE:
            return {...state, statusCode: action.payload}

        case LOGIN_POST:

            return {...state, loginErr: action.payload}

        case CATEGORY_GET:

            return {...state, category: action.payload}

        case CONTACT_POST:

            return {...state, contact: action.payload}

        case SUBSCRIBE_POST:

            return {...state, subscribe: action.payload}

        case ABOUT_HOME_GET:

            return {...state, about_home_get: action.payload}

        case ABOUT_GET:

            return {...state, about: action.payload}

        case CHOOSE_GET:

            return {...state, choose: action.payload}

        case DELEVERY_GET:

            return {...state, delevery: action.payload}

        case DELEVERY_GET_VALUE:

            return {...state, deleveryValue: action.payload}

        case TERMS_GET:

            return {...state, terms: action.payload}

        case ABOUT_FOOTER_GET:

            return {...state, about_footer_get: action.payload}

        case HOME_FOOTER_GET:

            return {...state, home_footer_get: action.payload}

        case PRODUCT_FOOTER_GET:

            return {...state, product_footer_get: action.payload}

        case DELEVERY_FOOTER_GET:

            return {...state, delevery_footer_get: action.payload}

        case DETAIL_FOOTER_GET:

            return {...state, detailFooter: action.payload}

        case LANG_GET:

            return {...state, lang: action.payload}

        case DELEVERY_DATA__GET:

            return {...state, deleveryDataGet: action.payload}

        case HOME_BANNER_DATA__GET:

            return {...state, homeBanner: action.payload}

        case ABOUT_BANNER_DATA__GET:

            return {...state, aboutBanner: action.payload}

        case PRODUCT_BANNER_DATA__GET:

            return {...state, productBanner: action.payload}

        case WISH_BANNER_DATA__GET:

            return {...state, wishBanner: action.payload}

        case BASKET_BANNER_DATA__GET:

            return {...state, basketBanner: action.payload}

        case PRODUCT_DETAIL_BANNER_DATA__GET:

            return {...state, detailBanner: action.payload}

        case PROFILE__GET:

            return {...state, profileType: action.payload}

        case CONTACTS_GET:

            return {...state, contactsGet: action.payload}

        default:
            return state;
    }
}