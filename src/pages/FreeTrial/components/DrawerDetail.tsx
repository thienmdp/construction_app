import { Card, Drawer, Tabs } from 'antd'
import React, { useState } from 'react'
import Checklist_1 from './Checklist_1'
import Checklist_2 from './Checklist_2'
import Checklist_3 from './Checklist_3'
import Checklist_4 from './Checklist_4'
import { convertGrade } from '@/utils/utils'

export default function DrawerDetail({ selectedItem, onClose, openDrawer }: any) {
  const [lock, setlock] = useState<boolean>(true)
  const [checklistCurrent, setchecklistCurrent] = useState<string>('1')
  const [scores, setScores] = useState([0, 0, 0, 0])

  const updateScore = (index: number, score: number) => {
    const newScores = [...scores]
    newScores[index] = score
    setScores(newScores)
  }

  const itemsTab = [
    {
      label: 'Điều kiện cần thiết',
      key: '1',
      children: <Checklist_1 index={0} setLock={setlock} setScore={(score: number) => updateScore(0, score)} />
    },
    {
      label: 'Điều kiện xem xét',
      key: '2',
      children: <Checklist_2 index={1} setScore={(score: number) => updateScore(1, score)} />,
      disabled: lock
    },
    {
      label: 'Tiêu chí đánh giá',
      key: '3',
      children: <Checklist_3 index={2} setScore={(score: number) => updateScore(2, score)} />,
      disabled: lock
    },
    {
      label: 'Định hướng giải pháp',
      key: '4',
      children: <Checklist_4 index={3} setScore={(score: number) => updateScore(3, score)} />,
      disabled: lock
    }
  ]

  return (
    <>
      <Drawer title='Chấm điểm công trình' width={'100%'} onClose={onClose} open={openDrawer}>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-x-4'>
          <div className='grid col-span-1 gap-4 h-fit'>
            <Card title='Thông tin công trình' hoverable>
              {selectedItem && (
                <div>
                  <p>Product Name: {selectedItem.productName}</p>
                  <p>Owner: {selectedItem.owner}</p>
                  <p>Address: {selectedItem.address}</p>
                  <p>Phone: {selectedItem.phone}</p>
                </div>
              )}
            </Card>
            <Card title='Kết quả'>
              <div>
                <p>
                  Công trình của bạn đạt mức {convertGrade(scores[parseInt(checklistCurrent) - 1])} với{' '}
                  {scores[parseInt(checklistCurrent) - 1]} %
                </p>
              </div>
            </Card>
          </div>
          <div className='col-span-1 sm:col-span-2'>
            <Tabs defaultActiveKey={checklistCurrent} type='card' items={itemsTab} onChange={setchecklistCurrent} />
          </div>
        </div>
      </Drawer>
    </>
  )
}
