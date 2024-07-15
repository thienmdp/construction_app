import { Card, Drawer, Popover, Tabs, Tooltip } from 'antd'
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
  const [scores, setScores] = useState([
    { score: 0, percent: 0 },
    { score: 0, percent: 0 },
    { score: 0, percent: 0 },
    { score: 0, percent: 0 }
  ])
  const [dataTCDG, setDataTCDG] = useState<[]>()

  const updateScore = (index: number, score: number, percent: number) => {
    const newScores = [...scores]
    newScores[index] = { score: score, percent: percent }
    setScores(newScores)
  }

  const itemsTab = [
    {
      label: 'Điều kiện cần thiết',
      key: '1',
      children: (
        <Checklist_1
          index={0}
          setLock={setlock}
          setScore={(score: number, percent: number) => updateScore(0, score, percent)}
        />
      )
    },
    {
      label: 'Điều kiện xem xét',
      key: '2',
      children: <Checklist_2 index={1} setScore={(score: number, percent: number) => updateScore(1, score, percent)} />,
      disabled: lock
    },
    {
      label: 'Đánh giá tích hợp',
      key: '3',
      children: (
        <Checklist_3
          index={2}
          setScore={(score: number, percent: number) => updateScore(2, score, percent)}
          setDataTCDG={setDataTCDG}
        />
      ),
      disabled: lock
    },
    {
      label: 'Định hướng giải pháp',
      key: '4',
      children: (
        <Checklist_4
          index={3}
          setScore={(score: number, percent: number) => updateScore(3, score, percent)}
          dataTCDG={dataTCDG}
        />
      ),
      disabled: lock
    }
  ]
  console.log('checklistCurrent', checklistCurrent)
  console.log('scores', scores)
  console.log('dataTCDG', dataTCDG)
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
                {scores[parseInt(checklistCurrent) - 1].percent === 0 && <p>Chưa có điểm...</p>}
                {/* {scores[parseInt(checklistCurrent) - 1].percent !== 0 && (
                  <p className='pb-4'>
                    Công trình của bạn đạt{' '}
                    <b>
                      Mức {convertGrade(scores[parseInt(checklistCurrent) - 1].percent)} với{' '}
                      {scores[parseInt(checklistCurrent) - 1].percent}%
                    </b>
                  </p>
                )} */}
                {scores[parseInt(checklistCurrent) - 1].percent !== 0 && (
                  <p className='pb-4'>
                    Công trình của bạn đạt <b>tỷ lệ {scores[parseInt(checklistCurrent) - 1].percent}%</b>
                  </p>
                )}
                {scores[parseInt(checklistCurrent) - 1].score !== 0 && (
                  <p className='pb-4'>
                    Điểm số: <b>{scores[parseInt(checklistCurrent) - 1].score}</b>
                  </p>
                )}
                {checklistCurrent === '3' || checklistCurrent === '4' ? (
                  <>
                    {scores[parseInt(checklistCurrent) - 1].score !== 0 && (
                      <p className='pb-4'>
                        Mức hiệu quả năng lượng:{' '}
                        <b>
                          {scores[parseInt(checklistCurrent) - 1].score < 50 && 'Không đạt'}
                          {scores[parseInt(checklistCurrent) - 1].score === 51 && 'Đạt'}
                          {scores[parseInt(checklistCurrent) - 1].score >= 52 &&
                            scores[parseInt(checklistCurrent) - 1].score <= 65 &&
                            'Đạt hạng bạc (Silver)'}
                          {scores[parseInt(checklistCurrent) - 1].score >= 66 &&
                            scores[parseInt(checklistCurrent) - 1].score <= 80 &&
                            'Đạt hạng vàng (Gold)'}
                          {scores[parseInt(checklistCurrent) - 1].score >= 81 && 'Đạt hạng bạch kim (Platinum)'}
                        </b>
                      </p>
                    )}
                  </>
                ) : (
                  ''
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
            {checklistCurrent === '3' && (
              <div className='flex items-center justify-between w-full'>
                <Tooltip title='Bảng quy đổi đánh giá mức hiệu quả'>
                  <Popover
                    content={
                      <div className='w-full text-sm text-left text-gray-500 table-auto'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                          <tr>
                            <th scope='col' className='px-6 py-3 '>
                              TT
                            </th>
                            <th scope='col' className='py-3 min-w-[100px]'>
                              KẾT QUẢ (Điểm)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[120px]'>
                              TỈ LỆ (%)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[220px]'>
                              MỨC GIẢM DMNL (kWh/m2/năm)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[150px]'>
                              MỨC HQNL
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>1</td>
                            <td className='px-6 py-4'>0-50</td>
                            <td className='px-6 py-4'>Dưới 50%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Không đạt</td>
                          </tr>
                          <tr className='border-b bg-gray-50'>
                            <td className='px-6 py-4'>2</td>
                            <td className='px-6 py-4'>51</td>
                            <td className='px-6 py-4'>50%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt</td>
                          </tr>
                          <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>3</td>
                            <td className='px-6 py-4'>51-65</td>
                            <td className='px-6 py-4'>50- dưới 65%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Bạc (Silver)</td>
                          </tr>
                          <tr className='border-b bg-gray-50'>
                            <td className='px-6 py-4'>4</td>
                            <td className='px-6 py-4'>66-80</td>
                            <td className='px-6 py-4'>65- dưới 80%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Vàng (Gold)</td>
                          </tr>
                          <tr className='bg-white'>
                            <td className='px-6 py-4'>5</td>
                            <td className='px-6 py-4'>81-101</td>
                            <td className='px-6 py-4'>80-100%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Bạch kim (Platium)</td>
                          </tr>
                        </tbody>
                      </div>
                    }
                    trigger='click'
                    placement='bottomLeft'
                    arrow={false}
                    className='flex items-center justify-between w-full cursor-pointer'
                  >
                    <p>Bảng quy đổi đánh giá mức hiệu quả</p>
                    <InfoCircleOutlined />
                  </Popover>
                </Tooltip>
              </div>
            )}
            {checklistCurrent === '4' && (
              <div className='flex items-center justify-between w-full'>
                <Tooltip title='Bảng quy đổi đánh giá mức hiệu quả'>
                  <Popover
                    content={
                      <div className='w-full text-sm text-left text-gray-500 table-auto'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                          <tr>
                            <th scope='col' className='px-6 py-3 '>
                              TT
                            </th>
                            <th scope='col' className='py-3 min-w-[100px]'>
                              KẾT QUẢ (Điểm)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[120px]'>
                              TỈ LỆ (%)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[220px]'>
                              MỨC GIẢM DMNL (kWh/m2/năm)
                            </th>
                            <th scope='col' className='px-6 py-3 min-w-[150px]'>
                              MỨC HQNL
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>1</td>
                            <td className='px-6 py-4'>0-50</td>
                            <td className='px-6 py-4'>Dưới 50%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Không đạt</td>
                          </tr>
                          <tr className='border-b bg-gray-50'>
                            <td className='px-6 py-4'>2</td>
                            <td className='px-6 py-4'>51</td>
                            <td className='px-6 py-4'>50%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt</td>
                          </tr>
                          <tr className='bg-white border-b'>
                            <td className='px-6 py-4'>3</td>
                            <td className='px-6 py-4'>51-65</td>
                            <td className='px-6 py-4'>50- dưới 65%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Bạc (Silver)</td>
                          </tr>
                          <tr className='border-b bg-gray-50'>
                            <td className='px-6 py-4'>4</td>
                            <td className='px-6 py-4'>66-80</td>
                            <td className='px-6 py-4'>65- dưới 80%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Vàng (Gold)</td>
                          </tr>
                          <tr className='bg-white'>
                            <td className='px-6 py-4'>5</td>
                            <td className='px-6 py-4'>81-101</td>
                            <td className='px-6 py-4'>80-100%</td>
                            <td className='px-6 py-4'>Dựa trên KQ mở phòng</td>
                            <td className='px-6 py-4'>Đạt HQNL hạng Bạch kim (Platium)</td>
                          </tr>
                        </tbody>
                      </div>
                    }
                    trigger='click'
                    placement='bottomLeft'
                    arrow={false}
                    className='flex items-center justify-between w-full cursor-pointer'
                  >
                    <p>Bảng quy đổi đánh giá mức hiệu quả</p>
                    <InfoCircleOutlined />
                  </Popover>
                </Tooltip>
              </div>
            )}
          </div>
          <div className='col-span-1 sm:col-span-2'>
            <Tabs defaultActiveKey={checklistCurrent} type='card' items={itemsTab} onChange={setchecklistCurrent} />
          </div>
        </div>
      </Drawer>
    </>
  )
}
