import axios from 'axios'

// ToDo: add axios instance(s) for to 'taxation'
// ToDo: add axios instance(s) for to 'research', 'education'
const miner = axios.create({
  baseURL: 'http://localhost:5000'
})

miner.defaults.headers.common['AI-MINER'] = 'ai-miner'

export default miner
