<template>
<v-container fluid fill-height>
  <v-layout justify-center align-center>
    <v-flex md8>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :pagination.sync="pagination"
        :total-items="totalDesserts"
        :loading="loading"
        :rows-per-page-items="[5]"
        class="elevation-1"
      >
        <template slot="items" slot-scope="{ item }">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
          <td>{{ item.created_at }}</td>
        </template>
      </v-data-table>

    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
import soFetch from "@/utils/soFetch";

export default {
  data() {
    return {
      posts: {},
      headers: [
        {
          text: "ID",
          value: "id",
          sortable: false
        },
        {
          text: "Title",
          value: "title",
          sortable: false
        },
        {
          text: "Body",
          value: "body",
          sortable: false
        },
        {
          text: "CreatedAt",
          value: "created_at",
          sortable: false
        }
      ],
      desserts: [],
      totalDesserts: 0,
      loading: false,
      pagination: {}
    };
  },
  watch: {
    pagination: {
      handler() {
        this.getPosts();
      },
      deep: true
    }
  },

  methods: {
    async getPosts() {
      this.loading = true;

      const { page } = this.pagination;
      this.posts = (await axios("/api/post", {
        params: { page }
      })).data;

      this.loading = false;
      this.desserts = this.posts.data;
      this.totalDesserts = this.posts.total;
    }
  }
};
</script>
