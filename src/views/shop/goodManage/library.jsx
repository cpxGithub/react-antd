import React, { Component } from 'react';
import {
  Button,
  Select,
  Dropdown,
  Menu,
  Input,
  Table,
  Divider,
  Popconfirm
} from 'antd';
import 'styles/good/library.less';

const Option = Select.Option;

class GoodLibrary extends Component {
  state = {
    typeList: [{ // 搜索类型
      value: 0,
      name: '全部'
    }, {
      value: 1,
      name: '已上架'
    }, {
      value: 2,
      name: '已下架'
    }],
    columns: [{ // table表头
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '商品分类',
      dataIndex: 'classify',
      key: 'classify',
    }, {
      title: '库存',
      dataIndex: 'store',
      key: 'store',
    }, {
      title: '销量',
      dataIndex: 'sales',
      key: 'sales',
    }, {
      title: '上架',
      dataIndex: 'putaway',
      key: 'putaway',
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
      key: '0',
      name: 'Edward King 0',
      classify: '32',
      sales: 'London, Park Lane no. 0',
      store: 'Edward King 0',
      putaway: '32'
    }, {
      key: '1',
      name: 'Edward King 0',
      classify: '32',
      sales: 'London, Park Lane no. 0',
      store: 'Edward King 0',
      putaway: '32'
    }],
    rowSelection: {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    }
  }
  componentDidMount() {
  }
  deteHandle = (e) => {
    console.log(e)
  }
  handleChange = (e) => {
    console.log(e)
  }
  batchHandle = (e) => {
    console.log(e)
  }
  goodHandle = (e) => {
    console.log(e)
  }
  render() {
    let { typeList, columns, dataSource, rowSelection } = this.state
    const menu = (
      <Menu onClick={this.batchHandle}>
        <Menu.Item key="0">
          商品上架
        </Menu.Item>
        <Menu.Item key="1">
          商品下架
        </Menu.Item>
      </Menu>
    )
    return (
      <div className="good-library">
        <div className="good-library-top">
          <div className="operation-list">
            <Button type="primary" size="small" className="btn-item">添加商品</Button>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button type="primary" size="small" className="btn-item">批量操作</Button>
            </Dropdown>
            <Popconfirm title="是否确认删除" onConfirm={this.deteHandle} okText="是" cancelText="否">
              <Button type="primary" size="small" className="btn-item btn-item-gray">批量删除</Button>
            </Popconfirm>
          </div>
          <div className="search">
            <Select defaultValue={0} size="small" style={{ width: 120 }} onChange={this.handleChange}>
              {typeList.map(item => <Option value={item.value} key={item.value}>{item.name}</Option>)}
            </Select>
            <Input placeholder="请输入商品名称" size="small" onChange={this.goodHandle} className="good-name" />
            <Button type="primary" size="small">查询</Button>
          </div>
        </div>
        <div className="tabel-list">
          <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
        </div>
      </div>
    )
  }
}

export default GoodLibrary;