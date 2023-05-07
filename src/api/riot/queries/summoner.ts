import { RiotClient } from '~/api/riot/client.ts'
import { Summoner, Queries } from '~/api/riot/queries/types.ts'

type SummonerQuery = (client: RiotClient<Summoner>) => (payload: Payload) => Promise<Summoner>

type Payload = undefined | { puuid: string } | { rsoPuuid: string } | { accountId: string } | { summonerId: string } | { summonerName: string }

export const summonerQuery: SummonerQuery = (client) => (payload) => client(
  typeof payload === 'undefined' ? { url: '/lol/summoner/v4/summoners/me', type: Queries.SUMMONER_BY_ME } :
  'puuid' in payload ? { url: `/lol/summoner/v4/summoners/by-puuid/${payload.puuid}`, type: Queries.SUMMONER_BY_PUUID } :
  'accountId' in payload ? { url: `/lol/summoner/v4/summoners/by-account/${payload.accountId}`, type: Queries.SUMMONER_BY_ACCOUNT } :
  'summonerId' in payload ? { url: `/lol/summoner/v4/summoners/${payload.summonerId}`, type: Queries.SUMMONER_BY_ID } :
  'summonerName' in payload ? { url: `/lol/summoner/v4/summoners/by-name/${payload.summonerName}`, type: Queries.SUMMONER_BY_NAME } :
  { url: `/fulfillment/v1/summoners/by-puuid/${payload.rsoPuuid}`, type: Queries.SUMMONER_BY_RSOPUUID }
)
