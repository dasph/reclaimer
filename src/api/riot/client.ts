import type { Servers } from '~/api/riot/constants.ts'
import type { Queries } from '~/api/riot/queries/types.ts'
import { regionMap } from '~/api/riot/helpers.ts'

export type RiotClient <T> = (query: Query) => Promise<T>

export type Query = {
  url: string
  type: Queries
  regional?: boolean
}

const riot = Deno.env.get('RIOT_KEY')
if (!riot) throw new Error('no riot token defined')

const headers = { 'X-Riot-Token': riot }

export const riotClient = <T> (server: Servers): RiotClient<T> => async ({ url, regional }) => {
  const request = await fetch(`https://${regional ? regionMap[server] : server}.api.riotgames.com${url}`, { headers })

  return request.json()
}
