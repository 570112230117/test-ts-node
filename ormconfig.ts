export = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'shopping',
    logging: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    synchronize: true,
    migrationsRun: true,
    entities: [
        'src/entity/*{.ts,.js}',
        'src/entity/*.ts',
        'src/entity/**/*.ts',
        __dirname + "/entity/*.ts"

    ],
    subscribers: [
        'src/subscriber/*{.ts,.js}'
    ],
    migrations: [
        'src/migration/*{.ts,.js}'
    ],
    cli: {
        entitiesDir: [
            'src/entity',
            'src/project/entity'
        ],
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
    },

}