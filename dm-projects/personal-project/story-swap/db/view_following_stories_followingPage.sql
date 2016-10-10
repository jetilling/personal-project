SELECT users.id, users.display_name, content.story, content.id
FROM users
JOIN content ON content.users_id = users.id
WHERE users.id = $1 AND content.complete = true
ORDER BY content.id DESC
