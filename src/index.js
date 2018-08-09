import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import bootstrap from './hooks/bootstrap'
import Routes from './routes'


const rootEl = document.getElementById('index')
const store = configureStore()
bootstrap(store)()

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
          <Routes/>
      </Provider>
    </BrowserRouter>,
    rootEl
  )
}

render()
