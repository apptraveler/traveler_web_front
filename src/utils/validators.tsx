function validateEmail(email: string) {
  if (!email) return false
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  return !re.test(email)
}

export { validateEmail }