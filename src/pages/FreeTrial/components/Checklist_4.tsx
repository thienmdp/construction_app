import { improvementSolutions } from '@/data/dummy'
import { convertGrade, myPromiseHandle } from '@/utils/utils'
import { Button, InputNumber, Table, Typography, Select, TableColumnsType } from 'antd'
import React, { useEffect, useState, useRef } from 'react'
import { toast } from 'react-toastify'

interface Props {
  index: number
  dataTCDG: any
  setScore: (score: number, percent: number) => void
}

interface Detail {
  STT?: string
  item: string
  DiemCu: number
  DiemMoi: number | null
  difficulty: string | null
  cost: string | null
  sectionKey?: string
  GiaiPhapCaiTien: string[]
}

interface Section {
  STT: string
  NoiDung: string
  ChiTiet: Detail[]
  key: string
}

export default function Checklist_4({ index, setScore, dataTCDG }: Props) {
  const [data, setData] = useState<Section[]>([])
  const [totalScore, setTotalScore] = useState(0)

  // const [allScoresEntered, setAllScoresEntered] = useState<boolean>(false)
  useEffect(() => {
    if (dataTCDG && dataTCDG[0].ChiTiet) {
      const newData = dataTCDG.map((section: any) => ({
        ...section,
        ChiTiet: section.ChiTiet.map((detail: any) => ({
          STT: detail.STT,
          item: detail.item,
          DiemCu: detail.total,
          DiemMoi: null,
          difficulty: null,
          cost: null,
          GiaiPhapCaiTien: [],
          sectionKey: section.key
        }))
      }))
      setData(newData)
    }
  }, [dataTCDG])
  useEffect(() => {
    const total = data.reduce(
      (totalAcc, section) =>
        totalAcc +
        section.ChiTiet.reduce(
          (sectionAcc, detail) => sectionAcc + (detail.DiemMoi !== null ? detail.DiemMoi : detail.DiemCu),
          0
        ),
      0
    )
    setTotalScore(total)
  }, [data])
  // useEffect(() => {
  //   if (data && data[0]?.ChiTiet) {
  //     const allEntered = data.every((section) =>
  //       section.ChiTiet.every((detail) => detail.DiemMoi !== null && detail.difficulty !== null && detail.cost !== null)
  //     )
  //     setAllScoresEntered(allEntered)
  //   }
  // }, [data])

  const mapScoreToSolutions = (item: string, newScore: number | null) => {
    if (newScore === null) return { solutions: [], difficulty: '', cost: '' }

    const conditions = improvementSolutions[item] || []
    let selectedSolution: { solutions: string[]; difficulty: string; cost: string } = {
      solutions: [],
      difficulty: '',
      cost: ''
    }

    conditions.forEach((condition) => {
      if (newScore >= condition.threshold) {
        selectedSolution = {
          solutions: condition.solutions,
          difficulty: condition.difficulty,
          cost: condition.cost
        }
      }
    })

    return selectedSolution
  }

  const handleScoreChange = (value: number | null, item: string, sectionKey?: string) => {
    if (!sectionKey) {
      console.error('No sectionKey provided for', item)
      return
    }

    const newData = data.map((section) => {
      if (section.key === sectionKey) {
        return {
          ...section,
          ChiTiet: section.ChiTiet.map((detail) => {
            if (detail.item === item) {
              const { solutions, difficulty, cost } = mapScoreToSolutions(item, value)
              return { ...detail, DiemMoi: value, GiaiPhapCaiTien: solutions, difficulty, cost }
            }
            return detail
          })
        }
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
      title: 'Điểm Cũ',
      dataIndex: 'DiemCu',
      key: 'DiemCu',
      width: 100,
      align: 'center'
    },
    {
      title: 'Điểm Mới',
      key: 'DiemMoi',
      render: (text: any, record: Detail) => (
        <InputNumber
          min={0}
          max={3}
          value={record.DiemMoi}
          onChange={(value) => {
            if (record.sectionKey) {
              handleScoreChange(value, record.item, record.sectionKey)
            }
          }}
          className='w-full'
        />
      )
    },
    {
      title: 'Giải Pháp Cải Tiến',
      dataIndex: 'GiaiPhapCaiTien',
      key: 'GiaiPhapCaiTien',
      render: (solutions: string[]) => solutions.map((solution, index) => <div key={index}>{solution}</div>)
    },
    {
      title: 'Mức Độ',
      width: 100,
      dataIndex: 'difficulty',
      key: 'difficulty'
    },
    {
      title: 'Chi Phí',
      width: 100,
      dataIndex: 'cost',
      key: 'cost'
    }
  ]

  const handleSubmit = () => {
    // const totalPossibleScore = data.reduce((acc, section) => acc + section.ChiTiet.length * 3, 0)
    // const totalAchievedScore = data.reduce(
    //   (acc, section) => acc + section.ChiTiet.reduce((accDetail, detail) => accDetail + (detail.DiemMoi ?? 0), 0),
    //   0
    // )
    const totalAchievedScore = data.reduce(
      (acc, section) =>
        acc +
        section.ChiTiet.reduce(
          (accDetail, detail) => accDetail + (detail.DiemMoi !== null ? detail.DiemMoi : detail.DiemCu),
          0
        ),
      0
    )
    const percentageScore = (totalAchievedScore / 101) * 100
    // const percentageScore = (totalAchievedScore / totalPossibleScore) * 100

    toast
      .promise(myPromiseHandle(2500), {
        pending: 'Đang xử lý...',
        success: `Điều kiện cần thiết đạt mức ${convertGrade(percentageScore)}`,
        error: 'Hành động thất bại 🤯'
      })
      .then(() => {
        setScore(totalAchievedScore, parseInt(percentageScore.toString()))
      })
  }

  return (
    <div className='p-4 bg-white rounded-lg shadow' style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      {data?.map((section) => (
        <div key={section.key} className='mb-5'>
          <Typography.Title level={4} className='mb-2'>
            {section.STT}. {section.NoiDung}
          </Typography.Title>
          <Table
            columns={columns}
            dataSource={section?.ChiTiet?.map((item) => ({ ...item, sectionKey: section.key }))}
            pagination={false}
            rowKey='item'
            bordered
          />
        </div>
      ))}
      <Typography.Title level={4} className='mt-4'>
        Total Score: {totalScore}
      </Typography.Title>
      <div className='text-center'>
        <Button
          type='primary'
          onClick={handleSubmit}
          // disabled={!allScoresEntered}
          className='mt-4'
        >
          Submit Scores
        </Button>
      </div>
    </div>
  )
}
