
<template>
    <div>
        <div class="col-4 offset-sm-4">
            <h2>Login</h2>
            <p v-if="$route.query.redirect">
                You need to login first.
            </p>
            <form @submit.prevent="login">
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1">
                    <small id="emailHelp" class="form-text text-muted">(hint: password1)</small>
                </div>
                <p v-if="error" class="error">Your email or password is incorrect</p>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    </div>
</template>

<script>
    import auth from '../auth'
    export default {
        data () {
            return {
                email: '',
                pass: '',
                error: false
            }
        },
        methods: {
            login () {
                auth.login(this.email, this.pass, loggedIn => {
                    if (!loggedIn) {
                        this.error = true
                    } else {
                        this.$router.replace(this.$route.query.redirect || '/')
                    }
                })
            }
        }
    }
</script>

<style>
    .error {
        color: red;
    }
</style>