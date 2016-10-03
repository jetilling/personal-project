INSERT INTO  users (email, password, display_name, last_login, creation_date) VALUES ($1, $2, $3, current_date, current_date);
