module.exports = {
    webpack: (config, options, webpack) => {
        config.entry.main = [
            './src/server.js'
        ]
        
        return config
    }   
}   