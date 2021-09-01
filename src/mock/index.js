import Mock from 'mockjs'

Mock.setup({
  timeout: 400
})

const data = Mock.mock({
  'list|100': [{
    'id|+1': 1,
    'email': '@email',
    'date': '@date'
  }]
})

// Mock.mock(url, type, data)
Mock.mock(/\/search/, 'get', data.list)
