import React from 'react'
import ReactDOM from 'react-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client'
import './index.css'
import App from './App'

let showEnvError = false;
if (!process.env.REACT_APP_GRAPHQL_URI) {
  showEnvError = true;
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache(),
})

const EnvError = () =>{
  return (<p>Please make sure you have .env file with the key REACT_APP_GRAPHQL_URI and the value of URI to graphQL gateway</p>)
}

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      {!showEnvError ? <App /> : <EnvError />}
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)
