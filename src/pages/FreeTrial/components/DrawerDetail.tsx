import { Card, Drawer, Tabs } from 'antd'
import React, { useState } from 'react'
import Checklist_1 from './Checklist_1'
import Checklist_2 from './Checklist_2'
import Checklist_3 from './Checklist_3'
import Checklist_4 from './Checklist_4'
import { convertGrade } from '@/utils/utils'
import { InfoCircleOutlined } from '@ant-design/icons'

export default function DrawerDetail({ selectedItem, onClose, openDrawer }: any) {
  const [lock, setlock] = useState<boolean>(true)
  const [checklistCurrent, setchecklistCurrent] = useState<string>('1')
  const [scores, setScores] = useState([0, 0, 0, 0])
  const [dataTCDG, setDataTCDG] = useState<any>()

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
      children: <Checklist_3 index={2} setScore={(score: number) => updateScore(2, score)} setDataTCDG={setDataTCDG} />,
      disabled: lock
    },
    {
      label: 'Định hướng giải pháp',
      key: '4',
      children: <Checklist_4 index={3} setScore={(score: number) => updateScore(3, score)} dataTCDG={dataTCDG} />,
      disabled: lock
    }
  ]

  return (
    <>
      <Drawer title='Đánh giá mức HQNL của công trình”' width={'100%'} onClose={onClose} open={openDrawer}>
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
                {scores[parseInt(checklistCurrent) - 1] === 0 && <p>Chưa có điểm...</p>}
                {scores[parseInt(checklistCurrent) - 1] !== 0 && (
                  <p className='pb-4'>
                    Công trình của bạn đạt{' '}
                    <b>
                      Mức {convertGrade(scores[parseInt(checklistCurrent) - 1])} với{' '}
                      {scores[parseInt(checklistCurrent) - 1]}%
                    </b>
                  </p>
                )}
              </div>
            </Card>
            <div className='p-4 border-2 rounded-lg border-slate-400 bg-slate-100/80'>
              <div className='flex items-center justify-between mb-2 text-base font-semibold'>
                <p>Chú thích</p>
                <InfoCircleOutlined />
              </div>
              <ul>
                <li className='mb-1'>- Mức 1: Đạt trên 75% tổng số điểm</li>
                <li className='mb-1'>- Mức 2: Đạt từ 50-75% tổng số điểm</li>
                <li className='mb-1'>- Mức 3: Dưới 50% số điểm</li>
              </ul>
            </div>
          </div>
          <div className='col-span-1 sm:col-span-2'>
            <Tabs defaultActiveKey={checklistCurrent} type='card' items={itemsTab} onChange={setchecklistCurrent} />
          </div>
        </div>
      </Drawer>
    </>
  )
}
