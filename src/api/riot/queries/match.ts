import type { RiotClient } from '~/api/riot/client.ts'
import { Match, Queries } from '~/api/riot/queries/types.ts'

type MatchHistoryQuery = (client: RiotClient<string[]>) => (payload: MatchHistoryPayload) => Promise<string[]>
type MatchQuery = (client: RiotClient<Match>) => (payload: string) => Promise<Match>

type MatchHistoryPayload = {
  puuid: string
  startTime?: number
  endTime?: number
  queue?: number // TODO: ADD QUEUE TYPE
  type?: string // TODO: ADD QUEUE TYPE
  start?: number
  count?: number
}

export const matchQuery: MatchQuery = (client) => (payload) => client({
  url: `/lol/match/v5/matches/${payload}`,
  type: Queries.MATCH_BY_SUMMONER,
  regional: true
})

export const matchHistoryQuery: MatchHistoryQuery = (client) => ({ puuid, ...params }) => {
  const query = Object.entries(params).map((entry) => entry.join('=')).join('&')

  return client({
    url: `/lol/match/v5/matches/by-puuid/${puuid}/ids${query ? `?${query}` : ''}`,
    type: Queries.MATCH_BY_PUUID,
    regional: true
  })
}
