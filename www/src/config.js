// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "19mdm4dp9h8433t28cqbvio5bt",     // CognitoClientID
  "api_base_url": "https://kuwwfqnzb9.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "tonster-demo-tonster-demo.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1fyf49z1hcv6o.amplifyapp.com"                                      // AmplifyURL
};

export default config;
