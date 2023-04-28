import {createPool} from 'mysql2/promise'

export const Pool = createPool ({
    host: 'localhost',
    port: '3307',
    user: 'root',
    passaword: '',
    database: 'aprendices'
})