import { Client } from 'postgres'
import type { Middleware } from 'oak'

const url = Deno.env.get('DATABASE_URL')
if (!url) throw new Error('no database url defined')

const psql = new Client(url)
await psql.connect()

export const postgresClient: Middleware = ({ state }, next) => void ((state.psql = psql) && next())
