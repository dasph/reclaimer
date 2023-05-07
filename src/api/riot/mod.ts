import { riotClient } from '~/api/riot/client.ts'
import { summonerQuery } from '~/api/riot/queries/summoner.ts'
import { summonerLeagueQuery } from '~/api/riot/queries/league.ts'
import { matchHistoryQuery, matchQuery } from '~/api/riot/queries/match.ts'
import type { LeagueEntry, Match, Summoner } from '~/api/riot/queries/types.ts'
import type { Servers } from '~/api/riot/constants.ts'

export const useRiotClient = (server: Servers) => ({
  getSummoner: summonerQuery(riotClient<Summoner>(server)),
  getMatchHistory: matchHistoryQuery(riotClient<string[]>(server)),
  getMatch: matchQuery(riotClient<Match>(server)),
  getSummonerLeague: summonerLeagueQuery(riotClient<LeagueEntry[]>(server))
})
