#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { E2EInLambdaStack } from "../lib/e2e-in-lambda-stack";

const app = new cdk.App();
new E2EInLambdaStack(app, "E2EInLambdaStack", {
  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier: "e2e"
  })
});
