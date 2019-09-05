// centralize configurations so that if changed, only change once here rather than every file that uses it

module.exports = {
  googleApiKey: process.env.GOOGLE_API_KEY || "fake google api key",
  environment: process.env.NODE_ENV || "development"
};
