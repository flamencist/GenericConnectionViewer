# GenericConnectionViewer

## Set Variables with Credential
This task sets the url/username/password stored on a generic connection. This task can be used to centrally store a url/username/password and pass them to tasks that require a username/password without having to have the credentials replicated all over build/release definitions, with this task you can have single copy which can be centrally managed and change it centrally.

This task has three parameters:

Connection The connection
Url variable name
Username variable name
Password variable name
In your can register service endpoints to store your reusable url/username/password to use in other tasks.

You need to create a Credential endpoint to store the user name and password.
