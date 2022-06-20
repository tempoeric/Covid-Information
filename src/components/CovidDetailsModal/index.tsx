import { FC } from 'react';
import { Col, Form, Input, Row } from 'antd';
import { CovidDetailsDataype } from 'types';

import './styles.scss';

interface CovidDetailsModalProps {
  selectedCovidDeathData: CovidDetailsDataype | null;
}

export const CovidDetailsModal: FC<CovidDetailsModalProps> = ({
  selectedCovidDeathData,
}) => {
  const [form] = Form.useForm();
  return (
    <>
      <Form form={form} layout="vertical">
        <Form.Item label="id" name="id" hidden={true}>
          <Input defaultValue={selectedCovidDeathData?.ID} type="hidden" />
        </Form.Item>
        <Row gutter={[8, 16]}>
          <Col span={12}>
            <Form.Item label="Name" name="name">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.Country}
                disabled={true}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Country Code" name="countryCode">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.CountryCode}
                disabled={true}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={12}>
            <Form.Item label="New Confirmed" name="newConfirmed">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.NewConfirmed}
                disabled={true}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="New Deaths" name="newDeaths">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.NewDeaths}
                disabled={true}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={12}>
            <Form.Item label="New Recovered" name="newRecovered">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.NewRecovered}
                disabled={true}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Total Confirmed" name="totalConfirmed">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.TotalConfirmed}
                disabled={true}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[8, 16]}>
          <Col span={12}>
            <Form.Item label="Total Deaths" name="totalDeaths">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.TotalDeaths}
                disabled={true}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Total Recovered" name="totalRecovered">
              <Input
                bordered={false}
                defaultValue={selectedCovidDeathData?.TotalRecovered}
                disabled={true}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};
