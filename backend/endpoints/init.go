package endpoints

import (
	"github.com/gofiber/fiber/v2"

	"nxkmutt-backend/endpoints/content/search"
)

func Init(app *fiber.App) {
	content := app.Group("/content")

	content.Post("/search", search.Handler)
}
