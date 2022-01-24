package fiber

import (
	"strings"

	"github.com/gofiber/fiber/v2"

	"nxkmutt-backend/types"
)

func defaultErrorHandler(ctx *fiber.Ctx, err error) error {

	// Case of *fiber.Error.
	if e, ok := err.(*fiber.Error); ok {
		return ctx.Status(e.Code).JSON(types.RespError{
			Success: false,
			Error:   strings.ReplaceAll(strings.ToUpper(e.Message), " ", "_"),
		})
	}

	// Case of *types.PassError, the generic pass-trough error type.
	if e, ok := err.(*types.PassError); ok {
		return ctx.Status(fiber.StatusBadRequest).JSON(types.RespError{
			Success: false,
			Error:   e.Message,
			Params:  e.Params,
		})
	}

	return ctx.Status(fiber.StatusInternalServerError).JSON(
		types.RespError{
			Success: false,
			Error:   "UNKNOWN_SERVER_SIDE_ERROR",
			Params:  []string{err.Error()},
		},
	)
}
