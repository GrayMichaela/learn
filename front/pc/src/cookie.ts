
export default {
    setToken(token: string = ''): void {
        window.localStorage.setItem('token', token)
    },
    getToken(): string {
        return window.localStorage.getItem('token')
    },
    setUserInfo(userInfo = {}): void {
        window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    getUserInfo(): object {
        return JSON.parse(window.localStorage.getItem('userInfo') || '{}')
    }
}