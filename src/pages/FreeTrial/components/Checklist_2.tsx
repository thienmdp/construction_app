import { initialChecklist2 } from '@/data/dummy'
import { Detail, Section } from '@/types/checklist.type'
import { Button, InputNumber, Table, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
interface Props {
  index: number
  setScore: (score: number) => void
}

export default function Checklist_2({ index, setScore }: Props) {
  const [data, setData] = useState<Section[]>(initialChecklist2)
  const [allScoresEntered, setAllScoresEntered] = useState<boolean>(false)

  useEffect(() => {
    const allEntered = data.every((section) =>
      section.ChiTiet.every((detail) => detail.Diem !== null && detail.Diem >= 0)
    )
    setAllScoresEntered(allEntered)
  }, [data])

  const handleScoreChange = (value: number | null, item: string, sectionKey: string | undefined) => {
    const newData = data.map((section) => {
      if (section.key === sectionKey) {
        const newChiTiet = section.ChiTiet.map((detail) => {
          if (detail.item === item) {
            return { ...detail, Diem: value }
          }
          return detail
        })
        return { ...section, ChiTiet: newChiTiet }
      }
      return section
    })
    setData(newData)
  }

  const columns = [
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
      title: 'Điểm',
      key: 'Diem',
      render: (text: any, record: Detail, index: number) => (
        <InputNumber
          min={0}
          max={1}
          value={record.Diem}
          onChange={(value) => handleScoreChange(value, record.item, record?.sectionKey)}
          className='w-full'
        />
      )
    }
  ]

  const handleSubmit = () => {
    const totalPossibleScore = data.reduce((acc, section) => acc + section.ChiTiet.length, 0)
    const totalAchievedScore = data.reduce(
      (acc, section) => acc + section.ChiTiet.reduce((accDetail, detail) => accDetail + (detail.Diem ?? 0), 0),
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
