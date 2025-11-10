/*!
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import { AwsContext } from '../../../shared/awsContext'
import { RegionProvider } from '../../../shared/regions/regionProvider'

export const DEFAULT_TEST_REGION_CODE = 'someRegion' // eslint-disable-line @typescript-eslint/naming-convention
export const DEFAULT_TEST_REGION_NAME = 'Some Region' // eslint-disable-line @typescript-eslint/naming-convention

const endpoints = {
    partitions: [
        {
            dnsSuffix: 'totallyLegit.tld',
            id: 'aws',
            name: 'AWS',
            regions: [
                {
                    id: DEFAULT_TEST_REGION_CODE,
                    name: DEFAULT_TEST_REGION_NAME,
                },
                {
                    id: 'us-east-1',
                    name: 'US East (N. Virginia)',
                },
                {
                    id: 'us-west-2',
                    name: 'US West (N. California)',
                },
            ],
            services: [
                {
                    id: 'someService',
                    endpoints: [
                        {
                            regionId: DEFAULT_TEST_REGION_CODE,
                            data: {},
                        },
                        {
                            regionId: 'us-east-1',
                            data: {},
                        },
                    ],
                },
                {
                    id: 'lambda',
                    endpoints: [
                        {
                            regionId: 'us-east-1',
                            data: {},
                        },
                        {
                            regionId: 'us-west-2',
                            data: {},
                        },
                    ],
                },
                {
                    id: 's3',
                    endpoints: [
                        {
                            regionId: 'us-east-1',
                            data: {},
                        },
                        {
                            regionId: 'us-west-2',
                            data: {},
                        },
                    ],
                },
                {
                    id: 'logs',
                    endpoints: [
                        {
                            regionId: 'us-east-1',
                            data: {},
                        },
                        {
                            regionId: 'us-west-2',
                            data: {},
                        },
                    ],
                },
            ],
        },
    ],
}

export function createTestRegionProvider(opts?: { awsContext?: AwsContext }): RegionProvider {
    return new RegionProvider(endpoints, opts?.awsContext)
}
