import { aws_lambda, Duration, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { join } from "path";

export class E2EInLambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new aws_lambda.DockerImageFunction(this, "E2EInLambda", {
      code: aws_lambda.DockerImageCode.fromImageAsset(join(__dirname), {
        file: "Dockerfile"
      }),
      timeout: Duration.minutes(5),
      memorySize: 3008
    });
  }
}
