import * as cdk from '@aws-cdk/core';
import {RemovalPolicy} from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new s3.Bucket(this, 'sdc-docs', {
      bucketName: 'sdc-docs',
      versioned: false,
      removalPolicy: RemovalPolicy.RETAIN,
      publicReadAccess: true,
      websiteIndexDocument: 'index.html',
      websiteErrorDocument: 'index.html'
    });
  }
}
