SELECT content.story, content.id
FROM content
JOIN users ON content.users_id = users.id
WHERE delete_from_dash = false AND complete = true AND users_id = $1
ORDER BY content.id DESC
