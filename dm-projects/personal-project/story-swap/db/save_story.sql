UPDATE users SET saved_stories = array_append(saved_stories, $1) WHERE id = $2
