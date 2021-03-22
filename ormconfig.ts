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
        'src/bEntity/*{.ts,.js}',
        'src/bEntity/*.ts',
        'src/bEntity/**/*.ts',
        __dirname + "/bEntity/*.ts"

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
            'src/project/bEntity'
        ],
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
    },

}