package fiber

import (
	"github.com/gofiber/fiber/v2"

	"nxkmutt-backend/types"
)

var notFoundMiddleware = func() fiber.Handler {
	return func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).JSON(&types.RespError{
			Success: false,
			Error:   "NOT_FOUND",
		})
	}
}()
