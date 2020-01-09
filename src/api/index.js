import axios from "axios";
const Mt = axios.create({
  baseURL: 'https://app2.motie.com/ranking?'
});
export const get = async (params, config = {}) => {

  let { data } = await Mt.get('', {
    ...config,
    params
  })
  return data
}
export default {
  get

}