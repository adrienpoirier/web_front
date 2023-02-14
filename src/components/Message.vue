<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: ["message"]
});

</script>

<template>
<div>
    <h1><b>"username"</b><sub>"date"</sub></h1>
    <p>
        "message"
    </p>
</div>
</template>
