UPDATE users SET follows = array_remove(follows, $1) WHERE id = $2;
