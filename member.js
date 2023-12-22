function skillsMembers() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/members/skills.html',
    controller: 'MembersCtrl',
    controllerAs: 'membersCtrl',
    bindToController: true,
    scope: {
      member: '=',
      skills: '='
    }
  };
}
