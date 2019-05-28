export const token = {
    set: function (key, val) {
        localStorage.setItem(key, val);
    },
    get: function (key) {
        return localStorage.getItem(key);
    },
    clear(key) {
        localStorage.removeItem(key);
    }
};
export default token;