package endpoints

import (
	"Project/endpoints/content/search"
	"github.com/gofiber/fiber/v2"
)

func Init(app *fiber.App) {
	content := app.Group("/content")

	content.Post("/search", search.Handler)
}
