module.exports = ({ env }) => ({
	auth: {
		secret: env("ADMIN_JWT_SECRET", "787fa4f79b31e8adfee502bdc346ae3e"),
	},
});
