import express from 'express'

import { AnalysisController } from '@controllers/AnalysisController'
import { ServerController } from '@controllers/ServerController'

const router = express.Router()
const analysisController = new AnalysisController()
const serverController = new ServerController()

router.get('/', serverController.index)
router.put('/generateAnalysis', analysisController.create)

export default router
