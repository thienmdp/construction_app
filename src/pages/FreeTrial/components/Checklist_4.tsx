import { initialChecklist4 } from '@/data/dummy'
import { convertGrade, myPromiseHandle } from '@/utils/utils'
import { Button, InputNumber, Table, Typography, Select } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'

const { Option } = Select

interface Props {
  index: number
  dataTCDG: any
  setScore: (score: number) => void
}

interface Detail {
  STT?: string | undefined
  item: string
  DiemCu: number
  DiemMoi: number | null
  MucDo: string | null
  ChiPhi: string | null
  sectionKey?: string | undefined
}

interface Section {
  STT: string
  NoiDung: string
  ChiTiet: Detail[]
  key: string
}

export default function Checklist_4({ index, setScore, dataTCDG }: Props) {
  const initialData = dataTCDG.map((section: any) => ({
    ...section,
    ChiTiet: section.ChiTiet.map((detail: any) => ({
      STT: detail.STT,
      item: detail.item,
      DiemCu: detail.total,
      DiemMoi: null,
      MucDo: null,
      ChiPhi: null,
      sectionKey: section.key
    }))
  }))

  const [data, setData] = useState<Section[]>(initialData)
  const [allScoresEntered, setAllScoresEntered] = useState<boolean>(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const allEntered = data.every((section) =>
      section.ChiTiet.every((detail) => detail.DiemMoi !== null && detail.MucDo !== null && detail.ChiPhi !== null)
    )
    setAllScoresEntered(allEntered)
  }, [data])

  const handleScoreChange = (value: number | null, item: string, sectionKey: string | undefined, field: string) => {
    const newData = data.map((section) => {
      if (section.key === sectionKey) {
        const newChiTiet = section.ChiTiet.map((detail) => {
          if (detail.item === item) {
            return { ...detail, [field]: value }
          }
          return detail
        })
        return { ...section, ChiTiet: newChiTiet }
      }
      return section
    })
    setData(newData)
  }

  const handleSelectChange = (value: string | null, item: string, sectionKey: string | undefined, field: string) => {
    const newData = data.map((section) => {
      if (section.key === sectionKey) {
        const newChiTiet = section.ChiTiet.map((detail) => {
          if (detail.item === item) {
            return { ...detail, [field]: value }
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
      title: 'Điểm Cũ',
      dataIndex: 'DiemCu',
      key: 'DiemCu'
    },
    {
      title: 'Điểm Mới',
      key: 'DiemMoi',
      render: (text: any, record: Detail) => (
        <InputNumber
          min={0}
          max={3}
          value={record.DiemMoi}
          onChange={(value) => handleScoreChange(value, record.item, record?.sectionKey, 'DiemMoi')}
          className='w-full'
        />
      )
    },
    {
      title: 'Mức Độ',
      key: 'MucDo',
      width: 100,
      render: (text: any, record: Detail) => (
        <Select
          value={record.MucDo}
          onChange={(value) => handleSelectChange(value, record.item, record?.sectionKey, 'MucDo')}
          className='w-full'
        >
          <Option value='Dễ'>Dễ</Option>
          <Option value='Khó'>Khó</Option>
        </Select>
      )
    },
    {
      title: 'Chi Phí',
      key: 'ChiPhi',
      width: 150,
      render: (text: any, record: Detail) => (
        <Select
          value={record.ChiPhi}
          onChange={(value) => handleSelectChange(value, record.item, record?.sectionKey, 'ChiPhi')}
          className='w-full'
        >
          <Option value='Thấp'>Thấp</Option>
          <Option value='Trung bình'>Trung bình</Option>
          <Option value='Cao'>Cao</Option>
        </Select>
      )
    }
  ]

  const handleSubmit = () => {
    if (drawerRef.current) {
      drawerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const totalPossibleScore = data.reduce((acc, section) => acc + section.ChiTiet.length * 3, 0) // Assuming each new score can be max 3
    const totalAchievedScore = data.reduce(
      (acc, section) => acc + section.ChiTiet.reduce((accDetail, detail) => accDetail + (detail.DiemMoi ?? 0), 0),
      0
    )
    const percentageScore = (totalAchievedScore / totalPossibleScore) * 100

    toast
      .promise(myPromiseHandle(2500), {
        pending: 'Đang xử lý...',
        success: `Điều kiện cần thiết đạt mức ${convertGrade(percentageScore)}`,
        error: 'Hành động thất bại 🤯'
      })
      .then(() => {
        setScore(parseInt(percentageScore.toString()))
      })
  }

  return (
    <div ref={drawerRef} className='p-4 bg-white rounded-lg shadow' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
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
