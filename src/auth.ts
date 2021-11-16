export const isAuthenticated = () => {
  return localStorage.getItem('@App/JWT') ? true : false;
};
