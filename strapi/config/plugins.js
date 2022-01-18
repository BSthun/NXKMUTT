module.exports = ({ env }) => ({
	email: {
		config: {
			provider: "strapi-provider-email-smtp",
			providerOptions: {
				host: "mail.bsthun.com",
				port: 587,
				secure: false,
				username: "nxkmutt@mail.bsthun.com",
				password: "nxkmutt01",
				rejectUnauthorized: true,
				requireTLS: true,
				connectionTimeout: 1,
			},
			settings: {
				defaultFrom: "nxkmutt@mail.bsthun.com",
				defaultReplyTo: "nxkmutt@mail.bsthun.com",
				testAddress: "psn@bsthun.com",
			},
		},
	},
});
