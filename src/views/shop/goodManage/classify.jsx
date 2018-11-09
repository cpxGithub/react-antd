import React, { Component } from 'react';
import {
  Button,
  Table,
  Divider,
  Popconfirm,
  Switch
} from 'antd';

class GoodClassify extends Component {
  state = {
    columns: [{ // table表头
      title: '分类名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '商品数量',
      dataIndex: 'number',
      key: 'number',
    }, {
      title: '是否显示',
      dataIndex: 'isShow',
      render: (text, record) => {
        return (
          this.state.dataSource.length >= 1
            ? (
              <Switch defaultChecked onChange={this.SwitchChange} />
            ) : null
        );
      }
    }, {
      title: '操作',
      dataIndex: 'options',
      render: (text, record) => {
        return (
          this.state.dataSource.length >= 1
            ? (
                <div>
                  <a href="javascript:void(0);">编辑</a>
                  <Divider type="vertical" />
                  <Popconfirm title="是否确认删除" onConfirm={(e) => this.deteHandle(record, e)} okText="是" cancelText="否">
                    <a href="javascript:void(0);">删除</a>
                  </Popconfirm>
                </div>
            ) : null
        );
      }
    }],
    dataSource: [{
      id: '11',
      name: 'Edward King 0',
      number: 32,
      isShow: true
    }, {
      id: '22',
      name: 'Edward King 0',
      number: 62,
      isShow: true
    }]
  }
  deteHandle = (data) => {
    console.log(data)
  }
  SwitchChange = (e) => {
    console.log(e)
  }
  render() {
    let { columns, dataSource } = this.state
    return (
      <section>
        <Button type="primary" size="small" className="add-btn" style={{ marginBottom: '20px' }}>新增分类</Button>
        <Table columns={columns} rowKey="id" dataSource={dataSource} />
      </section>
    )
  }
}

export default GoodClassify;
