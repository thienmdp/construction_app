import * as yup from 'yup'

const EMAIL_REGX =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/

export const schema = yup.object({
  email: yup
    .string()
    .matches(EMAIL_REGX, 'Email không đúng định dạng')
    .required('Email là bắt buộc')
    .email('Email không đúng định dạng')
    .min(5, 'Độ dài từ 5 đến 160 kí tự')
    .max(160, 'Độ dài từ 5 đến 160 kí tự'),
  nameCompany: yup
    .string()
    .required('Tên công ty là bắt buộc')
    .min(5, 'Độ dài từ 5 đến 160 kí tự')
    .max(160, 'Độ dài từ 5 đến 160 kí tự'),
  nameBranch: yup.string().required('Phòng ban là bắt buộc'),
  description: yup.string().required('Mô tả là bắt buộc'),
  phone: yup
    .string()
    .required('Số điện thoại là bắt buộc')
    .matches(/^(84|0[2|3|5|7|8|9])+([0-9]{8,9})\b$/, 'Số điện thoại không hợp lệ'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(6, 'Độ dài từ 6 đến 160 kí tự')
    .max(160, 'Độ dài từ 6 đến 160 kí tự'),
  confirm_password: yup
    .string()
    .required('Nhập lại password là bắt buộc')
    .min(6, 'Độ dài từ 6 đến 160 kí tự')
    .max(160, 'Độ dài từ 6 đến 160 kí tự')
    .oneOf([yup.ref('password')], 'Nhập lại password không khớp'),
  firstName: yup.string().required('Nhập vào họ của bạn').min(2, 'Độ dài từ 2 kí tự'),
  lastName: yup.string().required('Nhập vào tên của bạn').min(2, 'Độ dài từ 2 kí tự'),
  allowGeneralInfo: yup.boolean(),
  isActive: yup.boolean()
})
export type Schema = yup.InferType<typeof schema>
