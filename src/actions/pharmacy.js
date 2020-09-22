
const { httpClient } = require("../services/service")

export const getBestPharmacy = async (userLocation, medicines, success) => {
  await httpClient.post('pharmacy', success, {medicines, userLocation})
}