const { PORT, MONGODB_URL } = process.env


const ENV = {
  PORT: PORT ?? 8001,
  DB: {
    URL: MONGODB_URL ?? ''
  }
}

enum Api {
  BASE = '/',
}

export { ENV, Api }