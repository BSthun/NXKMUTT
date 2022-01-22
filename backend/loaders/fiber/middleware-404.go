package fiber

import (
	"Project/types"
	"github.com/gofiber/fiber/v2"
)

var notFoundMiddleware = func() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).JSON(&types.RespError{
			Success: false,
			Error:   "NOT_FOUND",
		})
	}
}()
