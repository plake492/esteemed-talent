// import db from './db.json'
import axios from 'axios'

const Api = axios.create({
  baseUrl: 'http://localhost:3000/'
})

export const jobs = {
  get: async () => Api.get('http://app.drupalcontractors.com:3000/prod/jobs'),

  submitApplication: async ({ applicant, jobId }) => alert(applicant.firstName + ' ' + applicant.lastName + ' has email at ' + applicant.email, jobId)

}

export const talent = {
  get: async () => Api.get('http://localhost:3000/prod/test')

}
