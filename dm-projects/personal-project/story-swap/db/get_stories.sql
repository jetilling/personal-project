SELECT content.story, users.display_name, content.like_count, content.category
FROM content
JOIN users ON content.users_id = users.id
-- WHERE current_date - content.date_posted <= 7
