<template>
    <!-- Topbar -->
    <nav
        class="
              navbar navbar-expand navbar-light
              bg-white
              topbar
              mb-4
              static-top
              shadow
            "
    >
        <!-- Topbar Navbar -->
        <ul class="navbar-nav ml-auto">
            <!-- Nav Item - Messages -->
            <li class="nav-item dropdown no-arrow mx-1">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <font-awesome-icon icon="envelope" />
                    <!-- Counter - Messages -->
                    <span class="badge badge-danger badge-counter">7</span>
                </a>
            </li>

            <div class="topbar-divider d-none d-sm-block"></div>

            <!-- Nav Item - User Information -->
            <li class="nav-item dropdown no-arrow">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    @click="Logout"
                >
                    <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                        {{ userName }}
                    </span>
                    <font-awesome-icon icon="user-tie" />
                </a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: {
        userName: {
            type: String,
            default: '장태진'
        }
    },
    methods: {
        Logout() {
            window.alert('Logout')
            this.$store.commit('user', {})
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>
