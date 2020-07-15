'use strict'

// define the angular app
angular.module('gitExplore', [])

// define the main controller
class MainController {
  constructor (apiService) {
    this.apiService = apiService
  }

  $onInit () {
    this.gitUser = 'airbnb'
    this.getUserRepos()
  }

  getUserRepos () {
    this.apiService.getRepos(this.gitUser).then(data => this.repoList = data.data)
  }

  getRepoDetails (repoName, path) {
    this.repoName = repoName || this.repoName
    this.apiService.getRepoContents(this.gitUser, repoName, path).then(data => {
      this.contentList = data.data
      console.log(this.contentList)
    })
  }
}

// register the main controller
angular.module('gitExplore').controller('mainController', MainController)
