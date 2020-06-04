const connectDB = require('../../server/index')

class ConnectDBService {
    connectDB() {
        connectDB();//you can write db name in the argument or. Default it takes db name from db.config file
    }
}

export default new ConnectDBService();
