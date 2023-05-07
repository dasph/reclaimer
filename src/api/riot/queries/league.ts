import type { RiotClient } from '~/api/riot/client.ts'
import { LeagueEntry, Queries } from '~/api/riot/queries/types.ts'

type SummonerLeagueQuery = (client: RiotClient<LeagueEntry[]>) => (payload: string) => Promise<LeagueEntry[]>

export const summonerLeagueQuery: SummonerLeagueQuery = (client) => (payload) => client({
  url: `/lol/league/v4/entries/by-summoner/${payload}`,
  type: Queries.LEAGUE_BY_SUMMONER
})
