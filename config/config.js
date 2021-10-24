const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IlRoYW5nVHJhbiIsImV4cCI6MTY0MzAzNzY3MywiaWF0IjoxNjM1MDg4ODczfQ.alcsCGMvOT9vMQ--opIeHbbUSmyfOJgD7IcyA-_4Ymg",
  mongoUri: process.env.MONGODB_URI ||
    "mongodb+srv://thangtran:thangtran@illuminate-mernproject.x55vx.mongodb.net/illuminate-mernproject?retryWrites=true&w=majority"
      || process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/illuminate-mernproject'
}

export default config
