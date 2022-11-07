let users = [] //para efeito de exemplo

const getUserByEmail = (searchEmail) =>
  users.find((obj) => obj.email === searchEmail)

export const signup = (data) => {
  if (getUserByEmail(data.email)) {
    console.log("ok")
  } else {
    users.push(data)
  }
  return true
}