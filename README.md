# Deeptrade Frontend

Frontend template is using [Datta Able](https://appseed.us/product/react-node-js-datta-able) template.   
**Datta Able** is an open-source **React Dashboard** that provides a colorful and modern design. Datta Able React Free is the most stylised React Free Admin Template, around all other admin templates in the market. It comes with high feature-rich pages and components with fully developer-centric code. The product comes with a simple JWT authentication flow: login/register/logout.
 
<br />

> Features

- Modern aesthetics UI design - Designed by [CodedThemes](https://codedthemes.com/)
- React, Redux, Redux-persist
- Authentication: JWT Login/Register/Logout
- Full-stack ready using **[Node JS API Server](https://github.com/app-generator/api-server-nodejs)** (open-source project)
  - Features: Typescript / SQLite / TypeORM / Joy (validation) / Passport library - `passport-jwt` strategy.

<br />

> Links

- [React Node JS Datta Able](https://appseed.us/product/react-node-js-datta-able) - product page
- [React Node JS Datta Able](https://react-node-js-datta-able.appseed-srv1.com/) - LIVE Demo
- Support via **Github** (issues tracker) and [Discord](https://appseed.us/support) - LIVE Assistance 

<br />


## How to use it

To use the product Node JS (>= 12.x) is required and GIT to clone/download the project from the public repository.

**Step #1** - Clone the project

```bash
$ git clone https://github.com/app-generator/react-datta-able.git
$ cd react-datta-able
```

<br >

**Step #2** - Install dependencies via NPM or yarn

```bash
$ npm i
// OR
$ yarn
```

<br />

**Step #3** - Start in development mode

```bash
$ npm run start 
// OR
$ yarn start
```

<br />

## Configure the backend server

The product comes with a usable JWT Authentication flow that provides only the basic requests: login/logout/register. 

**API Server URL** - `src/config/constant.js` 

```javascript
const config = {
    ...
    API_SERVER: 'https://develop.deeptrade.ml/api/'  // <-- The magic line
};
```

<br />

**API Server Descriptor** - POSTMAN Collection

The API Server signature is provided by the [Unified API Definition](https://docs.appseed.us/boilerplate-code/api-unified-definition)

- [API POSTMAN Collection](https://github.com/app-generator/api-server-unified/blob/main/api.postman_collection.json) - can be used to mock (simulate) the backend server or code a new one in your preferred framework. 

<br />
