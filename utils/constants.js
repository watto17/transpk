
module.exports = {
    FILTER_LIST : (list, key, equalTo) => {
        return list.filter(item => {
            return item[key] === equalTo;
        });
    },
    HASH_SALT : 10,
    SECRET_KEY : 'sadeed',
    EMAIL_PARAMS : {
        FORGET_PASSWORD : {
            TITLE : 'FORGET PASSWORD',
            TEXT : `Please reset your password.`,
            HTML : (url, exp) => {
                let emailLink="http://"+url;
                return `<strong>Please reset your password by click on given link. <a href="`+emailLink+`">link</a></strong>`;
            }
        },
        VERIFY_ACCOUNT : {
            TITLE : 'VERIFY ACCOUNT',
            TEXT : `Please verify your account.`,
            HTML : (url, exp) => {
                let emailLink="http://"+url;
                return `<strong>Please verify your account by click on given link.   <a href="`+emailLink+`">link</a></strong>`;
            }
        },
        INVITE_BY_EMAIL : {
            TITLE : 'INVITATION EMAIL',
            TEXT : `You are invited to this application.`,
            HTML : (url, exp, sender) => {
                let emailLink="http://"+url;
                return `<strong>You are invited to join Sadeed platform by ${sender}.please click on the given link and register. <a href="`+emailLink+`">link</a></strong>
                This link will expire in ${exp} hours`;
            }
        }
    }
}