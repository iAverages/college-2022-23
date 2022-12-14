import * as Sentry from "@sentry/nextjs";

Sentry.init({
    dsn: "https://10151740151f4d418ea2c98b8480231d@sentry.danielraybone.com/4",
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });