# Git Flow

## Branch names

default branch : develop

naming convention :  `<prefix>/<name-of-task>`

Prefix :
- feature for a new feature
- featuremerge for multiple features
- bugfix to fix a bug
- hotfix to fix an urgent bug

## Merge branch

Use merge rather than rebase. Squash commit on merging branch into default branch `develop` except for `featuremerge` branch containing squash commits of features merged into it.

