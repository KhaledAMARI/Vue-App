<template>
  <v-card class="mx-auto mt-9 px-7" width="700">
    <v-card-title class="text-h2 justify-center "> Mail Confirmation </v-card-title>
    <v-card-text>
      <v-text-field label="Please enter your confirmation code" v-model="code" />
    </v-card-text>
    <v-card-actions class="mb-10">
      <v-btn @click="() => confirmUser()" outlined min-width="200" color="success" class="mx-auto">Confirm</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src='./Confirm_mail.js'></script>
