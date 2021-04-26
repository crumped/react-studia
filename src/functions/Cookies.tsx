export const SetCookieFunction = (value: string) => localStorage.setItem('username', value);

export const GetCookieFunction = () => localStorage.getItem('username');

export const RemoveCookieFunction = () => localStorage.removeItem('username');
