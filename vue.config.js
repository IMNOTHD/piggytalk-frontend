module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    devServer: {
        port: 3000,
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    },
}
