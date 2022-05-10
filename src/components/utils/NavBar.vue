<template>
  <div>
   <nav class="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
			<div class="container">
			<router-link to="/" class="navbar-brand">
						<i class="fas fa-sign-in-alt"></i>DevCamper</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
						<router-link to="/login" class="nav-link">
						<i class="fas fa-sign-in-alt"></i>Login</router-link>
						</li>
						<li class="nav-item">
						<router-link to="/register" class="nav-link">Register</router-link>
						</li>
						<li class="nav-item d-none d-sm-block">
							<a class="nav-link" href="#">|</a>
						</li>
						<li class="nav-item">
              <router-link to="/bootcamps" class="nav-link">Browse Bootcamps</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
  </div>
</template>

<script>
// const btn = document.querySelector("button.mobile-menu-button");
// const menu = document.querySelector(".mobile-menu");
// btn.addEventListener("click", () => {
//     menu.classList.toggle('hidden');
// });
export default{

    created() {
        // this.toggleMenu();
    },

    methods: {
        toggleMenu() {
            
        }
    }

}
</script>