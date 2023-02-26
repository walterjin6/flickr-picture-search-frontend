import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:3500/auth', async (req, res, ctx) => {
    const { username, password } = await req.json()
    console.log(username, password)

    if (!username || !password) {
      return res(
        ctx.status(400),
        ctx.json({ message: 'All fields are required' })
      )
    }

    if (username === 'admin' && password === '!Hh12345') {
      return res(
        ctx.status(200),
        ctx.json({ message: 'Success', username: username, password: password })
      )
    } else {
      return res(
        ctx.status(401),
        ctx.json({ message: 'Wrong username or password' })
      )
    }
  }),
]
