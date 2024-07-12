import Button from '@/components/Core/Button'
import Input from '@/components/Core/Input'
import { useRegisterAccountMutation } from '@/redux/services/authApi'
import { Schema, schema } from '@/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

type FormData = Pick<Schema, 'email' | 'phone' | 'nameCompany'>
// type FormData = Pick<Schema, 'email' | 'password' | 'confirm_password'>
// const registerSchema = schema.pick(['email', 'password', 'confirm_password'])
const registerSchema = schema.pick(['email', 'phone', 'nameCompany'])

export default function SignUp() {
  const navigate = useNavigate()
  const [registerAccount, resultRegister] = useRegisterAccountMutation()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({ resolver: yupResolver(registerSchema) })

  const onSubmit = handleSubmit((data) => {
    registerAccount({
      // username: data.email,
      // password: data.password
      email: data.email,
      phone: data.phone,
      nameCompany: data.nameCompany
    })
  })
  useEffect(() => {
    console.log('RESULT', resultRegister.data)
    console.log('ERROR', resultRegister.error)
    if (resultRegister.data) {
      // toast.success(resultRegister.data.data.message)
      toast.success('Đăng ký tài khoản thành công')
      navigate('/sign-in')
    }
    if (resultRegister.error) {
      const formError = (resultRegister.error as any)?.data?.message || resultRegister.error
      if (formError) {
        if (formError === 'translations.user exited') {
          setError('email', {
            message: 'Email đã tồn tại',
            type: 'Server'
          })
        } else {
          toast.error(formError.error)
        }
        // Object.keys(formError).forEach((key) => {
        //   setError(key as keyof Omit<FormData, 'phone'>, {
        //     message: formError,
        //     type: 'Server'
        //   })
        //   // setError(key as keyof Omit<FormData, 'phone'>, {
        //   //   message: formError,
        //   //   type: 'Server'
        //   // })
        // })
      }
    }
    console.log('resultRegister=>', resultRegister)
  }, [resultRegister])
  return (
    <div className='flex h-screen'>
      <Helmet>
        <title>Construction | Đăng ký</title>
        <meta name='description' content={'Đăng ký sử dụng Vickee Application'} />
      </Helmet>
      <div className='items-center justify-center flex-1 hidden text-black bg-white lg:flex'>
        <div className='max-w-md text-center'>
          <img src='/assets/logo.svg' height={500} width={600} alt='' />
        </div>
      </div>
      <div className='flex items-center justify-center w-full bg-gray-100 lg:w-1/2'>
        <div className='w-full max-w-md p-6'>
          <h1 className='mb-6 text-3xl font-semibold text-center text-black'>Sign Up</h1>
          <h1 className='mb-6 text-sm font-semibold text-center text-gray-500'>
            Join to Our Community with all time access and free{' '}
          </h1>
          <div className='flex flex-col items-center justify-between mt-4 lg:flex-row'>
            <div className='w-full mb-2 lg:w-1/2 lg:mb-0'>
              <button
                type='button'
                className='flex items-center justify-center w-full gap-2 p-2 text-sm text-gray-600 transition-colors duration-300 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' className='w-4' id='google'>
                  <path
                    fill='#fbbb00'
                    d='M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z'
                  ></path>
                  <path
                    fill='#518ef8'
                    d='M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z'
                  ></path>
                  <path
                    fill='#28b446'
                    d='m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z'
                  ></path>
                  <path
                    fill='#f14336'
                    d='m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z'
                  ></path>
                </svg>{' '}
                Sign Up with Google{' '}
              </button>
            </div>
            <div className='w-full ml-0 lg:w-1/2 lg:ml-2'>
              <button
                type='button'
                className='flex items-center justify-center w-full gap-2 p-2 text-sm text-gray-600 transition-colors duration-300 bg-white border border-gray-200 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200'
              >
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' id='github' className='w-4'>
                  <path d='M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z'></path>
                </svg>{' '}
                Sign Up with Github{' '}
              </button>
            </div>
          </div>
          <div className='mt-4 text-sm text-center text-gray-600'>
            <p>or with email</p>
          </div>
          <form onSubmit={onSubmit} className='space-y-4'>
            <Input
              name='email'
              className='mt-6'
              placeholder='Email'
              register={register}
              type='email'
              errorMessage={errors.email?.message}
            />
            <Input
              name='phone'
              className='mt-3'
              placeholder='Số điện thoại'
              register={register}
              errorMessage={errors.phone?.message}
              autoComplete='on'
            />
            <Input
              name='nameCompany'
              className='mt-3'
              placeholder='Tên công ty'
              register={register}
              autoComplete='on'
              errorMessage={errors.nameCompany?.message}
              // rules={rules.confirm_password}
            />
            <Button
              type='submit'
              className='flex items-center justify-center w-full p-2 text-white transition-colors duration-300 rounded-md bg-gradient-to-br from-orange-200 via-orange-300 to-yellow-200 hover:bg-gradient-to-tl focus:outline-none focus:ring-2 focus:ring-offset-2'
              isLoading={resultRegister.isLoading}
              disabled={resultRegister.isLoading}
            >
              Đăng ký
            </Button>
          </form>
          <div className='mt-4 text-sm text-center text-gray-600'>
            <p>
              Already have an account?{' '}
              <Link to={'/sign-in'} className='text-black hover:underline'>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
