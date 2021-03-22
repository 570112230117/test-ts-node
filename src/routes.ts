import * as TestController from "./controller/TestController"

const _projectName = '/api'
export const AppRoutes = [
    {
        path: _projectName + '/test',
        method: 'get',
        action: TestController.testController,
    },
]