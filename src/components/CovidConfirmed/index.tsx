import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { Card, Modal, Row, Table } from 'antd';

import { CovidDetailsDataype } from 'types';
import { selectCovidInfo } from 'containers/CovidInfoApp/selectors';
import { actions } from 'containers/CovidInfoApp/slice';

import { CovidDetailsModal } from 'components';

export const CovidConfirmed = memo(() => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { data } = useSelector(selectCovidInfo);

  const [visible, setVisible] = useState<boolean>(false);
  const [selectedCovidDeathData, setSelectedCovidDeathData] =
    useState<CovidDetailsDataype | null>(null);

  const columns = [
    {
      title: 'Date',
      key: 'date',
      dataIndex: 'Date',
      render: text => {
        return moment(text).format('MM/DD/YYYY hh:mm:ss A');
      },
    },
    {
      title: 'Country Name',
      key: 'countryName',
      dataIndex: 'Country',
      render: (text, record) => (
        <a
          onClick={() => {
            setSelectedCovidDeathData(record);
            setVisible(true);
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: 'Country Code',
      key: 'countryCode',
      dataIndex: 'CountryCode',
    },
    {
      title: 'Confirmed Cases',
      key: 'recoveredCases',
      dataIndex: 'TotalConfirmed',
    },
  ];

  useEffect(() => {
    dispatch(actions.getCovidDataConfirmed());
  }, []);

  return (
    <Card>
      <Row>
        <h1>{t('Form.CovidConfirmed.Title')}</h1>
      </Row>
      <Table dataSource={data} columns={columns} />
      <Modal
        onCancel={() => setVisible(false)}
        destroyOnClose
        visible={visible}
        title="Country Details"
        width={1000}
        footer={null}
        maskClosable={false}
      >
        <CovidDetailsModal selectedCovidDeathData={selectedCovidDeathData} />
      </Modal>
    </Card>
  );
});
