const express = require('express')
const App = express();


App.get('/',function(req,res){
    res.send({
        "work" : "Its Works !"
    });
})

App.listen(3000,()=>{console.log('[+] App listening on port 3000')})