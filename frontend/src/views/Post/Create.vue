<template>
<v-container fluid>
  <v-layout justify-center row wrap>
    <v-flex md12>
      <h1>Create post</h1>
    </v-flex>

    <v-flex md12>
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="title"
          :rules="titleRules"
          :counter="10"
          label="Title"
          required
        ></v-text-field>
        <v-text-field
          v-model="body"
          :rules="bodyRules"
          :counter="100"
          label="Body"
          required
        ></v-text-field>

        <v-btn @click="submit" :disabled="!valid">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    title: "",
    titleRules: [
      v => !!v || "Title is required",
      v => !v || v.length <= 10 || "Name must be less than 10 characters"
    ],
    body: "",
    bodyRules: [
      v => !!v || "Body is required",
      v => !v || v.length <= 100 || "Body must be less than 100 characters"
    ]
  }),
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        const response = (await axios.post("/api/post", {
          title: this.title,
          body: this.body
        })).data;

        this.$store.commit("updateSnackbarMessage", "Created Post");

        this.$router.push({ name: "post" });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
