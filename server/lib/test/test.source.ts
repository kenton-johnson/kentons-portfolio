/* eslint-disable @typescript-eslint/no-explicit-any */
export async function fetchNflTeams(): Promise<any> {
  const response = await $fetch<any>('https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams');
  return response;
}