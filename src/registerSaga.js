import sagaMiddleware from './middlewares/saga'

export default saga => {
  sagaMiddleware.run(saga)
}
