<template>
  <div class="soltNode1">
    <solt-node url="#">
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </solt-node>
  </div>
</template>

<script>
import SoltNode from "./soltNode2";
export default {
  components: { SoltNode },
  data() {
    return {};
  },
};
</script>

<style>
</style>