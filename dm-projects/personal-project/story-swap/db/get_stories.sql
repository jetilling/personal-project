SELECT content.story, users.display_name, content.like_count, content.category, content.id, content.users_id
FROM content
JOIN users ON content.users_id = users.id
WHERE complete = TRUE
ORDER BY content.id ASC
