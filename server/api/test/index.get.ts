// server/api/nfl/teams.get.ts
import { getNflTeams } from '~~/server/lib/test/test.service';

export default defineEventHandler(async () => {
  return getNflTeams();
});