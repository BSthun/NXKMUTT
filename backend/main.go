package main

import (
	"nxkmutt-backend/loaders/database"
	"nxkmutt-backend/loaders/fiber"
)

func main() {
	database.Init()
	fiber.Init()
}
