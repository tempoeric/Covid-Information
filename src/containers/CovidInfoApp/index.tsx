import { memo } from 'react';
import { Layout, Space } from 'antd';
import { useInjectSaga, useInjectReducer } from 'utils/redux-injectors';

import { covidInfoAppSaga } from './saga';
import { reducer, sliceKey } from './slice';

import { CovidConfirmed, CovidDeaths, CovidRecovery } from 'components';

import './styles.scss';

export const CovidInfoApp = memo(() => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: covidInfoAppSaga });

  const { Header, Content } = Layout;

  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <div className="body-content">
            <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
            >
              <Space
                direction="vertical"
                size="middle"
                style={{ display: 'flex' }}
              >
                <CovidConfirmed />
                <CovidRecovery />
                <CovidDeaths />
              </Space>
            </Content>
          </div>
        </Layout>
      </div>
    </>
  );
});
