import getUrl from './utils'
import * as constants from './constant'
const url = getUrl(constants.ADDRESS, constants.PORT, constants.PATH)
const region = constants.REGION;

export {
    url,
    region
}