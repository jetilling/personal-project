SELECT content.story, content.id
FROM content
JOIN users ON content.users_id = users.id
WHERE complete = FALSE AND users_id = $1
