//get Access token from Cookies
export const getAccessToken = (nhostSessionCookieValue?: string) => {
  if (nhostSessionCookieValue) {
    const session = JSON.parse(nhostSessionCookieValue);
    return session.accessToken;
  } else {
    return undefined;
  }
};

export const getUserId = (nhostSessionCookieValue?: string) => {
  if (nhostSessionCookieValue) {
    const session = JSON.parse(nhostSessionCookieValue);
    return session.user.id;
  } else {
    return undefined;
  }
};
