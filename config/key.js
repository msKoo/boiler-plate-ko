if(process.env.NODE_ENV === 'production'){ //production이라면 
    module.exports = require('./prod');
} else {                                    //development라면
    module.exports = require('./dev')
}