module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST'),
            database: env('DATABASE_NAME', 5432),
            user: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
            schema: env('DATABASE_SCHEMA'), // Not required
            ssl: {
                ca: env('DATABASE_CA')
            },
        },
        pool: {
            min: 0,
            max: 500  // increase this number as needed
        },
        debug: false,
    },
});