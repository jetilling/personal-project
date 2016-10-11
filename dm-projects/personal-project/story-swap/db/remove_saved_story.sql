UPDATE users SET saved_stories = array_remove(saved_stories, $1) WHERE id = $2;
