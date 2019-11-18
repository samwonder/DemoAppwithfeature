import { getBaseUrl } from '../config/appConfig';

// Authentication using constant
// export const demoUrl = `${getBaseUrl()}/api/v1/users/sign_in`;
// Demo 
// export const demoUrl = 'http://dummy.restapiexample.com/api/v1/employees'

export const loginUserUrl = `${getBaseUrl()}/transport/transport_api/login`;
export const registerUserUrl = `${getBaseUrl()}/transport/transport_api/register`;
export const forgotPasswordUrl = `${getBaseUrl()}/transport/transport_api/forgot_password`;
export const phoneVerificationUrl = `${getBaseUrl()}/transport/transport_api/mobile_varification`;
export const verifyOtpUrl = `${getBaseUrl()}/transport/transport_api/match_otp`;