import mongoose from 'mongoose'
import config from '../../config/default';
import logger from './logging'

async function connect(){

    try {
        await mongoose.connect(config.MONGO.url, config.MONGO.options)
        logger.info('Cluster Connected!')
    } catch (error) {
        console.error("Couldn't connect to cluster!", error)
        process.exit(1)
    }
}

export default connect;