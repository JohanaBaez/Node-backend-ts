export default {
    appPort: process.env.APP_PORT || 3000,
    secret: process.env.SECRET || 'secret',
    db: {
        // si la conexion es segura faltaria agregar una contraseña
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'testdev',
        username: process.env.DB_USER || 'dsalinas',
        password: process.env.DB_PASS || 'NgpE77KF3o46SOVc'
    }
};