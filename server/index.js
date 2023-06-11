require('dotenv').config({ path: '../.env' });
const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);


const app = express()
app.use(bodyParser.json())
app.use(cors())

const port = 3080;

app.post('/', async(req, res) => {
    const { message, currentModel } = req.body;
    const response = await openai.createCompletion({
        model: `${currentModel}`, // "text-davinci-003"
        prompt: `${message}`,
        max_tokens: 50,
        temperature: 0.7,
      });   
      res.json({
        message: response.data.choices[0].text,
      })

});

app.get('/models', async (req, res) => {
    const response = await openai.listEngines();
    res.json({
        models: response.data.data
    })

});

app.listen(port, () => { 
    console.log(`Server listening at http://localhost:${port}`)
});


