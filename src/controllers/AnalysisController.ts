import { Request, Response } from 'express'

export class AnalysisController {
  create (req: Request, res: Response): Response<string> {
    return res.json('Hellow Men')
  }
}
