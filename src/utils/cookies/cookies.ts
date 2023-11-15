export const setCookie = (name: string, value: string, expires:Date, path = '/') => {
  document.cookie = `${name}=${value}; expires=${expires}; path=${path}`;
};

// 쿠키 가져오기
export const getCookie = (name: string) => {
  const cookies: { [key: string]: string } = document.cookie.split('; ').reduce((acc, cookie) => {
    const [key, value] = cookie.split('=');
    acc[key] = value ? value : '';
    return acc;
  }, {} as { [key: string]: string });
	return cookies[name]
};
