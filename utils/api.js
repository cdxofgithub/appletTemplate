import fetch from './fetch.js'

export const getService = () => fetch('/WmsOrder/GetServiceList', '', 'GET');