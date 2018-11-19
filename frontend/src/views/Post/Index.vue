<template>
<v-container fluid fill-height>

  <v-layout justify-center align-center row wrap>
    <v-flex md12>
      <div class="text-xs-center">
        <v-btn round color="primary" to="/post/create" dark>Create Post</v-btn>
      </div>
    </v-flex>

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
          <td>
            <v-icon small class="mr-2" @click="editItem(item)">
              edit
            </v-icon>
            <v-icon small @click="deleteItem(item)">delete</v-icon>
          </td>
        </template>
      </v-data-table>

    </v-flex>

  </v-layout>


  <v-dialog v-model="dialog" max-width="500px">
    <v-btn slot="activator" color="primary" dark class="mb-2">Edit item</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Edit Item</span>
      </v-card-title>

      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedItem.title" label="Post title"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field v-model="editedItem.body" label="Post body"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
        <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-container>
</template>

<script>
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
        },
        {
          text: "Actions",
          value: "name",
          sortable: false
        }
      ],
      desserts: [],
      totalDesserts: 0,
      loading: false,
      pagination: {},

      dialog: false,
      editedItem: {}
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
    },

    editItem(item) {
      this.editedItem = { ...item };
      this.dialog = true;
    },

    async deleteItem(item) {
      this.dialog = false;

      await axios.delete(`/api/post/${item.id}`, {});

      this.$store.commit("updateSnackbarMessage", "Deleted Success!");

      this.getPosts();
    },
    close() {
      this.dialog = false;

      this.editedItem = {};
    },

    async save() {
      await axios.patch(`/api/post/${this.editedItem.id}`, {
        title: this.editedItem.title,
        body: this.editedItem.body
      });

      const index = this.desserts.findIndex(
        item => item.id === this.editedItem.id
      );
      this.desserts[index] = this.editedItem;
      this.editedItem = {};

      this.$store.commit("updateSnackbarMessage", "Updated Success");
      this.dialog = false;
    }
  }
};
</script>
