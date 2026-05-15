<script setup lang="ts">
import { useNflTeams } from '~~/app/composables/test/useNflTeams';

const { data: teams } = await useNflTeams();
</script>

<template>
  <BCard>
    <h1>Test Page</h1>
    <ul>
      <li v-for="team in teams" :key="team.id">
        {{ team.name }}
      </li>
    </ul>
  </BCard>
</template>