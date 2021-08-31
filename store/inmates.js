import axios from 'axios';

// Function to get configuration for making request
const getConfigHeader = () => {
    const authToken = localStorage.getItem('token') || null;

    return {
        headers: {
            'Authorization' : 'Bearer ' + authToken,
            'Content-Type': 'application/json'
        }
    };
}

// Server
const baseUrl = 'https://blockchain-crm.herokuapp.com/api/v1';

export const state = () => ({
    inmate: null
})

export const getters = {
    getInmate: state => state.inmate
}

export const actions = {
    addInmateToServer: ({ commit }, newInmate) => {
        return new Promise((resolve, reject) => {
            axios.post(`${baseUrl}/inmates/`, newInmate, getConfigHeader())
            .then(response => {
                let inmate = response.data.inmate;
                commit('setInmate', inmate);
                resolve(response);
            })
            .catch(error => {
                commit('setInmate', {});
                reject(error);
            });
        });
    },

    getInmateFromServer: ({ commit }, hash) => {
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}/inmates/${hash}`, getConfigHeader())
            .then(response => {
                let inmate = response.data.inmate;
                commit('setInmate', inmate);
                resolve(response);
            })
            .catch(error => {
                commit('setInmate', {});
                reject(error)
            });
        });
    }
}

export const mutations = {
    setInmate: (state, inmate) => {
        state.inmate = inmate
    }
}