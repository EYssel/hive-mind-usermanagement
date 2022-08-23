import { App, RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { AccountRecovery, UserPool } from 'aws-cdk-lib/aws-cognito';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class HiveMindUserPoolStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const userPool = new UserPool(this, 'Hive-Mind-User-Pool', {
            userPoolName: `HiveMind-UserPool`,
            selfSignUpEnabled: true,
            signInAliases: {
                username: true,
                email: true,
            },
            signInCaseSensitive: true,
            accountRecovery: AccountRecovery.EMAIL_ONLY,
            removalPolicy: RemovalPolicy.RETAIN,
        });

        new StringParameter(this, 'HiveMind-UserPool-ID', {
            parameterName: `HiveMind/UserManagement/UserPool/ID`,
            stringValue: userPool.userPoolId,
        });
    }
}

const app = new App();
new HiveMindUserPoolStack(app, 'HiveMind-UserManagement-UserPool-Stack', {
    env: {
        account: '836828574614',
        region: 'eu-west-1',
    },
});
