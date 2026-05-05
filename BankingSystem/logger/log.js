import { transport } from "winston";
import winston from "winston/lib/winston/config";
const logger = winston.createLogger({
    level:"info",
    format:winston.format.json(),
    defaultMeta:{service: "user-service"},
    transports:[
        new winston.transports.File({filename:"error.log",level:"error"}),
        new winston.transports.File({filename:"combined.log"}),
    ],
});
export default logger