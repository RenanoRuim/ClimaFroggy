function home(req, res) {
  res.json({
    message: "Backend funcionando!"
  })
}

module.exports = {
  home
}