<template>
<v-container fluid fill-height>
  <v-layout justify-center align-center>
    <span>This is post page</span>
  </v-layout>
</v-container>
</template>

<script>
import soFetch from "@/utils/soFetch";

export default {
  data() {
    return {
      posts: null
    };
  },
  created() {
    this.getPosts();
  },

  methods: {
    async getPosts() {
      this.posts = await soFetch("/api/post");
    }
  }
};
</script>
