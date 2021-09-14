require('http').Server((req, res) => {
  const author = 'itmo307699'
  res.writeHead(200, {
    'X-Author': author,
    'Content-Type': 'text/plain; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
  })

  if (req.url === '/login/') {
    return res.end(author)
  }

  if (req.url === '/sample/') {
    function task(x) {
      const sqrt = this ** 2
      return x * sqrt
    }

    return res.end(String(task))
  }

  res.end(author)
}).listen(process.env.PORT)
