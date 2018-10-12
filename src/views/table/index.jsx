import React, { Component } from 'react';
import { Select, Table, Input, Button } from 'antd';
import './index.less'
const Option = Select.Option;

class TableList extends Component {
  data = {
    
  }
  state = {
    selectData: [{
      name: '已完成',
      key: 'done'
    },
    {
      name: '已取消',
      key: 'cancel'
    },
    {
      name: '配送中',
      key: 'doning'
    },
    {
      name: '退款中',
      key: 'tuikuan'
    },
    {
      name: '已发送',
      key: 'send'
    },
    {
      name: '投诉中',
      key: 'ts'
    }],
    dataSource: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    },
    {
      key: '3',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }],
    columns: [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }]
  }
  handleChange = () => {

  }
  getName = (e) => {
    console.log(e.target.value)
  }
  render() {
    let { dataSource, columns, selectData } = this.state
    return (
      <section>
        <div className="search-box">
          <label className="search-box-item">
            <span>状态：</span>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a status"
              optionFilterProp="children"
              onChange={this.handleChange}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
              {
                selectData.map(item => {
                  return (
                    <Option value={item.key} key={item.key}>{item.name}</Option>
                  )
                })
              }
            </Select>
          </label>
          <label className="search-box-item">
            <span>姓名：</span>
            <Input className="name-input" onChange={this.getName} />
          </label>
          <Button type="primary">搜索</Button>
        </div>
        <div>
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </section>
    )
  }
}

export default TableList;
