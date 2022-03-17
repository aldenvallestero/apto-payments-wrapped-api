# apto-payments-wrapped-api

Apto Payments provides Master Cards and VISA for US Fin-tech companies. This repository is a clean template of mobile api endpoints implementation using Axios.

## Dependencies
1. @types/node 4.17.13
2. @types/express 4.17.13
3. @types/cors 17.0.21
4. cors
5. axios 0.26.1
6. dotenv 16.0.0
7. express 4.17.3
8. ts-node-dev 1.1.8

## Server Architecture
The server is separated into two main folders, **src** which contains TypeScript development scripts and **dist** containing successfully built JavaScript by running `npm run build` from localhost.

## Source Folder Files & Directories
Folder containing TypeScript files that must be compiled into **dist** folder in JavaScript format. This folder is used for the development.

#### index.js
This is the primary file that runs the entire backend to both local and live server.

#### /routes
This contains 3 main routes: **card**, **cardholder**, **fund**

#### /controllers
This contains compilation of business logic using Axios to reach Apto Payment server.

## Creating a card
1. **POST** `/api/v1/card/` - initiate virtual card template.
2. **POST** `/api/v1/cardholder/agreement` - agree to terms and conditions of using the virtual card.
3. **PUT** `/api/v1/cardholder/agreement` - confirms agreement approval.
4. **PUT** `/api/v1/card/` - issue the virtual card.
5. **POST** `/api/v1/card/physical` - request for physical card delivery.

## Links
- Apto Payments: https://aptopayments.com
- My Portfolio: https://aldenvallestero.com