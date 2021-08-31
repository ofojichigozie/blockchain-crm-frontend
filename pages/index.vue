<template>
    <main id="main">
        <div class="p-4 text-center">
            <h3>Administrator login</h3>
        </div>
        
        <div class="p-4 signin-section">
            <h5 class="text-center text-danger">{{ errorMessage }}</h5>
            <form @submit.prevent="signIn">
                <input type="email" placeholder="Email" class="form-control form-control-lg" v-model="email" required>
                <input type="password" placeholder="Password" class="form-control form-control-lg" v-model="password" required>
                <div class="d-flex justify-content-end mt-4">
                    <nuxt-link to="/forgot_password">Forgot password?</nuxt-link>
                </div>
                <div v-show="!isProcessing" class="mt-5 text-center">
                    <button type="submit" class="form-control form-control-lg btn btn-primary text-white">Continue</button>
                </div>
                <div v-show="isProcessing" class="text-center">
                    <img src="/images/loading.gif" alt="Loading">
                </div>
            </form>
        </div>
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Index',
        
        data(){
            return {
                email: '',
                password: '',
                errorMessage: '',
                isProcessing: false,
            }
        },

        methods: {
            signIn: function(){
                this.isProcessing = true;

                if((this.email.trim() !== '') && (this.password.trim() !== '')){

                    const headers = {
                        "Content-Type": "application/json"
                    };

                    let credentials = {
                        email: this.email.trim(),
                        password: this.password.trim()
                    };

                    this.errorMessage = '';

                    axios.post('https://blockchain-crm.herokuapp.com/api/v1/admin/login', credentials, {headers: headers})
                        .then(response => {
                            const token = response.data.token;

                            if(token != null){
                                localStorage.setItem('token', token);
                                window.location.href = '/dashboard';
                            }else{
                                this.errorMessage = "Unauthorized access denied";
                            }
                        })
                        .catch(e => {
                            this.errorMessage = e.message;
                        })
                }else{
                    this.errorMessage = "Enter login details";
                }

                this.isProcessing = false;
            }
        }
    }
</script>

<style scoped>
    #main {
        margin-top: 100px;
    }

    .signin-section{
        width: 40%;
        margin: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

    input {
        margin-bottom: 10px;
        border-width: 0px 0px 2px 0px;
        background: transparent;
    }

    #signin-section{
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
    }

    .signin-section{
        background: rgba(196, 196, 196, 0.13);
    }

    @media screen and (max-width: 560px){
        .signin-section{
            width: 90% !important;
        }
    }

</style>