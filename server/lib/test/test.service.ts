/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchNflTeams } from '~~/server/lib/test/test.source';
type NflTeam = {
  id: number;
  name: string;
};

export async function getNflTeams() {
  const response = await fetchNflTeams();

  const footballSports = response.sports.find((s: { id: string; }) => s.id === '20');
  const nflLeague = footballSports.leagues.find((l: { id: string; }) => l.id === '28');

  return nflLeague.teams.map(({ team }: any): NflTeam => ({
    id: Number(team.id),
    name: team.displayName,
  })).sort((a: { id: number; }, b: { id: number; }) => a.id - b.id);
}