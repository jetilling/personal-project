SELECT content.id, content.story, content.users_id, users.display_name
FROM users 
JOIN content ON content.users_id = users.id
WHERE content.id = $1
