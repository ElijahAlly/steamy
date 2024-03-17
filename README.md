# Introduction

This repository provides an example of real time chat app implemeneted with:

1. Golang Echo
2. Web Socket
3. HTMX

Follow my YouTube channel for more tutorials: https://www.youtube.com/channel/UCTeMYd4Z4XZJIipU2bYAcYQ

# Reference on UI

Design from Martina: https://www.figma.com/community/file/837004516127885517



# Intstall & Setup (w/ debug links for go and go frameworks)

### Install Go

references: [how-to-install-go-using-zsh](https://blog.luispa.dev/posts/how-to-install-go-using-zsh)

- install with: `brew install go`
- check installation using: `go version`

### Install Templ

references: [templ/installation/](https://templ.guide/quick-start/installation/), [how-to-install-templ-in-macos-error-templ-not-found](https://stackoverflow.com/questions/78034347/how-to-install-templ-in-macos-error-templ-not-found)

- install with: `go install github.com/a-h/templ/cmd/templ@latest`
- check install using: `$HOME/go/bin/templ generate`
- Add `export PATH="$PATH:$HOME/go/bin"` to your ~/.zshrc file

### Install Air

references: [github.com/cosmtrek/air/issues/135](https://github.com/cosmtrek/air/issues/135)

- install with: `curl -sSfL https://raw.githubusercontent.com/cosmtrek/air/master/install.sh | sh -s -- -b $(go env GOPATH)/bin`
- Add `alias air="$(go env GOPATH)/bin/air"` to your ~/.zshrc file

### Run Project
- start project with: `air`
- There may still be issues with `templ` or `air` when running, so just follow the suggested commands to run to fix the errors
  
