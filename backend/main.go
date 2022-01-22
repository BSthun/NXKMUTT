package main

import (
	"Project/loaders/database"
	"Project/loaders/fiber"
)

func main() {
	//app := fiber.New()
	//
	//app.Get("/", func(ctx *fiber.Ctx) error {
	//	return ctx.JSON(types.TestJson{Success: true})
	//})
	//
	//app.Get("/test", routes.RouteTest)
	//
	//err := app.Listen(":8080")
	//if err != nil {
	//	return
	//}

	database.Init()
	fiber.Init()

}
