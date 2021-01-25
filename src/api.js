// import db from './db.json'
import axios from 'axios'
const localStorage = window.localStorage

export const jobs = {
  get: async () =>
    axios.get('http://localhost:3000/prod/get-all-jobs'),
  // db.jobs,

  postApplicant: async ({ applicant, jobId }) =>
    axios.post('http://localhost:3000/prod/upload-applicant', { applicant, jobId }),

  postResume: async ({ resume }) =>
    axios.post('http://localhost:3000/upload-resume',
      resume,
      { headers: { 'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' } }
    )
}

export const talent = {
  get: async () => axios.get('http://localhost:3000/prod/get-all-talent')
}
// MOCK AUTH SYSTEM
export const auth = {
  getUser: async () => JSON.parse(localStorage.getItem('user')) || null,

  signUp: async function (user) {
    if (user.firstName && user.lastName && user.password && user.email && user.passwordConfirm) {
      if (user.password !== user.passwordConfirm) {
        return { status: 'err', msg: 'passwords do not match' }
      }
      const userPool = JSON.parse(localStorage.getItem('userPool')) || []
      delete user.passwordConfirm
      userPool.push(user)
      localStorage.setItem('userPool', JSON.stringify(userPool))
      return this.login(user)
    }
    return { status: 'err', msg: 'missing required fields' }
  },

  login: async ({ email, password }) => {
    if (password && email) {
      const userPool = JSON.parse(localStorage.getItem('userPool')) || []
      const user = userPool.find(users => users.email === email)

      if (user && user.email === email && user.password === password) {
        localStorage.setItem('user', JSON.stringify(user))
        return { status: 'success', msg: 'login successful', user }
      } else {
        return { status: 'err', msg: 'wrong email or password' }
      }
    }
    return { status: 'err', msg: 'missing required fields' }
  },

  logout: async () => {
    localStorage.removeItem('user')
  }
}
