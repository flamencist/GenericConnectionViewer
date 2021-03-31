# GenericConnectionViewer

Help support the project:

<a href="https://www.buymeacoffee.com/flamencist" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

or Star project.

This task sets the url/username/password stored on a generic connection. This task can be used to centrally store a url/username/password and pass them to tasks that require a username/password without having to have the credentials replicated all over build/release definitions, with this task you can have single copy which can be centrally managed and change it centrally.

This task has three parameters:

Connection The connection
Url variable name
Username variable name
Password variable name
In your can register service endpoints to store your reusable url/username/password to use in other tasks.

You need to create a Credential endpoint to store the user name and password.

Marketplace: https://marketplace.visualstudio.com/items?itemName=achermyanin.credentials-viewer

Example Pipeline Usage:
```
pool:
  vmImage: 'ubuntu-latest'

steps:
- task: GenericConnectionViewer@0
  inputs:
    credentials: '<My Generic Service Connection Name>'
    url: 'url'
    username: 'username'
    password: 'password'

- script: |
    echo "url=$(url)"
    echo "username=$(username)"
    echo "password=$(password)"
```