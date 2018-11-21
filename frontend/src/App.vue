<template>
<div id="appRoot">
  <template v-if="$route.meta.public">
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </template>

  <template v-else>
    <v-app id="inspire" class="app">
      <v-content>
        <app-drawer class="app-drawer"></app-drawer>
        <div class="page-wrapper">
          <router-view></router-view>
        </div>

        <v-footer height="auto" class="white pa-3 app--footer">
          <span class="caption">isocked.com Design &copy; {{ new Date().getFullYear() }}</span>
          <v-spacer></v-spacer>
          <span class="caption mr-1"> Make With Love </span> <v-icon color="pink" small>favorite</v-icon>
        </v-footer>
      </v-content>

      <app-fab></app-fab>
    </v-app>
  </template>
</div>
</template>

<script>
import AppDrawer from "@/components/AppDrawer";
import AppFab from "@/components/AppFab";

export default {
  components: {
    AppDrawer,
    AppFab
  }
};
</script>

<style lang="stylus" scoped>
.seting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}

.page-wrapper {
  min-height: calc(100vh - 64px - 50px - 81px);
}
</style>
