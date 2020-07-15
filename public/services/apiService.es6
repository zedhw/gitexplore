class ApiService {
  constructor ($http) {
    this.$http = $http
  }

  getRepos (user) {
    return this.$http.get(`https://api.github.com/users/${user}/repos`)
  }
 
  getRepoContents (user, repoName, path = '') {
    return this.$http.get(`https://api.github.com/repos/${user}/${repoName}/contents/${path}`)
  }
}

angular.module('gitExplore').service('apiService', ApiService)
