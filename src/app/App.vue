<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <v-toolbar-title> Courier Plateform</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded @click="goToHome()">Home</v-btn>
      <v-btn class="ml-3" text rounded  @click="goToLogin()">Login</v-btn>
      <v-btn class="ml-3" text rounded @click="goToRegister()">Register</v-btn>
      <v-btn class="ml-3" text rounded @click="goToAbout()">About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script src='./App.js'></script>
