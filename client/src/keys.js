export default {
    // baseURI: 'http://shtapautovacharq.am/api',
    // baseURI: 'http://localhost:5000/api',
    baseURI: 'http://localhost:5000/api/v1',
    FAVORITE_LIST: 'AUTO-FAVORITES',
    ADMIN_AUTH_ID: 'AutoAuth',
    i18nextLng: "i18nextLng"
}

export const makeArray = (length) => {
    return new Array(length).fill(undefined).map((_, index) => index);
};