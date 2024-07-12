import { Button, Card, Col, Radio, Row, Timeline, Typography, Upload, Watermark } from 'antd'
import { RightOutlined, ToTopOutlined } from '@ant-design/icons'
import Paragraph from 'antd/lib/typography/Paragraph'
import { Helmet } from 'react-helmet-async'

const timelineList = [
  {
    title: 'Check out the rooms on the 5th floor',
    time: '09 JUN 7:20 PM',
    color: 'green'
  },
  {
    title: 'Check out the rooms on the 4th floor',
    time: '08 JUN 12:20 PM',
    color: 'green'
  },
  {
    title: 'GM add task for FB team',
    time: '04 JUN 3:10 PM'
  },
  {
    title: 'GM add task for HK team',
    time: '02 JUN 2:45 PM'
  },
  {
    title: 'GM check task for HK team',
    time: '18 MAY 1:30 PM'
  },
  {
    title: 'New order #46282344',
    time: '14 MAY 3:30 PM',
    color: 'gray'
  }
]

function Dashboard() {
  const { Title, Text } = Typography
  return (
    <div className='layout-content'>
      <Helmet>
        <title>Construction | Dashboard</title>
        <meta name='description' content={'Construction | Bảng điều khiển'} />
      </Helmet>
      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={10} className='mb-6'>
          <Card bordered={false} className='h-full criclebox'>
            Echart
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={14} className='mb-6'>
          <Card bordered={false} className='h-full criclebox'>
            LineChart
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={16} className='mb-6'>
          <Card bordered={false} className='h-full criclebox cardbody'>
            <div className='project-ant'>
              <div>
                <Title level={5}>Construction</Title>
                <Paragraph className='lastweek'>
                  Done this month<span className='ml-2 text-blue-500'>40%</span>
                </Paragraph>
              </div>
            </div>
            <Watermark content='Construction'>
              <div style={{ height: 500 }} />
            </Watermark>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8} className='mb-6'>
          <Card bordered={false} className='h-full criclebox'>
            <div className='timeline-box'>
              <Title level={5}>History</Title>
              <Paragraph className='lastweek' style={{ marginBottom: 24 }}>
                this month <span className='bnb2'>20%</span>
              </Paragraph>

              <Timeline pending='Recording...' className='timelinelist'>
                {timelineList.map((t, index) => (
                  <Timeline.Item color={t.color} key={index}>
                    <Title level={5}>{t.title}</Title>
                    <Text>{t.time}</Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 0]}>
        <Col xs={24} md={12} sm={24} lg={12} xl={14} className='mb-6'>
          <Card bordered={false} className='h-full'>
            <div className='h-full'>
              <div className='card-content'>
                <Title level={5}>Work with the best</Title>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <p key={index}>
                      Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the
                      opportunity first.
                    </p>
                  ))}
              </div>
              <div className='mt-4 card-footer'>
                <a className='icon-move-right' href='#pablo'>
                  Read More
                  <RightOutlined />
                </a>
              </div>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12} sm={24} lg={12} xl={10} className='mb-6'>
          <Card bordered={false} className='h-full'>
            <div className='h-full'>
              <div className='card-content'>
                <Title level={5}>Work with the best</Title>
                <p>
                  Wealth creation is an evolutionarily recent positive-sum game. It is all about who take the
                  opportunity first.
                </p>
              </div>
              <div className='mt-4 card-footer'>
                <a className='icon-move-right' href='#pablo'>
                  Read More
                  <RightOutlined />
                </a>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard
