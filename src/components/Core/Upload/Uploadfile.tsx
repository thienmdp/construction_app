import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Button, message, Upload } from 'antd'
import type { GetProp, UploadFile, UploadProps } from 'antd'
import { baseURLAPI } from '@/constants/url'
import { getAccessToken } from '@/utils/utils'

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0]
type Props = {
  currentID: any
  typeDocs: number
  callbackSuccess?: any
}

export default function Uploadfile({ currentID, typeDocs, callbackSuccess }: Props) {
  const token = getAccessToken()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [uploading, setUploading] = useState(false)

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('id', currentID.toString())
    formData.append('type', typeDocs.toString())
    fileList.forEach((file) => {
      formData.append('files', file as FileType)
    })
    try {
      setUploading(true)
      const response = await fetch(baseURLAPI + '/file-total/upload-user-files', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData
      })
      setFileList([])
      callbackSuccess()
      message.success('Upload successfully.')
    } catch (error) {
      console.error('Upload error:', error)
      message.error('Upload failed.')
    } finally {
      setUploading(false)
    }
  }

  const props: UploadProps = {
    onRemove: (file) => {
      setFileList((currentFileList) => {
        const index = currentFileList.indexOf(file)
        const newFileList = currentFileList.slice()
        newFileList.splice(index, 1)
        return newFileList
      })
    },
    beforeUpload: (file) => {
      setFileList((currentFileList) => [...currentFileList, file])
      return false
    },
    fileList,
    multiple: true,
    accept:
      'image/jpeg, image/png, application/pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  }

  return (
    <div className='flex items-start justify-between mb-4'>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button type='primary' onClick={handleUpload} disabled={fileList.length === 0} loading={uploading}>
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </div>
  )
}
