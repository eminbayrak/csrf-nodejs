import { createLogger, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}] ${message}`;
    })
  ),
  transports: [
    new transports.Console()
  ]
});

export default logger;