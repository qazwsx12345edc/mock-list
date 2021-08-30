import Mock from 'mockjs'

const data = Mock.mock({
  'list|100': [{
    'id|+1': 1,
  }]
})

// Mock.mock(url, type, data)
Mock.mock(/\/search/, 'get', data.list)
