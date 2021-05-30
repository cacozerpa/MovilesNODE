const querys = {
    GET_USERS: `SELECT * FROM public.Users`,
  GET_USER_BY_USERNAME: `SELECT * FROM public.Users WHERE username = $1`,
  SIGN_UP_USER: `INSERT INTO public.Users (username, name, password) VALUES ($1, $2, $3) RETURNING *`,
  UPDATE_USER: `UPDATE public.Users SET username = $1, name = $2 RETURNING *`,
  DELETE_USER: `DELETE FROM public.Users WHERE id = $1`,
};

module.exports = querys;