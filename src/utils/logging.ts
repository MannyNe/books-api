import dayjs from 'dayjs' // PINO IS A LOGGER MODULE
import logger from 'pino' // MODULE TO THE DAY

const log = logger({
    transport:{
        target: 'pino-pretty'
    },
    base:{
        pid: false,
    },
    timestamp: () => `, "time accessed": "${dayjs().format()}"`
})

export default log;