import React from 'react'
import { Dialog } from '@headlessui/react'
import { Formik } from 'formik'
import { Form, Field, ErrorMessage, FormikState } from 'formik'
import * as Yup from 'yup'
import { useMutation } from '@apollo/client'
import REGISTER_USER from '@graphql/mutations/registerUser'
import { slugify } from '@utils/helper'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Loader from 'react-spinners/SyncLoader'

interface IRegisterUser {
  showModal: boolean
  setShowModal: (arg0: boolean) => void
}

interface IFormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const RegisterUser: React.FC<IRegisterUser> = ({ showModal, setShowModal }) => {
  const [registerUser] = useMutation(REGISTER_USER)

  const validationSchema = Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    password: Yup.string().required().min(6),
    confirmPassword: Yup.string()
      .required()
      .oneOf([Yup.ref('password'), null], 'Password must match.'),
  })

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
  const onSubmitHandler = (
    values: IFormValues,
    {
      resetForm,
    }: { resetForm: (nextState?: Partial<FormikState<IFormValues>>) => void }
  ) => {
    registerUser({
      variables: {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
        username: slugify(
          `${values.firstName.toLowerCase()} ${values.lastName.toLowerCase()}`
        ),
      },
      onCompleted(data) {
        toast.success(
          data?.user ? `${data?.user?.username} registered` : 'User Registered'
        )
        resetForm()
      },
      onError(error) {
        toast.error(error.message)
      },
    })
  }

  return (
    <Dialog
      open={showModal}
      onClose={() => setShowModal(false)}
      className='relative z-50'
    >
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <Dialog.Panel>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme={'colored'}
        />
        <div className='fixed inset-0 bg-white max-w-[650px] mx-auto max-h-[800px] mt-7 rounded-md'>
          <div className='max-w-[500px] mx-auto py-10 px-8'>
            <button
              className='absolute right-[18px] top-[14px] text-lg outline-none'
              onClick={() => setShowModal(false)}
            >
              <i className='fas fa-times text-black opacity-40'></i>
            </button>
            <h3 className='text-[#333] font-medium text-[30px] text-center font-raleway'>
              Register For Enests
            </h3>
            <div className='text-sm mt-[10px] mb-[30px] text-[#505050] text-center'>
              Already registered?{' '}
              <button className='text-primary font-semibold cursor-pointer outline-none'>
                Login
              </button>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitHandler}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className='mb-4'>
                    <label className='text-[15px] text-[#575757]'>
                      First Name
                    </label>
                    <Field
                      type='text'
                      name='firstName'
                      className={
                        errors.firstName && touched.firstName
                          ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                          : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                      }
                    />
                    <ErrorMessage
                      name='firstName'
                      component='div'
                      className='text-red-400 text-[80%]'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='text-[15px] text-[#575757]'>
                      Last Name
                    </label>
                    <Field
                      type='text'
                      name='lastName'
                      className={
                        errors.lastName && touched.lastName
                          ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                          : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                      }
                    />
                    <ErrorMessage
                      name='lastName'
                      component='div'
                      className='text-red-400 text-[80%]'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='text-[15px] text-[#575757]'>
                      Email Address
                    </label>
                    <Field
                      type='email'
                      name='email'
                      className={
                        errors.email && touched.email
                          ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                          : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                      }
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='text-red-400 text-[80%]'
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='text-[15px] text-[#575757]'>
                      Password
                    </label>
                    <Field
                      type='password'
                      name='password'
                      className={
                        errors.password && touched.password
                          ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                          : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                      }
                    />
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='text-red-400 text-[80%]'
                    />
                  </div>
                  <div className='mb-11'>
                    <label className='text-[15px] text-[#575757]'>
                      Confirm Password
                    </label>
                    <Field
                      type='password'
                      name='confirmPassword'
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? 'block w-full px-3 py-[9.6px] border border-red-400 bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                          : 'block w-full px-3 py-[9.6px] border border-[#e4e4e4] bg-[#f5f8fc] text-[#495057] rounded-[3px] outline-none focus:ring-1 ring-[#4d2573] text-sm focus:shadow-lg transition-all ease-out mt-2'
                      }
                    />
                    <ErrorMessage
                      name='confirmPassword'
                      component='div'
                      className='text-red-400 text-[80%]'
                    />
                  </div>
                  <button
                    type='submit'
                    className='mt-11 px-[70px] py-[10px] bg-primary hover:bg-white border-[2px] border-primary hover:text-primary text-white text-[15px] font-semibold text-center tracking-[1px] leading-[1.5] cur block rounded-full cursor-pointer mx-auto'
                  >
                    {isSubmitting ? (
                      <Loader loading={true} color='#fff' size={10} />
                    ) : (
                      'Register'
                    )}
                  </button>
                  <p className='text-base max-w-[520px] text-[#505050] leading-6 py-5 text-center'>
                    By continuing, you agree to receive emails from Enests,
                    Terms & Conditions and Privacy Policy.
                  </p>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default RegisterUser
