<template>
    <div class="">
        <div class="d-flex mb-5">
            <input type="text" placeholder="Enter a record hash" v-model="hash" class="form-control">
            <button @click="searchInmate" class="btn btn-primary">Search</button>
        </div>

        <div v-show="true">
            <div class="row">
                <h4 class="h4 mb-3">Personal information:</h4>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.firstName }}</h6>
                    <p>First name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.middleName }}</h6>
                    <p>Middle name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.lastName }}</h6>
                    <p>Last name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.gender }}</h6>
                    <p>Gender</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.dob }}</h6>
                    <p>Date of birth</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.phoneNumber }}</h6>
                    <p>Phone number</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.state }}</h6>
                    <p>State of origin</p>
                </div>
            </div>

            <hr>

            <div class="row mt-4">
                <h4 class="h4 mb-3">Family members:</h4>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.fatherName }}</h6>
                    <p>Father's name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.motherName }}</h6>
                    <p>Mother name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.fatherMotherAddress }}</h6>
                    <p>Father/Mother Address</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.brotherName }}</h6>
                    <p>Brother Name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.sisterName }}</h6>
                    <p>Sister's name</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.brotherSisterAddress }}</h6>
                    <p>Brother/Sister Address</p>
                </div>
            </div>

            <hr>

            <div class="row mt-4">
                <h4 class="h4 mb-3">Crime information:</h4>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.caseNumber }}</h6>
                    <p>Case number</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.caseReporter }}</h6>
                    <p>Case Reporter</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.caseDate }}</h6>
                    <p>Case date</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.caseType }}</h6>
                    <p>Case type</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.caseAddress }}</h6>
                    <p>Case address</p>
                </div>
                <div class="col-12 col-md-4">
                    <h6>{{ inmate.description }}</h6>
                    <p>Description</p>
                </div>
            </div>

            <div class="d-flex justify-content-end mt-3">
                <button class="btn btn-primary">Print</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Record',
        layout: 'main',
        components: true,
        
        data(){
            return {
                // Inmate's details
                inmate: {
                    firstName: 'Chinedum',
                    middleName: 'Mark',
                    lastName: 'Chikeluo',
                    gender: 'Male',
                    dob: '05-10-1998',
                    phoneNumber: '08012365478',
                    state: 'Abia',
                    fatherName: 'Mr. Andrew Chikeluo',
                    motherName: 'Mrs. Catherine Chikeluo',
                    fatherMotherAddress: 'No. 755, Nwaniba, Uyo, Akwa-ibom State',
                    brotherName: 'James Chikeluo',
                    sisterName: 'Naomi Chikeluo',
                    brotherSisterAddress: 'No. 355 Ikpa Road, Uyo, Akwa-ibom State',
                    caseNumber: '00125',
                    caseReporter: 'Mr. Johnson Bradson',
                    caseDate: '02-06-2021',
                    caseType: 'Theft',
                    caseAddress: 'No. 57 Abak Road, Uyo, Akwa-ibom State',
                    description: 'Stole infinix 330',
                },
                hash: '',

                feedback: {
                    status: -1,
                    message: ''
                },
                isProcessing: false,
            }
        },

        created(){
            this.changePageTitle('Records');
        },

        methods: {
            ...mapActions({
                setPageTitle: 'setPageTitle',
                getInmateFromServer: 'inmates/getInmateFromServer'
            }),

            changePageTitle(pageTitle){
                this.setPageTitle(pageTitle)
            },

            searchInmate(){
                const hash = this.hash.trim();

                if(hash != ''){
                    this.getInmateFromServer(hash)
                        .then(response => {
                            this.inmate = response.data.inmate.data;
                        })
                        .catch(error => {
                            alert(error.message);
                        });
                }else{
                    alert('You\'ve not entered a record hash');
                }
            }
        }
    }
</script>

<style>
    input[type="text"], input[type="number"] {
        border-top: 0;
        border-right: 0;
        border-left: 0;
        border-bottom: 1px solid #87b7fd;
    }

    .btn-primary{
        background-color: #00B5D7;
    }
</style>