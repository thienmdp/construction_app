import Button from '@/components/Core/Button'
import Input from '@/components/Core/Input'
import { HandleSubmitPromise } from '@/utils/utils'
import { PlusOutlined } from '@ant-design/icons'
import { Button as ButtonAntd, Form, Modal } from 'antd'
import React, { useState } from 'react'

export default function ModalCreateConstruction({ onConstructionAdded }: any) {
  const [form] = Form.useForm()
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const onFinish = (values: any) => {
    setLoading(true)
    const promise = new Promise<void>((resolve) => {
      setTimeout(() => {
        let constructions = JSON.parse(localStorage.getItem('constructions') || '[]')
        constructions.push(values)
        localStorage.setItem('constructions', JSON.stringify(constructions))
        resolve()
      }, 3000)
    })
    HandleSubmitPromise({
      promise,
      title: `Tạo thành công`,
      thenFunc: () => {
        setLoading(false)
        setModalOpen(false)
        form.resetFields()
        onConstructionAdded()
      }
    })
  }
  return (
    <>
      <ButtonAntd
        className=' text-start sm:text-center min-w-[128px]'
        icon={<PlusOutlined />}
        onClick={() => setModalOpen(true)}
      >
        Công trình
      </ButtonAntd>
      <Modal
        title='Thêm mới công trình'
        style={{ top: 45 }}
        width={850}
        open={modalOpen}
        footer={false}
        onCancel={() => {
          setModalOpen(false)
          setLoading(false)
        }}
      >
        <Form name='dynamic_form_item' form={form} onFinish={onFinish} className='m-4'>
          <>
            <Form.Item name='productName' rules={[{ required: true, message: 'Tên công trình không được để trống' }]}>
              <Input label='Tên công trình:' placeholder='Tên công trình' classNameError='hidden' autoComplete='on' />
            </Form.Item>
            <Form.Item name='owner' rules={[{ required: true, message: 'Chủ đầu tư không được để trống' }]}>
              <Input label='Chủ đầu tư:' placeholder='Chủ đầu tư' classNameError='hidden' autoComplete='on' />
            </Form.Item>
            <div className='grid grid-cols-2 gap-x-4'>
              <Form.Item name='address'>
                <Input label='Điạ chỉ:' placeholder='Địa chỉ' classNameError='hidden' autoComplete='on' />
              </Form.Item>
              <Form.Item name='phone'>
                <Input label='Điện thoại:' placeholder='Điện thoại' classNameError='hidden' autoComplete='on' />
              </Form.Item>
            </div>
          </>
          <Form.Item className='flex justify-center'>
            <Button
              type='submit'
              className='mt-4 flex items-center justify-center w-[200px] p-2 text-white bg-red_app hover:bg-red_app/80 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
              isLoading={loading}
              disabled={loading}
            >
              Xác nhận
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
