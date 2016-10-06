UPDATE users SET follows = array_append(follows,$1) WHERE id = $2
