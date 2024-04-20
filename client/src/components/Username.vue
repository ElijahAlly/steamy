<script setup>
import { onMounted, ref, watch, computed } from "vue";
import { useMainStore } from "@/stores/main";

const store = useMainStore();
const props = defineProps(["id"]);

const isLoading = ref(false);
const username = ref("");
const isCurrentUser = ref(false);

async function loadUsername() {
  isLoading.value = true;

  const user = await store.getUser(props.id);

  username.value = user?.username || "ghost"; // TODO: lol maybe remove?

  isCurrentUser.value = store.currentUser?.username === username.value;
  
  isLoading.value = false;
}

onMounted(loadUsername);
watch(() => props.id, loadUsername);
</script>

<template>
  <span v-if="isLoading" class="placeholder-glow ms-2" aria-hidden="true">
    <span class="placeholder"></span>
  </span>

  <span v-else>
    {{ username }}
    <span class="you-tag">{{ isCurrentUser ? ' (you)' : '' }}</span>
  </span>
</template>

<style scoped lang="scss">
.placeholder {
  width: 60px;
}

.you-tag {
  color: gray;
}
</style>
