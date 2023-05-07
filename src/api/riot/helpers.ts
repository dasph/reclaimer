import { Regions, Servers } from '~/api/riot/constants.ts'

export const regionMap: Record<Servers, Regions> = Object.freeze({
  [Servers.BR]: Regions.AMERICAS,
  [Servers.EUN]: Regions.EUROPE,
  [Servers.EUW]: Regions.EUROPE,
  [Servers.JP]: Regions.ASIA,
  [Servers.KR]: Regions.ASIA,
  [Servers.LA1]: Regions.AMERICAS,
  [Servers.LA2]: Regions.AMERICAS,
  [Servers.NA]: Regions.AMERICAS,
  [Servers.OC]: Regions.SEA,
  [Servers.RU]: Regions.EUROPE,
  [Servers.TR]: Regions.EUROPE
})
