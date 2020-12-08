// import axios from 'axios'
import db from './db.json'

// const Api = axios.create({
//   baseUrl: 'http://localhost:3000/'
// })

export const jobs = {
  get: async () => db.jobs[0]

}

export const talent = {
  get: async () => db.talent

}
