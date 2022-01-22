package routes

import (
	"Project/types"
	"github.com/gofiber/fiber/v2"
)

func RouteTest(ctx *fiber.Ctx) error {
	return ctx.JSON(types.TestJson{Success: true})
}
