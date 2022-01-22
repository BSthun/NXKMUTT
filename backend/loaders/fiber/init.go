package fiber

import (
	"Project/endpoints"
	"github.com/gofiber/fiber/v2"
	"time"
)

var App *fiber.App

func Init() {
	// Initialize fiber instance
	App = fiber.New(fiber.Config{
		Prefork:       false,
		StrictRouting: true,
		ReadTimeout:   30 * time.Second,
		WriteTimeout:  30 * time.Second,
		BodyLimit:     512 * 1024 * 1024,
		ErrorHandler:  defaultErrorHandler,
	})
	// Import middlewares
	App.Use(corsMiddleware)
	//App.Use(recoverMiddleware)

	endpoints.Init(App)

	App.Use(notFoundMiddleware)

	err := App.Listen(":8080")
	if err != nil {
		return
	}
}
