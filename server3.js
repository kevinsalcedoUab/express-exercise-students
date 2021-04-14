const express = require("express");
const path = require("path");

const app = express();

//app.use(express.static('server3-files'));

app.get('/:html', (req, res) => {
    var filename = req.params.html;
    var pathFile = path.join(__dirname, './server3-files/'+filename+'.html')

    if(filename != 'about' && filename != 'nacktschnecke'){
        res.status(404).send('no hay ese archivo');
    }else{
        res.status(200).sendFile(pathFile);
    }
    
});

app.use('/', (req, res) => {
    res.status(404).send('404 not found');
});

app.listen(3000);

