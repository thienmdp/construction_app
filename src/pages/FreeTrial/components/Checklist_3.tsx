import { initialChecklist3 } from '@/data/dummy'
import { Button, InputNumber, Table, TableColumnsType, Typography } from 'antd'
import React, { useEffect, useState } from 'react'

interface Props {
  index: number
  setScore: (score: number) => void
}
interface Detail {
  STT?: string | undefined
  item: string
  Diem1: number | null
  Diem2: number | null
  Diem3: number | null
  total: number | null
  sectionKey?: string | undefined
}

interface Section {
  STT: string
  NoiDung: string
  ChiTiet: Detail[]
  key: string
}
export default function Checklist_3({ index, setScore }: Props) {
  const [data, setData] = useState<Section[]>(initialChecklist3)
  const [allScoresEntered, setAllScoresEntered] = useState<boolean>(false)

  useEffect(() => {
    const allEntered = data.every((section) =>
      section.ChiTiet.every((detail) => detail.Diem1 !== null && detail.Diem2 !== null && detail.Diem3 !== null)
    )
    setAllScoresEntered(allEntered)
  }, [data])

  const handleScoreChange = (value: number | null, item: string, sectionKey: string | undefined, field: string) => {
    const newData = data.map((section) => {
      if (section.key === sectionKey) {
        const newChiTiet = section.ChiTiet.map((detail) => {
          if (detail.item === item) {
            const updatedDetail = { ...detail, [field]: value }
            const total = (updatedDetail.Diem1 ?? 0) + (updatedDetail.Diem2 ?? 0) + (updatedDetail.Diem3 ?? 0)
            return { ...updatedDetail, total }
          }
          return detail
        })
        return { ...section, ChiTiet: newChiTiet }
      }
      return section
    })
    setData(newData)
  }

  const columns: TableColumnsType<Detail> = [
    {
      title: 'STT',
      dataIndex: 'STT',
      key: 'STT'
    },
    {
      title: 'Chi Tiết',
      dataIndex: 'item',
      key: 'item'
    },
    {
      title: 'Điểm tích hợp',
      children: [
        {
          title: '1',
          align: 'center',
          key: 'Diem1',
          render: (text: any, record: Detail) => (
            <InputNumber
              min={0}
              max={1}
              value={record.Diem1}
              onChange={(value) => handleScoreChange(value, record.item, record?.sectionKey, 'Diem1')}
              // className='w-full'
            />
          )
        },
        {
          title: '2',
          key: 'Diem2',
          align: 'center',
          render: (text: any, record: Detail) => (
            <InputNumber
              min={0}
              max={2}
              value={record.Diem2}
              onChange={(value) => handleScoreChange(value, record.item, record?.sectionKey, 'Diem2')}
              // className='w-full'
            />
          )
        },
        {
          title: '3',
          key: 'Diem3',
          align: 'center',
          render: (text: any, record: Detail) => (
            <InputNumber
              min={0}
              max={3}
              value={record.Diem3}
              onChange={(value) => handleScoreChange(value, record.item, record?.sectionKey, 'Diem3')}
              // className='w-full'
            />
          )
        }
      ]
    },
    {
      title: 'Tổng Điểm',
      dataIndex: 'total',
      align: 'center',
      key: 'total'
    }
  ]

  const handleSubmit = () => {
    const totalPossibleScore = data.reduce((acc, section) => acc + section.ChiTiet.length * 9, 0)
    const totalAchievedScore = data.reduce(
      (acc, section) => acc + section.ChiTiet.reduce((accDetail, detail) => accDetail + (detail.total ?? 0), 0),
      0
    )
    const percentageScore = (totalAchievedScore / totalPossibleScore) * 100

    setScore(percentageScore)
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow'>
      {data.map((section) => (
        <div key={section.key} className='mb-5'>
          <Typography.Title level={4} className='mb-2'>
            {section.STT}. {section.NoiDung}
          </Typography.Title>
          <Table
            columns={columns}
            dataSource={section.ChiTiet.map((item) => ({ ...item, sectionKey: section.key }))}
            pagination={false}
            rowKey='item'
            bordered
          />
        </div>
      ))}
      <div className='text-center'>
        <Button type='primary' onClick={handleSubmit} disabled={!allScoresEntered} className='mt-4'>
          Submit Scores
        </Button>
      </div>
    </div>
  )
}
