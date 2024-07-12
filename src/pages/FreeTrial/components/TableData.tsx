import React, { useEffect, useState } from 'react'
import { Input, Table, type TableProps } from 'antd'
import styled from 'styled-components'
import ModalCreateConstruction from './ModalCreateConstruction'
import DrawerDetail from './DrawerDetail'

interface DataType {
  key: string
  productName: string
  owner: string
  address: string
  phone: string
}

const Styled = styled.div`
  .ant-table .ant-table-container .ant-table-content table thead.ant-table-thead .ant-table-cell {
    background-color: lightgrey;
  }
`

export default function TableData() {
  const [data, setData] = useState<DataType[]>([])
  const [filterData, setFilterData] = useState<DataType[] | undefined>()
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedItem, setSelectedItem] = useState<DataType | undefined>()

  const showDrawer = (record: DataType) => {
    setSelectedItem(record)
    setOpenDrawer(true)
  }

  const onClose = () => {
    setOpenDrawer(false)
  }

  const search = (value: string) => {
    const filteredTable = data.filter((item) =>
      Object.values(item).some((k) => String(k).toLowerCase().includes(value.toLowerCase()))
    )
    setFilterData(filteredTable)
  }

  useEffect(() => {
    const loadData = () => {
      const storedData = JSON.parse(localStorage.getItem('constructions') || '[]')
      setData(storedData)
    }
    loadData()
  }, [])

  const handleConstructionAdded = () => {
    const storedData = JSON.parse(localStorage.getItem('constructions') || '[]')
    setData(storedData)
  }

  const columns: TableProps<DataType>['columns'] = [
    { title: 'Công trình', width: 200, dataIndex: 'productName', key: 'productName', render: (text) => <a>{text}</a> },
    { title: 'Chủ đầu tư', width: 200, dataIndex: 'owner', key: 'owner' },
    { title: 'Địa chỉ', width: 200, dataIndex: 'address', key: 'address' },
    { title: 'Số điện thoại', width: 200, dataIndex: 'phone', key: 'phone' },
    {
      title: 'Chấm điểm',
      width: 150,
      key: 'action',
      render: (_, record) => <a onClick={() => showDrawer(record)}>Chấm điểm</a>
    }
  ]

  return (
    <Styled>
      <div className='flex items-start justify-between !mb-8 sm:mb-0'>
        <Input.Search
          style={{ margin: '0 0 12px 0' }}
          className='--w-[300px] basis-1/2'
          placeholder='Search by...'
          onSearch={search}
        />
        <div className='flex flex-col items-center justify-end sm:flex-row gap-x-2'>
          <ModalCreateConstruction onConstructionAdded={handleConstructionAdded} />
        </div>
      </div>
      <Table columns={columns} dataSource={filterData || data} scroll={{ y: 650, x: 800 }} />
      <DrawerDetail selectedItem={selectedItem} onClose={onClose} openDrawer={openDrawer} />
    </Styled>
  )
}
