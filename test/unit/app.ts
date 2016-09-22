/// <reference path="./type.d.ts" />
'use strict'
const Tman = require('tman')

for (let key of ['describe', 'suite', 'test', 'it', 'before', 'after', 'beforeEach', 'afterEach']) {
  global[key] = Tman[key]
}

export * from './utils/fetch'
export * from './utils/setSchema'
export * from './utils/utils'
export * from './utils/observable'
export * from './utils/httpErrorSpec'

export * from './mock/MockSpec'

export * from './storage/DatabaseSpec'
export * from './storage/Model'
export * from './storage/BaseCollectionSpec'

export * from './apis/DirtyApiSpec'
export * from './apis/CommonApiSpec'
export * from './apis/EntrycategoryApiSpec'
export * from './apis/MemberApiSpec'
export * from './apis/OrganizationsApiSpec'
export * from './apis/ProjectApiSpec'
export * from './apis/UserApiSpec'
export * from './apis/PreferenceApiSpec'
export * from './apis/StageApiSpec'
export * from './apis/TasklistApiSpec'
export * from './apis/TaskApiSpec'
export * from './apis/EventApiSpec'
export * from './apis/SubtaskApiSpec'
export * from './apis/ActivityApiSpec'
export * from './apis/MessageApiSpec'
export * from './apis/FileApiSpec'
export * from './apis/PostApiSpec'
export * from './apis/CollectionApiSpec'
export * from './apis/ObjectLinkApiSpec'
export * from './apis/TagApiSpec'
export * from './apis/RoleApiSpec'
export * from './apis/SubscribeApiSpec'
export * from './apis/FeedbackApiSpec'
export * from './apis/ReportApiSpec'

export * from './socket/activity'
export * from './socket/message'
export * from './socket/preference'
export * from './socket/task'
export * from './socket/project'
export * from './socket/member'
export * from './socket/event'
export * from './socket/subscribe'
export * from './socket/feedback'
