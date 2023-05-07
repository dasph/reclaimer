export enum Queries {
  SUMMONER_BY_ME = 'summoner-by-me',
  SUMMONER_BY_ID = 'summoner-by-id',
  SUMMONER_BY_NAME = 'summoner-by-name',
  SUMMONER_BY_PUUID = 'summoner-by-puuid',
  SUMMONER_BY_ACCOUNT = 'summoner-by-account',
  SUMMONER_BY_RSOPUUID = 'summoner-by-rsopuuid',

  MATCH_BY_PUUID = 'match-by-puuid',
  MATCH_BY_SUMMONER = 'match-by-summoner',

  LEAGUE_BY_SUMMONER = 'league-by-summoner'
}

export type Summoner = {
  accountId: string
  profileIconId: number
  revisionDate: number
  name: string
  id: string
  puuid: string
  summonerLevel: number
}

// ------- Match

export type Match = {
  metadata: MatchMetadata
  info: MatchInfo
}

export type MatchMetadata = {
  dataVersion: string
  matchId: string
  participants: string[]
}

export type MatchInfo = {
  gameCreation: number
  gameDuration: number
  gameEndTimestamp: number
  gameId: number
  gameMode: string
  gameName: string
  gameStartTimestamp: number
  gameType: string
  gameVersion: string
  mapId: number
  participants: Participant[]
  platformId: string
  queueId: number // TODO: ADD TYPE
  teams: Team[]
  tournamentCode: string
}

export type Participant = {
  assists: number
  baronKills: number
  bountyLevel: number
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  championTransform: number
  consumablesPurchased: number
  damageDealtToBuildings: number
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns: number
  inhibitorsLost: number
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  neutralMinionsKilled: number
  nexusKills: number
  nexusTakedowns: number
  nexusLost: number
  objectivesStolen: number
  objectivesStolenAssists: number
  participantId: number
  pentaKills: number
  perks: Perks
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdName: string
  riotIdTagline: string
  role: string
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns: number
  turretsLost: number
  unrealKills: number
  visionScore: number
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
}

export type Perks = {
  statPerks: PerkStats
  styles: PerkStyle[]
}

export type PerkStats = {
  defense: number
  flex: number
  offense: number
}

export type PerkStyle = {
  description: string
  selections: PerkStyleSelection[]
  style: number
}

export type PerkStyleSelection = {
  perk: number
  var1: number
  var2: number
  var3: number
}

export type Team = {
  bans: Ban[]
  objectives: Objectives
  teamId: number
  win: boolean
}

export type Ban = {
  championId: number
  pickTurn: number
}

export type Objectives = {
  baron: Objective
  champion: Objective
  dragon: Objective
  inhibitor: Objective
  riftHerald: Objective
  tower: Objective
}

export type Objective = {
  first: boolean
  kills: number
}

// ------- LeagueEntry

export type LeagueEntry = {
  leagueId: string
  summonerId: string
  summonerName: string
  queueType: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
  miniSeries: MiniSeries
}

export type MiniSeries = {
  losses: number
  progress: string
  target: number
  wins: number
}
