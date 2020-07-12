import { Response } from 'express'

export class ServerController {
  index (_, res: Response): Response<string> {
    return res.json({
      version: '1.0.0',
      author: 'Luan Eduardo da Costa'
    })
  }
}
