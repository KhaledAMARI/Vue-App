<template>
  <v-card class="mx-auto mt-9 px-7" width="700">
    <v-card-title class="text-h2 justify-center "> Registration Form </v-card-title>
    <v-card-text>
      <v-text-field label="Username" v-model="username" prepend-icon="mdi-account" />
      <v-text-field label="Email" v-model="email" prepend-icon="mdi-email" />
      <v-text-field
      label="Password"
      v-model="password"
      :type="showPassword ? 'text' : 'password'"
      prepend-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"/>
    </v-card-text>
    <v-card-actions class="mb-10">
      <v-btn @click="registerUser()" outlined min-width="200" color="success" class="mx-auto">Register</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./Register.js"></script>
