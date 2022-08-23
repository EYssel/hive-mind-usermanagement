import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HiveMindUserManagementServiceStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'HiveMindUsermanagementServiceQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
    }
}

const app = new App();
new HiveMindUserManagementServiceStack(app, 'HiveMind-UserManagement-Service-Stack', {
    env: {
        account: '836828574614',
        region: 'eu-west-1',
    },
});
