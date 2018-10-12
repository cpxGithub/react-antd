import React, { Component } from 'react';
import { Tabs, Calendar, Badge, Table, Transfer } from 'antd';
import './tab.less';

const TabPane = Tabs.TabPane;

class ShopList extends Component {
  state = {
    mockData: [],
    targetKeys: [],
    columns: [{
      title: 'Name',
      dataIndex: 'name',
      // eslint-disable-next-line
      render: text => <a href="javascript:void(0);">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: '操作',
      // key: 'action',
      render: (text, record) => (
        /* eslint-disable */
        <span>
          <a href="javascript:;">查看</a>
        </span>
        /* eslint-enable */
      ),
    }],
    data: [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '5',
      name: 'jack Chen',
      age: 99999,
      address: 'Londom No. 1 Lake Park',
    }],
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        // disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      })
    }
  }
  componentDidMount() {
    this.getMock();
  }
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  }

  filterOption = (inputValue, option) => {
    return option.description.indexOf(inputValue) > -1;
  }

  handleChange = (targetKeys) => {
    this.setState({ targetKeys });
  }
  handleScroll = (direction, e) => {
    console.log(111, e.target.scrollTop)
  }
  callback = (key) => {
    console.log(key)
  }
  _getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ]; break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ]; break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]; break;
      default:
    }
    return listData || [];
  }

  dateCellRender = (value) => {
    const listData = this._getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))
        }
      </ul>
    );
  }

  _getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  monthCellRender = (value) => {
    const num = this._getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  render() {
    let { rowSelection, columns, data } = this.state
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="日历" key="1">
            <Calendar dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
          </TabPane>
          <TabPane tab="表格" key="2">
            <Table
              bordered
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data} />
          </TabPane>
          <TabPane tab="其他" key="3">
            <Transfer
              dataSource={this.state.mockData}
              showSearch
              filterOption={this.filterOption}
              targetKeys={this.state.targetKeys}
              onChange={this.handleChange}
              render={item => item.title}
              onScroll={this.handleScroll}
            />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default ShopList;
