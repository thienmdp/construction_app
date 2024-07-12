import React from 'react'
import { Avatar as AvatarAntd, Popover, Tooltip } from 'antd'
import { User } from '@/types/user.type'

interface Props {
  user?: User
  label?: string
}

export default function Avatar({ user }: Props) {
  return (
    <Tooltip
      color='#fa4117e1'
      placement='topLeft'
      className='cursor-pointer'
      title={user?.userProfile?.fullName || 'No user'}
    >
      <AvatarAntd
        alt={user?.userProfile?.fullName}
        src={user?.userProfile?.avatar || user?.userProfile?.absoluteAvatarLink}
      />
    </Tooltip>
  )
}
