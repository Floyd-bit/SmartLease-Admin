import request from '@/utils/request';

export type LoginParamsType = {
  userName: string;
  password: string;
  phone: string;
  captcha: string;
};

export async function fakeAccountLogin(params: LoginParamsType) {
  // 与后台对接 /api/customer/user/login
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
