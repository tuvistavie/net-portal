define [
    'jquery'
    'underscore'
    'backbone'
    'common/bootstrap'
    'cs!globalModels/student'
], ($, _, Backbone, bootstrapData, Student) ->
    new Student(bootstrapData.user)
