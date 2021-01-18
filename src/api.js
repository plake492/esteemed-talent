// import db from './db.json'
import axios from 'axios'

const localStorage = window.localStorage
const Api = axios.create({
  baseUrl: 'http://localhost:3000/'
})

export const jobs = {
  get: async () => Api.get('http://app.drupalcontractors.com:3000/prod/jobs'),
  // get: () => ({ data: db.jobs }),

  submitApplication: async ({ applicant, jobId }) => alert(applicant.firstName + ' ' + applicant.lastName + ' has email at ' + applicant.email, jobId)

}

export const talent = {
  get: async () => Api.get('http://localhost:3000/prod/test')

}

// MOCK AUTH SYSTEM
export const auth = {
  getUser: async () => JSON.parse(localStorage.getItem('user')) || null,

  signUp: async function (user) {
    const userPool = JSON.parse(localStorage.getItem('userPool')) || []
    userPool.push(user)
    localStorage.setItem('userPool', JSON.stringify(userPool))
    return this.login(user)
  },

  login: async ({ email, password }) => {
    const userPool = JSON.parse(localStorage.getItem('userPool')) || []
    const user = userPool.find(users => users.email === email)

    if (user && user.email === email && user.password === password) {
      localStorage.setItem('user', JSON.stringify(user))
      return user
    } else {
      return 'wrong email or password'
    }
  },

  logout: async () => {
    localStorage.removeItem('user')
  }
}
