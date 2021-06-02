const querys = {
  //User
  GET_USERS: `SELECT * FROM public."Users"`,
  CREATE_USER: `INSERT INTO public."Users" (name, username, password) VALUES ($1, $2, $3) RETURNING *`,
  GET_USERBYID: `SELECT * FROM public."Users" WHERE id = $1`,
  UPDATE_USER: `UPDATE public."Users" SET name = $1, username = $2 WHERE id= $3 RETURNING *`,
  DELETE_USER: `DELETE FROM public."Users" WHERE id = $1`,

  //Product
  GET_PRODUCTS: `SELECT * FROM public."Products"`,
  CREATE_PRODUCT: `INSERT INTO public."Products" (name, rate) VALUES ($1, $2) RETURNING *`,
  GET_PRODUCTBYID:`SELECT * FROM public."Products" WHERE id = $1`,

};

module.exports = querys;