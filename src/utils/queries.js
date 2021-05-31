const querys = {
  GET_USERS: `SELECT * FROM public."Users"`,
  CREATE_USER: `INSERT INTO public."Users" (name, username, password) VALUES ($1, $2, $3) RETURNING *`,
 /* UPDATE_USER: `UPDATE public.Users SET username = $1, name = $2 RETURNING *`,
  DELETE_USER: `DELETE FROM public.Users WHERE id = $1`*/
};

module.exports = querys;