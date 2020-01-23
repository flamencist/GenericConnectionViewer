import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        let credentials: string | undefined = tl.getInput('credentials',true);
        if(!credentials){
            tl.setResult(tl.TaskResult.Failed, "Failed. Select generic service connection");
            return;
        }
        let url:string  = tl.getEndpointUrl(credentials, false);
        let serverEndpointAuth: tl.EndpointAuthorization | undefined = tl.getEndpointAuthorization(credentials, false);
        if(!serverEndpointAuth){
            tl.setResult(tl.TaskResult.Failed, "Failed. Username and Password should be filled in generic service connection");
            return;
        }
        let username:string  = serverEndpointAuth["parameters"]["username"];
        let password:string  = serverEndpointAuth["parameters"]["password"];

        let urlVariableName: string | undefined = tl.getInput('url', false);
        let usernameVariableName: string| undefined = tl.getInput('username', false);
        let passwordVariableName: string| undefined = tl.getInput('password', false);
        if(urlVariableName){
            tl.setVariable(urlVariableName, url, false);
        }
        if(usernameVariableName){
            tl.setVariable(usernameVariableName, username, false);
        }
        if(passwordVariableName){
            tl.setVariable(passwordVariableName, password, true);
        }
        tl.setResult(tl.TaskResult.Succeeded, "Success");
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
