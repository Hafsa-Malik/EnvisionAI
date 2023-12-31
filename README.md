# EnvisionAI

EnvisionAI is a React-based application that provides users with a platform to explore the OpenAI API, specifically by experimenting with GPT-3 and GPT-3.5 text completion models. It also integrates AI freeware tools like leonardo.ai and Blockade Labs to reduce development time and costs, resulting in a more efficient, and visually stunning design process.


## Installation

To install and run EnvisionAI locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Hafsa-Malik/EnvisionAI.git` or directly download the zip file.
2. Navigate to the project directory: `cd EnvisionAI`
3. Rename the `.env.example` file to `.env` and add your OpenAI API key.
4. Navigative to the server directory:  `cd server` and install the dependencies: `npm install`
5. Start the server at port 3080: `node index.js`
5. Open a new terminal and navigative to the client directory:  `cd client` and install the dependencies: `npm install`
6. Go to `client/components/FeedbackSection.js` and add your emailjs serviceID, templateID and formID.
7. Start the development server: `npm start`
8. Open your browser and visit `http://localhost:3000` to access EnvisionAI.


## Customization

You can customize the `max_tokens` and `temperature` values in the `server/index.js` file according to your preference. `max_tokens` determines the length of model's response message and `temperature` effects randomness of model, follow these steps:

1. Open the `server/index.js` file in your preferred text editor.
2. Locate the `app.post('/', async (req, res) => { ... })` function.
3. Inside the function, you'll find the code snippet responsible for making the OpenAI API call. Modify the max_tokens and temperature values according to your preference. For example, to change max_tokens to 100 and temperature to 0.5. Increasing max_tokens will also increase the charges.


## Screenshots

![lp](https://github.com/Hafsa-Malik/EnvisionAI/assets/76608263/cdfe23ca-76b6-42dd-b8c8-4da34413b98b)


![hp](https://github.com/Hafsa-Malik/EnvisionAI/assets/76608263/afd436cf-84d2-409a-8726-15ca03e6cd2d)


![cb](https://github.com/Hafsa-Malik/EnvisionAI/assets/76608263/272f0f81-0934-43da-9bad-24b2a297ee55)



## License

This project is licensed under the [MIT License](LICENSE).
