INSERT INTO  content (story, users_id, date_posted, delete_from_dash, like_count, complete) VALUES ($1, $2, current_date, 'false', 0, $3);
