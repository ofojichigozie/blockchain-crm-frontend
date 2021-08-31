<template>
    <div>
        <div class="d-flex justify-content-between">
            <h4>Inmate Entry Form</h4>
            <nuxt-link class="btn btn-outline-danger btn-sm" to="inmates/view_records">Search</nuxt-link>
        </div>
        <p v-show="feedback.status != -1" :style="'color: ' + (feedback.status === 1 ? '#009F00;' : '#EF0000;')">
            <i v-show="feedback.status == 1" class="fa fa-check-circle"></i>
            <i v-show="feedback.status == 0" class="fa fa-times-circle"></i>
            {{ feedback.message }}
        </p>
        <form class="add-inmate-form" @submit.prevent="addNewInmate">
            <div class="row mt-4">
                <h5 class="h5">
                    <span class="fa-stack fa-1x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <strong class="fa-stack-1x text-light">1</strong>
                    </span>
                    Personal information
                </h5>
                <div class="col-12 col-md-6 mb-2">
                    <label for="first-name">First name</label>
                    <input type="text" class="form-control" id="first-name" v-model="firstName" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="first-name">Middle name</label>
                    <input type="text" class="form-control" id="first-name" v-model="middleName" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="last-name">Last name</label>
                    <input type="text" class="form-control" id="last-name" v-model="lastName" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" v-model="gender">
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="dob">Date of birth</label>
                    <input type="date" class="form-control" id="dob" v-model="dob" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="phone-number">Phone number</label>
                    <input type="tel" class="form-control" id="phone-number" v-model="phoneNumber" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="dob">State of origin</label>
                    <select class="form-control" id="" v-model="state">
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>
                </div>
            </div>

            <div class="row mt-4">
                <h5 class="h5">
                    <span class="fa-stack fa-1x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <strong class="fa-stack-1x text-light">2</strong>
                    </span>
                    Family member
                </h5>
                <div class="col-12 col-md-6 mb-2">
                    <label for="father-name">Father's Name</label>
                    <input type="text" class="form-control" id="father-name" v-model="fatherName" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="mother-name">Mother's name</label>
                    <input type="text" class="form-control" id="mother-name" v-model="motherName" required>
                </div>
                <div class="col-12 mb-2">
                    <label for="father-mother-address">Father/Mother address</label>
                    <textarea class="form-control" id="father-mother-address" v-model="fatherMotherAddress" required></textarea>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="brother-name">Brother's Name</label>
                    <input type="text" class="form-control" id="brother-name" v-model="brotherName" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="sister-name">Sister's name</label>
                    <input type="text" class="form-control" id="sister-name" v-model="sisterName" required>
                </div>
                <div class="col-12 mt-2">
                    <label for="brother-sister-address">Brother/Sister address</label>
                    <textarea class="form-control" id="brother-sister-address" v-model="brotherSisterAddress" required></textarea>
                </div>
            </div>

            <div class="row mt-4">
                <h5 class="h5">
                    <span class="fa-stack fa-1x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <strong class="fa-stack-1x text-light">3</strong>
                    </span>
                    Crime Information
                </h5>
                <div class="col-12 col-md-6 mb-2">
                    <label for="case-number">Case number</label>
                    <input type="number" class="form-control" id="case-number" v-model="caseNumber" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="case-reporter">Case reporter (if any)</label>
                    <input type="text" class="form-control" id="case-reporter" v-model="caseReporter" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="case-date">Case date</label>
                    <input type="date" class="form-control" id="case-date" v-model="caseDate" required>
                </div>
                <div class="col-12 col-md-6 mb-2">
                    <label for="case-type">Case type</label>
                    <input type="tel" class="form-control" id="case-type" v-model="caseType" required>
                </div>
                <div class="col-12 mb-2">
                    <label for="case-address">Case address</label>
                    <textarea class="form-control" id="case-address" v-model="caseAddress" required></textarea>
                </div>
                <div class="col-12 mb-2">
                    <label for="description">More description</label>
                    <textarea class="form-control" id="description" v-model="description" required></textarea>
                </div>
                <div class="col-12 mt-4 d-flex justify-content-end">
                    <input v-show="!isProcessing" type="submit" value="submit" class="btn btn-primary"/>
                    <img v-show="isProcessing" src="/images/loading.gif" alt="Loading">
                </div>
                <div class="mt-3 bg-darkx p-2" style="border-radius: 10px;">
                    <h6 class="h6">Record Hash:</h6>
                    <span class="text-danger" style="font-style: italic; font-size: 0.9em;">*You will get the record hash after filling and submitting the form</span>
                    <textarea class="form-control mb-2" id="description" v-model="hash" readonly required></textarea>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Inmates',
        layout: 'main',
        
        data(){
            return {
                // Inmate's details
                firstName: '',
                middleName: '',
                lastName: '',
                gender: 'Male',
                dob: '',
                phoneNumber: '',
                state: '',
                fatherName: '',
                motherName: '',
                fatherMotherAddress: '',
                brotherName: '',
                sisterName: '',
                brotherSisterAddress: '',
                caseNumber: '',
                caseReporter: '',
                caseDate: '',
                caseType: '',
                caseAddress: '',
                description: '',

                feedback: {
                    status: -1,
                    message: ''
                },
                isProcessing: false,
                hash: ''
            }
        },

        created(){
            this.changePageTitle('Inmates');
        },

        methods: {
            ...mapActions({
                setPageTitle: 'setPageTitle',
                checkInmateOnServer: 'inmates/checkInmateOnServer',
                getInmateFromServer: 'inmates/getInmateFromServer',
                addInmateToServer: 'inmates/addInmateToServer'
            }),

            changePageTitle(pageTitle){
                this.setPageTitle(pageTitle)
            },

            addNewInmate(){

                const newInmate = {
                    firstName: this.firstName,
                    middleName: this.middleName,
                    lastName: this.lastName,
                    gender: this.gender,
                    dob: this.dob,
                    phoneNumber: this.phoneNumber,
                    state: this.state,
                    fatherName: this.fatherName,
                    motherName: this.motherName,
                    fatherMotherAddress: this.fatherMotherAddress,
                    brotherName: this.brotherName,
                    sisterName: this.sisterName,
                    brotherSisterAddress: this.brotherSisterAddress,
                    caseNumber: this.caseNumber,
                    caseReporter: this.caseReporter,
                    caseDate: this.caseDate,
                    caseType: this.caseType,
                    caseAddress: this.caseAddress,
                    description: this.description
                }

                // Clear previous messages, if any
                this.feedback = {
                    status: -1,
                    message: ''
                };

                this.processingMode = true;

                this.addInmateToServer(newInmate)
                .then(response => {
                    this.hash = response.data.inmate.hash;

                    this.feedback = {
                        status: 1,
                        message: "New inmate has been added"
                    };

                    this.processingMode = false;

                    // Reset all inputs
                    this.firstName = '';
                    this.middleName = '';
                    this.lastName = '';
                    this.gender = 'Male';
                    this.dob = '';
                    this.phoneNumber = '';
                    this.state = 'Abia';
                    this.fatherName = '';
                    this.motherName = '';
                    this.fatherMotherAddress = '';
                    this.brotherName = '';
                    this.sisterName = '';
                    this.brotherSisterAddress = '';
                    this.caseNumber = '';
                    this.caseReporter = '';
                    this.caseDate = '';
                    this.caseType = '';
                    this.caseAddress = '';
                    this.description = '';
                })
                .catch(e => {
                    this.feedback = {
                        status: 0,
                        message: e.message
                    };
                    this.processingMode = false;
                });
            }
        }
    }
</script>

<style>
    .btn-primary{
        background-color: #00B5D7;
    }

    .add-inmate-form input, .add-inmate-form select, .add-inmate-form textarea {
        border-bottom: 1px solid #87b7fd;
    }
</style>