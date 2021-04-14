const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('server-6-static-files'));

app.get('/', (req, res) => {
    res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/formulario">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
    <input type="submit" value="Send Message" class="button" />
  </form>
  </body>
    </html>
  `)
})

app.post('/formulario', (req, res) => {
  console.log(req.body)
  res.status(200).send(JSON.stringify(req.body));
})

app.use((req, res) => {
    res.status(404).send('Recurso no encontrado...')
  })

app.listen(3000)
  