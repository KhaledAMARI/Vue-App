<template>
  <v-card class="mx-auto mt-9 px-7" width="700">
    <v-card-title class="text-h2 justify-center "> Login Form </v-card-title>
    <v-card-text>
      <v-text-field label="Email" prepend-icon="mdi-email" />
      <v-text-field
      label="Password"
      :type="showPassword ? 'text' : 'password'"
      prepend-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
      @click:append="showPassword = !showPassword"/>
    </v-card-text>
    <v-card-actions class="mb-10">
      <v-btn outlined min-width="200" color="success" class="mx-auto">Log In</v-btn>
    </v-card-actions>
  </v-card>
</template>
