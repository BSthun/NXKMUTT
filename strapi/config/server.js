module.exports = ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 1337),
	admin: {
		auth: {
			secret: env("ADMIN_JWT_SECRET", "eef7b87619f38409c914ddc78825cd8d"),
		},
	},
});
