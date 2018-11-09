import React, { Component } from 'react';
import { Button, Table } from 'antd';

class GoodComment extends Component {
  state = {
    columns: [{
      title: '商品名',
      dataIndex: 'goodName'
    }, {
      title: '内容',
      dataIndex: 'content'
    }, {
      title: '评分',
      dataIndex: 'grade'
    }, {
      title: '评论类型',
      dataIndex: 'commentType'
    }, {
      title: '用户',
      dataIndex: 'username'
    }, {
      title: '评论时间',
      dataIndex: 'time'
    }],
    dataList: [{
      id: '11',
      goodName: '6',
      content: 'aj',
      grade: 3,
      commentType: 1,
      username: 'hgfs',
      time: '2018-02-03'
    }]
  }
  render() {
    let { columns, dataList } = this.state
    return (
      <div>
        <Button type="primary" size="small" style={{ marginBottom: 20 }}>添加评论</Button>
        <Table columns={columns} dataSource={dataList} rowKey="id" />
      </div>
    )
  }
}

export default GoodComment;