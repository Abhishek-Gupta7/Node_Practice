// const winston = require('winston');

// const logger = winston.createLogger({
//   level: 'error',
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     new winston.transports.File({ filename: 'error.log', 
// })
// //     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// // 
// // if (process.env.NODE_ENV !== 'production') {
// //   logger.add(new winston.transports.Console({
// //     format: winston.format.simple(),
// //   }));
// // }
// logger.error('error in the');
// logger.add(new winston.transports.File({
//   filename:'error1.log',
//   level:'error'
// }))
// module.exports = logger;


const winston = require("winston");
const {format , transports , createLogger} = winston;
const {combine , label , prettyPrint , json} = format;
const CATEGORY = "winston custom format";

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  transports: [
    new winston.transports.File({
      filename:'logs/error.log',
      level:'error',
      format:combine(label({label:CATEGORY}),json(),prettyPrint())
    }),
    new winston.transports.Console({format:combine(label({label:CATEGORY}),json(),prettyPrint())}),
  ],
});

// logger.error('Log Error') 
module.exports = logger;