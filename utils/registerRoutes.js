'use strict';
module.exports=  (app)=> {
    let modals=require('../modals');
    let {FbMsg,FbComment,InstaComment,Folder}=modals;
    app.use('/api/fbmsgs', require('./apiGenerator')(FbMsg));
    app.use('/api/fbcomments', require('./apiGenerator')(FbComment));
    app.use('/api/instacomments', require('./apiGenerator')(InstaComment));
    app.use('/api/folders', require('./apiGenerator')(Folder));
};