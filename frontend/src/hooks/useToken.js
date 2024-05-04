
const useToken = () => {
  const getToken = () => {
    if (localStorage) {
      let token = localStorage.getItem("eliteEvents");
      if (token) return JSON.parse(token);
    }

    return null;
  };
  const setToken = (token) => {
    localStorage.eliteEvents = JSON.stringify(token);
  };
  const clearToken = () => {
    localStorage.eliteEvents = null
  };

  return { token: getToken(), setToken, clearToken };
};

export default useToken;