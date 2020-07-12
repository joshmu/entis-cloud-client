import React from 'react'
import { Row, Col, Typography, Card } from 'antd'
import LiquidGauge from './LiquidGauge'

const { Title } = Typography

const Stats = () => {
  const data = new Array(6).fill({}).map((card, index) => {
    return {
      title: 'Tank ' + index,
      value: Math.random() * 100,
    }
  })

  return (
    <Row gutter={[16, 16]}>
      {data.map(({ title, value }, index) => (
        <Col
          xs={{ span: 16 }}
          md={{ span: 10 }}
          lg={{ span: 8 }}
          xl={{ span: 6 }}
          key={index}
        >
          <Card>
            <Title level={3}>{title}</Title>
            <LiquidGauge radius={100} value={value} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default Stats
