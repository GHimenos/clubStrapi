module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendmail",
      settings: {
        defaultFrom: "petrushkapapasov3@yandex.ru",
        defaultReplyTo: "petrushkapapasov3@yandex.ru",
      },
    },
  },
});
