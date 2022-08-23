import React, { useState, useRef } from 'react'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

const ProofImage = ({
  setFieldValue,
}: {
  setFieldValue: (field: string, value: string) => void
}) => {
  const [proofImage, setProofImage] = useState('')
  const [show, setShow] = useState(false)
  const fileFormat = ['jpeg', 'jpg', 'png', 'JPEG', 'JPG', 'PNG']
  const maximumFileSize = 2000000
  const target = useRef(null)

  const handleClick = (e: any) => {
    const file = e.target.files[0]

    if (file) {
      const extension = file.name.split('.')[1]

      if (file.size > maximumFileSize) {
        return alert('Only 2MB image is allowed!')
      }

      if (fileFormat.indexOf(extension) < 0) {
        return alert('Provided File not allowed!')
      }
      setFieldValue('proofImage', file)
      setProofImage(URL?.createObjectURL(file))
    }
  }
  const renderProofImage = () => {
    if (proofImage) {
      return (
        <img
          className='max-w-[650px] mx-auto py-[10px] w-full'
          src={proofImage}
          alt='Company Logo'
        />
      )
    } else {
      ;<div className='upload-icon'>
        <span>
          <i className='fas fa-cloud-upload-alt'></i>
        </span>
      </div>
    }
  }

  return (
    <div className='max-w-[900px] mx-auto mt-[30px]'>
      <div className='pt-10 pb-[100px] px-[30px] shadow-lg'>
        <div className='text-center'>
          <span className='text-[#4d2573] text-[42px]'>
            <i className='far fa-images' />
          </span>
          <h2 className='capitalize text-[#333] text-[34px] font-medium font-raleway'>
            Proof Of{' '}
            <span className='text-[#4d2573] font-semibold'>Purchase</span>
          </h2>
          <p className='text-[#505050] text-base leading-6'>
            Please upload an image or file for your proof of purchase (required
            but we will not publish it){' '}
            <span
              className='italic text-[#4d2573] font-semibold cursor-pointer'
              onClick={() => setShow(true)}
              ref={target}
            >
              why?
            </span>
            <Overlay target={target.current} show={show} placement='right'>
              {(props) => (
                <Tooltip id='overlay-example' {...props}>
                  We need an image or document of your proof of purchase to
                  verify your review and make it live.
                </Tooltip>
              )}
            </Overlay>
            {/* TODO: tooltip styling */}
          </p>
        </div>
        <form action='' className='mt-10 px-[15px]'>
          <label
            className='text-[#575757] text-[15px] mb-2 inline-block'
            htmlFor=''
          >
            Upload your proof of purchase
          </label>
          <div className='py-[30px] px-[10px] border border-[#e4e4e4] text-center'>
            {renderProofImage()}
            <div className='w-[225px] relative mx-auto'>
              <input
                className='absolute inset-0 w-[225px] opacity-0 py-[14px] cursor-pointer'
                type='file'
                onChange={handleClick}
              />
              <label
                className='px-[45px] py-3 bg-primary text-white text-base block rounded-full cursor-pointer'
                htmlFor=''
              >
                Choose a file
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProofImage
