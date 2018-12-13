export default () => {
  let id
  const { dataLayer } = window
  for (const i in dataLayer) {
    if (dataLayer[i][0] === 'config') {
      // eslint-disable-next-line
      id = dataLayer[i][1]
      break
    }
  }
  return id
}
