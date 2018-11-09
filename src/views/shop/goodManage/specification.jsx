import React, { Component } from 'react';
import {
  Button,
  Divider,
  Popconfirm,
  Table
} from 'antd';

class Specification extends Component {
  state = {
    columns: [{
      title: '规格名称',
      dataIndex: 'sizeName'
    }, {
      title: '规格值',
      dataIndex: 'sizeValue'
    }, {
      title: '商品数',
      dataIndex: 'goodNum'
    }, {
      title: '操作',
      dataIndex: 'options',
      render: (text, record) => {
        console.log(1, text, record)
        return (
          <div>
            <a href="javascript:void(0);">编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="是否确认删除" onConfirm={(e) => this.deteHandle(record, e)} okText="是" cancelText="否">
              <a href="javascript:void(0);">删除</a>
            </Popconfirm>
          </div>
        );
      }
    }],
    dataList: [{
      id: '11',
      sizeName: '空间里看风景发空间链接发打发打发打发发打发打发打发',
      sizeValue: 'aj',
      goodNum: 33
    }]
  }
  deteHandle = (obj) => {
    console.log(obj)
  }
  render() {
    let { columns, dataList } = this.state
    return (
      <div>
        <Button type="primary" size="small" style={{ marginBottom: '20px' }}>添加规格</Button>
        <Table columns={columns} dataSource={dataList} rowKey="id" />
      </div>
    )
  }
}

export default Specification;