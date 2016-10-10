INSERT INTO  users (email, password, display_name, last_login, creation_date) VALUES ($1, crypt($2, gen_salt('bf')), $3, current_date, current_date);
-- SELECT * FROM users WHERE email = $1;
