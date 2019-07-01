import axios from 'axios'

// ToDo: add axios instance(s) for to 'taxation'
// ToDo: add axios instance(s) for to 'research', 'education'
// ToDo: rename instance to 'innovation-mining'
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

// instance.defaults.headers.common['PATENTING'] = 'patenting'

export default instance
