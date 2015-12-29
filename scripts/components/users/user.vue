<template>
  <app-header></app-header>
  <h1>Users Github</h1>
  <button class="btn btn-primary" @click="fetchUsers()">Get Users</button>

  <div class="row">
    <div class="col-xs-6 col-md-2" v-for="user in users">
      <div class="thumbnail">
        <img :src="user.avatar_url" alt="{{ user.login }}" style="height:100px">
        <div class="caption">
          <a :href="user.html_url">
            <h3 class="username">{{ user.login }}</h3>
          </a>
        </div>        
      </div>      
    </div>    
  </div>
  <app-footer></app-footer>
</template>

<script>
export default {
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      this.$http.get('https://api.github.com/users', (data) => {
        this.users = data
      })
      .error((err) => console.log(err))
    }
  }
}
</script>

<style>
.username {
  text-align: center;
}
</style>