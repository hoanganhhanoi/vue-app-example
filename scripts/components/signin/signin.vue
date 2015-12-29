<template>
  <app-header></app-header>
	<div class="row">
    <div class="col-md-4 col-md-offset-4">
      <form role="form">
        <fieldset>
          <div class="form-group col-lg-6">
            <input class="form-control" placeholder="E-mail" name="email" type="email" autofocus>
          </div>
          <div class="form-group col-lg-6">
            <input class="form-control" placeholder="Password" name="password" type="password" value="">
          </div>
          <div class="checkbox col-lg-6">
            <label>
              <input name="remember" type="checkbox" value="Remember Me">Remember Me
            </label>
          </div>
          <!-- Change this to a button or input when using this as a form -->
          <div class="col-lg-6">
            <button class="btn btn-lg btn-primary btn-block" v-on:click="change_view_signup">Sign In</button>
          </div>
        </fieldset>
      </form>
		</div>
	</div>
  <app-footer></app-footer>
</template>

<script>
  export default {  
    methods: {
      change_view_signup: function() {
        this.$route.router.go("signup")
      }
    }
  }
</script>