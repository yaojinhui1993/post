<template>
  <v-layout row class="align-center layout px-4 pt-4 app--page-header">
    <v-breadcrumbs divider="-" :items="breadcrumbs()">
    </v-breadcrumbs>
    <v-spacer></v-spacer>
    <div class="page-header-right">
      <v-btn icon>
        <v-icon class="text--secondary">refresh</v-icon>
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import menu from "@/api/menu";
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    breadcrumbs: function() {
      let breadcrumbs = [];
      menu.forEach(item => {
        if (item.items) {
          let child = item.items.find(i => {
            return i.component === this.$route.name;
          });
          if (child) {
            breadcrumbs.push({ text: item.title });
            breadcrumbs.push({ text: child.title });
            this.title = child.title;
          }
        } else {
          if (item.name === this.$route.name) {
            this.title = item.title;

            breadcrumbs.push({ text: item.title });
          }
        }
      });
      return breadcrumbs;
    }
  }
};
</script>
