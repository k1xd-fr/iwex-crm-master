export const middlewareFunc = (err, res) => {
  if (err) {
    console.log('asdsdas')
  } else {
    res.json(res)
  }
}
