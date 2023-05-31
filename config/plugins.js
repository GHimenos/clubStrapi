module.exports = ({ env }) => ({
  email: {
  config: {
    provider: 'sendmail',
    settings: {
      defaultFrom: 'petrushkapapasov@yandex.ru',
      defaultReplyTo: 'petrushkapapasov@yandex.ru',
    },
  },
  },
});