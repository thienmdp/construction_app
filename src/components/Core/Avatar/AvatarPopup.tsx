import React from 'react'
import { Avatar as AvatarAntd, Popover, Tag, Tooltip } from 'antd'
import { User } from '@/types/user.type'
import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'

interface Props {
  user?: User
  label?: string
}

export default function AvatarPopup({ user }: Props) {
  const content = (
    <>
      {user && (
        <div className='-m-3 text-gray-900 bg-slate-100 rounded-lg shadow max-w-[450px]'>
          <div className='h-32 overflow-hidden rounded-t-lg'>
            <img
              className='object-center w-full'
              src='https://asset.gecdesigns.com/img/wallpapers/beautiful-fantasy-wallpaper-ultra-hd-wallpaper-4k-sr10012418-1706506236698-cover.webp'
              alt='Mountain'
            />
          </div>
          <div className='flex items-start px-4 py-1'>
            <div className='relative -mt-24 overflow-hidden border-white rounded-full w-28 h-28'>
              <img
                className='object-cover object-center h-28'
                src={user?.userProfile?.avatar || user?.userProfile?.absoluteAvatarLink}
                alt='hinh anh dai dien'
              />
            </div>
            <div className='ml-5 -mt-20 text-white text-start'>
              <h2 className='mb-1 text-lg font-semibold capitalize'>
                {user.userProfile?.fullName}{' '}
                <Tag
                  className='ml-3'
                  bordered={false}
                  color={user.role === 'admin' ? 'geekblue-inverse' : 'default'}
                  icon={<UserOutlined />}
                >
                  {user?.role}
                </Tag>
              </h2>
              <div className='flex flex-wrap items-center justify-between gap-x-4'>
                {user.email && (
                  <h2 className=''>
                    <MailOutlined className='mr-1' /> {user.email}
                  </h2>
                )}
                {user.userProfile?.phone && (
                  <h2 className=''>
                    <PhoneOutlined className='mr-1' /> {user.userProfile?.phone || '--'}
                  </h2>
                )}
                {user.userProfile?.permanentAddress && (
                  <h2 className=''>
                    <HomeOutlined className='mr-1' /> {user.userProfile?.permanentAddress || '--'}
                  </h2>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
  return (
    <Tooltip
      color='#fa4117e1'
      placement='topLeft'
      className='cursor-pointer'
      title={user?.userProfile?.fullName || 'No user'}
    >
      <Popover content={content} trigger='click' placement='bottomLeft' arrow={false}>
        <AvatarAntd
          alt={user?.userProfile?.fullName}
          src={user?.userProfile?.avatar || user?.userProfile?.absoluteAvatarLink}
        />
      </Popover>
    </Tooltip>
  )
}
