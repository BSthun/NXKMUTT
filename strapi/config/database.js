module.exports = ({ env }) => ({
	connection: {
		client: "postgres",
		connection: {
			host: env("DATABASE_HOST", "10.5.141.2"),
			port: env.int("DATABASE_PORT", 5432),
			database: env("DATABASE_NAME", "nxkmutt-strapi"),
			user: env("DATABASE_USERNAME", "nxkmutt"),
			password: env("DATABASE_PASSWORD", "nx%2021"),
			ssl: env.bool("DATABASE_SSL", false),
		},
	},
});
