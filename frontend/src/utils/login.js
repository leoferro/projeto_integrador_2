
const cacheLogIn = data => {
    localStorage.setItem('user', JSON.stringify(data))
}

const checkLoggedIn = () => {
    const loggedInUser = localStorage.getItem('user')
    // console.log(`Logged: ${loggedInUser}`)
    if (loggedInUser) {
        return JSON.parse(loggedInUser)
    }

    return undefined
}

const cacheLogOut = () => {
    localStorage.clear();
}

export {cacheLogIn, checkLoggedIn, cacheLogOut}