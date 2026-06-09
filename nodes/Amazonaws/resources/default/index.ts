import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Associate Alias 2020 05 31",
					"value": "Associate Alias 2020 05 31",
					"action": "Associate Alias 2020 05 31",
					"description": "<p>Associates an alias (also known as a CNAME or an alternate domain name) with a CloudFront distribution.</p> <p>With this operation you can move an alias that's already in use on a CloudFront distribution to a different distribution in one step. This prevents the downtime that could occur if you first remove the alias from one distribution and then separately add the alias to another distribution.</p> <p>To use this operation to associate an alias with a distribution, you provide the alias and the ID of the target distribution for the alias. For more information, including how to set up the target distribution, prerequisites that you must complete, and other restrictions, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move\">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/distribution/{{$parameter[\"TargetDistributionId\"]}}/associate-alias#Alias"
						}
					}
				},
				{
					"name": "Copy Distribution 2020 05 31",
					"value": "Copy Distribution 2020 05 31",
					"action": "Copy Distribution 2020 05 31",
					"description": "<p>Creates a staging distribution using the configuration of the provided primary distribution. A staging distribution is a copy of an existing distribution (called the primary distribution) that you can use in a continuous deployment workflow.</p> <p>After you create a staging distribution, you can use <code>UpdateDistribution</code> to modify the staging distribution's configuration. Then you can use <code>CreateContinuousDeploymentPolicy</code> to incrementally move traffic to the staging distribution.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distribution/{{$parameter[\"PrimaryDistributionId\"]}}/copy"
						}
					}
				},
				{
					"name": "Create Cache Policy 2020 05 31",
					"value": "Create Cache Policy 2020 05 31",
					"action": "Create Cache Policy 2020 05 31",
					"description": "<p>Creates a cache policy.</p> <p>After you create a cache policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the cache policy determines the following:</p> <ul> <li> <p>The values that CloudFront includes in the <i>cache key</i>. These values can include HTTP headers, cookies, and URL query strings. CloudFront uses the cache key to find an object in its cache that it can return to the viewer.</p> </li> <li> <p>The default, minimum, and maximum time to live (TTL) values that you want objects to stay in the CloudFront cache.</p> </li> </ul> <p>The headers, cookies, and query strings that are included in the cache key are also included in requests that CloudFront sends to the origin. CloudFront sends a request when it can't find an object in its cache that matches the request's cache key. If you want to send values to the origin but <i>not</i> include them in the cache key, use <code>OriginRequestPolicy</code>.</p> <p>For more information about cache policies, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html\">Controlling the cache key</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/cache-policy"
						}
					}
				},
				{
					"name": "List Cache Policies 2020 05 31",
					"value": "List Cache Policies 2020 05 31",
					"action": "List Cache Policies 2020 05 31",
					"description": "<p>Gets a list of cache policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/cache-policy"
						}
					}
				},
				{
					"name": "Create Cloud Front Origin Access Identity 2020 05 31",
					"value": "Create Cloud Front Origin Access Identity 2020 05 31",
					"action": "Create Cloud Front Origin Access Identity 2020 05 31",
					"description": "Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/origin-access-identity/cloudfront"
						}
					}
				},
				{
					"name": "List Cloud Front Origin Access Identities 2020 05 31",
					"value": "List Cloud Front Origin Access Identities 2020 05 31",
					"action": "List Cloud Front Origin Access Identities 2020 05 31",
					"description": "Lists origin access identities.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-identity/cloudfront"
						}
					}
				},
				{
					"name": "Create Continuous Deployment Policy 2020 05 31",
					"value": "Create Continuous Deployment Policy 2020 05 31",
					"action": "Create Continuous Deployment Policy 2020 05 31",
					"description": "<p>Creates a continuous deployment policy that distributes traffic for a custom domain name to two different CloudFront distributions.</p> <p>To use a continuous deployment policy, first use <code>CopyDistribution</code> to create a staging distribution, then use <code>UpdateDistribution</code> to modify the staging distribution's configuration.</p> <p>After you create and update a staging distribution, you can use a continuous deployment policy to incrementally move traffic to the staging distribution. This workflow enables you to test changes to a distribution's configuration before moving all of your domain's production traffic to the new configuration.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/continuous-deployment-policy"
						}
					}
				},
				{
					"name": "List Continuous Deployment Policies 2020 05 31",
					"value": "List Continuous Deployment Policies 2020 05 31",
					"action": "List Continuous Deployment Policies 2020 05 31",
					"description": "<p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/continuous-deployment-policy"
						}
					}
				},
				{
					"name": "Create Distribution 2020 05 31",
					"value": "Create Distribution 2020 05 31",
					"action": "Create Distribution 2020 05 31",
					"description": "Creates a CloudFront distribution.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distribution"
						}
					}
				},
				{
					"name": "List Distributions 2020 05 31",
					"value": "List Distributions 2020 05 31",
					"action": "List Distributions 2020 05 31",
					"description": "List CloudFront distributions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distribution"
						}
					}
				},
				{
					"name": "Create Distribution With Tags 2020 05 31",
					"value": "Create Distribution With Tags 2020 05 31",
					"action": "Create Distribution With Tags 2020 05 31",
					"description": "Create a new distribution with tags.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distribution#WithTags"
						}
					}
				},
				{
					"name": "Create Field Level Encryption Config 2020 05 31",
					"value": "Create Field Level Encryption Config 2020 05 31",
					"action": "Create Field Level Encryption Config 2020 05 31",
					"description": "Create a new field-level encryption configuration.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/field-level-encryption"
						}
					}
				},
				{
					"name": "List Field Level Encryption Configs 2020 05 31",
					"value": "List Field Level Encryption Configs 2020 05 31",
					"action": "List Field Level Encryption Configs 2020 05 31",
					"description": "List all field-level encryption configurations that have been created in CloudFront for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption"
						}
					}
				},
				{
					"name": "Create Field Level Encryption Profile 2020 05 31",
					"value": "Create Field Level Encryption Profile 2020 05 31",
					"action": "Create Field Level Encryption Profile 2020 05 31",
					"description": "Create a field-level encryption profile.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/field-level-encryption-profile"
						}
					}
				},
				{
					"name": "List Field Level Encryption Profiles 2020 05 31",
					"value": "List Field Level Encryption Profiles 2020 05 31",
					"action": "List Field Level Encryption Profiles 2020 05 31",
					"description": "Request a list of field-level encryption profiles that have been created in CloudFront for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption-profile"
						}
					}
				},
				{
					"name": "Create Function 2020 05 31",
					"value": "Create Function 2020 05 31",
					"action": "Create Function 2020 05 31",
					"description": "<p>Creates a CloudFront function.</p> <p>To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function.</p> <p>When you create a function, it's in the <code>DEVELOPMENT</code> stage. In this stage, you can test the function with <code>TestFunction</code>, and update it with <code>UpdateFunction</code>.</p> <p>When you're ready to use your function with a CloudFront distribution, use <code>PublishFunction</code> to copy the function from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. When it's live, you can attach the function to a distribution's cache behavior, using the function's ARN.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/function"
						}
					}
				},
				{
					"name": "List Functions 2020 05 31",
					"value": "List Functions 2020 05 31",
					"action": "List Functions 2020 05 31",
					"description": "<p>Gets a list of all CloudFront functions in your Amazon Web Services account.</p> <p>You can optionally apply a filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/function"
						}
					}
				},
				{
					"name": "Create Invalidation 2020 05 31",
					"value": "Create Invalidation 2020 05 31",
					"action": "Create Invalidation 2020 05 31",
					"description": "Create a new invalidation.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distribution/{{$parameter[\"DistributionId\"]}}/invalidation"
						}
					}
				},
				{
					"name": "List Invalidations 2020 05 31",
					"value": "List Invalidations 2020 05 31",
					"action": "List Invalidations 2020 05 31",
					"description": "Lists invalidation batches.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distribution/{{$parameter[\"DistributionId\"]}}/invalidation"
						}
					}
				},
				{
					"name": "Create Key Group 2020 05 31",
					"value": "Create Key Group 2020 05 31",
					"action": "Create Key Group 2020 05 31",
					"description": "<p>Creates a key group that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">CloudFront signed URLs and signed cookies</a>.</p> <p>To create a key group, you must specify at least one public key for the key group. After you create a key group, you can reference it from one or more cache behaviors. When you reference a key group in a cache behavior, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">Serving private content</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/key-group"
						}
					}
				},
				{
					"name": "List Key Groups 2020 05 31",
					"value": "List Key Groups 2020 05 31",
					"action": "List Key Groups 2020 05 31",
					"description": "<p>Gets a list of key groups.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/key-group"
						}
					}
				},
				{
					"name": "Create Monitoring Subscription 2020 05 31",
					"value": "Create Monitoring Subscription 2020 05 31",
					"action": "Create Monitoring Subscription 2020 05 31",
					"description": "<p>Enables additional CloudWatch metrics for the specified CloudFront distribution. The additional metrics incur an additional cost.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/viewing-cloudfront-metrics.html#monitoring-console.distributions-additional\">Viewing additional CloudFront distribution metrics</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distributions/{{$parameter[\"DistributionId\"]}}/monitoring-subscription/"
						}
					}
				},
				{
					"name": "Delete Monitoring Subscription 2020 05 31",
					"value": "Delete Monitoring Subscription 2020 05 31",
					"action": "Delete Monitoring Subscription 2020 05 31",
					"description": "Disables additional CloudWatch metrics for the specified CloudFront distribution.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/distributions/{{$parameter[\"DistributionId\"]}}/monitoring-subscription/"
						}
					}
				},
				{
					"name": "Get Monitoring Subscription 2020 05 31",
					"value": "Get Monitoring Subscription 2020 05 31",
					"action": "Get Monitoring Subscription 2020 05 31",
					"description": "Gets information about whether additional CloudWatch metrics are enabled for the specified CloudFront distribution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributions/{{$parameter[\"DistributionId\"]}}/monitoring-subscription/"
						}
					}
				},
				{
					"name": "Create Origin Access Control 2020 05 31",
					"value": "Create Origin Access Control 2020 05 31",
					"action": "Create Origin Access Control 2020 05 31",
					"description": "<p>Creates a new origin access control in CloudFront. After you create an origin access control, you can add it to an origin in a CloudFront distribution so that CloudFront sends authenticated (signed) requests to the origin.</p> <p>This makes it possible to block public access to the origin, allowing viewers (users) to access the origin's content only through CloudFront.</p> <p>For more information about using a CloudFront origin access control, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html\">Restricting access to an Amazon Web Services origin</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/origin-access-control"
						}
					}
				},
				{
					"name": "List Origin Access Controls 2020 05 31",
					"value": "List Origin Access Controls 2020 05 31",
					"action": "List Origin Access Controls 2020 05 31",
					"description": "<p>Gets the list of CloudFront origin access controls in this Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send another request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the next request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-control"
						}
					}
				},
				{
					"name": "Create Origin Request Policy 2020 05 31",
					"value": "Create Origin Request Policy 2020 05 31",
					"action": "Create Origin Request Policy 2020 05 31",
					"description": "<p>Creates an origin request policy.</p> <p>After you create an origin request policy, you can attach it to one or more cache behaviors. When it's attached to a cache behavior, the origin request policy determines the values that CloudFront includes in requests that it sends to the origin. Each request that CloudFront sends to the origin includes the following:</p> <ul> <li> <p>The request body and the URL path (without the domain name) from the viewer request.</p> </li> <li> <p>The headers that CloudFront automatically includes in every origin request, including <code>Host</code>, <code>User-Agent</code>, and <code>X-Amz-Cf-Id</code>.</p> </li> <li> <p>All HTTP headers, cookies, and URL query strings that are specified in the cache policy or the origin request policy. These can include items from the viewer request and, in the case of headers, additional ones that are added by CloudFront.</p> </li> </ul> <p>CloudFront sends a request when it can't find a valid object in its cache that matches the request. If you want to send values to the origin and also include them in the cache key, use <code>CachePolicy</code>.</p> <p>For more information about origin request policies, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html\">Controlling origin requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/origin-request-policy"
						}
					}
				},
				{
					"name": "List Origin Request Policies 2020 05 31",
					"value": "List Origin Request Policies 2020 05 31",
					"action": "List Origin Request Policies 2020 05 31",
					"description": "<p>Gets a list of origin request policies.</p> <p>You can optionally apply a filter to return only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-request-policy"
						}
					}
				},
				{
					"name": "Create Public Key 2020 05 31",
					"value": "Create Public Key 2020 05 31",
					"action": "Create Public Key 2020 05 31",
					"description": "Uploads a public key to CloudFront that you can use with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html\">signed URLs and signed cookies</a>, or with <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html\">field-level encryption</a>.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/public-key"
						}
					}
				},
				{
					"name": "List Public Keys 2020 05 31",
					"value": "List Public Keys 2020 05 31",
					"action": "List Public Keys 2020 05 31",
					"description": "List all public keys that have been added to CloudFront for this account.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/public-key"
						}
					}
				},
				{
					"name": "Create Realtime Log Config 2020 05 31",
					"value": "Create Realtime Log Config 2020 05 31",
					"action": "Create Realtime Log Config 2020 05 31",
					"description": "<p>Creates a real-time log configuration.</p> <p>After you create a real-time log configuration, you can attach it to one or more cache behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p> <p>For more information about real-time log configurations, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html\">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/realtime-log-config"
						}
					}
				},
				{
					"name": "List Realtime Log Configs 2020 05 31",
					"value": "List Realtime Log Configs 2020 05 31",
					"action": "List Realtime Log Configs 2020 05 31",
					"description": "<p>Gets a list of real-time log configurations.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/realtime-log-config"
						}
					}
				},
				{
					"name": "Create Response Headers Policy 2020 05 31",
					"value": "Create Response Headers Policy 2020 05 31",
					"action": "Create Response Headers Policy 2020 05 31",
					"description": "<p>Creates a response headers policy.</p> <p>A response headers policy contains information about a set of HTTP headers. To create a response headers policy, you provide some metadata about the policy and a set of configurations that specify the headers.</p> <p>After you create a response headers policy, you can use its ID to attach it to one or more cache behaviors in a CloudFront distribution. When it's attached to a cache behavior, the response headers policy affects the HTTP headers that CloudFront includes in HTTP responses to requests that match the cache behavior. CloudFront adds or removes response headers according to the configuration of the response headers policy.</p> <p>For more information, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/modifying-response-headers.html\">Adding or removing HTTP headers in CloudFront responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/response-headers-policy"
						}
					}
				},
				{
					"name": "List Response Headers Policies 2020 05 31",
					"value": "List Response Headers Policies 2020 05 31",
					"action": "List Response Headers Policies 2020 05 31",
					"description": "<p>Gets a list of response headers policies.</p> <p>You can optionally apply a filter to get only the managed policies created by Amazon Web Services, or only the custom policies created in your Amazon Web Services account.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/response-headers-policy"
						}
					}
				},
				{
					"name": "Create Streaming Distribution 2020 05 31",
					"value": "Create Streaming Distribution 2020 05 31",
					"action": "Create Streaming Distribution 2020 05 31",
					"description": "This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href=\"http://forums.aws.amazon.com/ann.jspa?annID=7356\">read the announcement</a> on the Amazon CloudFront discussion forum.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/streaming-distribution"
						}
					}
				},
				{
					"name": "List Streaming Distributions 2020 05 31",
					"value": "List Streaming Distributions 2020 05 31",
					"action": "List Streaming Distributions 2020 05 31",
					"description": "List streaming distributions.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/streaming-distribution"
						}
					}
				},
				{
					"name": "Create Streaming Distribution With Tags 2020 05 31",
					"value": "Create Streaming Distribution With Tags 2020 05 31",
					"action": "Create Streaming Distribution With Tags 2020 05 31",
					"description": "This API is deprecated. Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020. For more information, <a href=\"http://forums.aws.amazon.com/ann.jspa?annID=7356\">read the announcement</a> on the Amazon CloudFront discussion forum.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/streaming-distribution#WithTags"
						}
					}
				},
				{
					"name": "Delete Cache Policy 2020 05 31",
					"value": "Delete Cache Policy 2020 05 31",
					"action": "Delete Cache Policy 2020 05 31",
					"description": "<p>Deletes a cache policy.</p> <p>You cannot delete a cache policy if it's attached to a cache behavior. First update your distributions to remove the cache policy from all cache behaviors, then delete the cache policy.</p> <p>To delete a cache policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListCachePolicies</code> or <code>GetCachePolicy</code>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/cache-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Cache Policy 2020 05 31",
					"value": "Get Cache Policy 2020 05 31",
					"action": "Get Cache Policy 2020 05 31",
					"description": "<p>Gets a cache policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get a cache policy, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/cache-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Update Cache Policy 2020 05 31",
					"value": "Update Cache Policy 2020 05 31",
					"action": "Update Cache Policy 2020 05 31",
					"description": "<p>Updates a cache policy configuration.</p> <p>When you update a cache policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a cache policy configuration:</p> <ol> <li> <p>Use <code>GetCachePolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the cache policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateCachePolicy</code> by providing the entire cache policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/cache-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Cloud Front Origin Access Identity 2020 05 31",
					"value": "Delete Cloud Front Origin Access Identity 2020 05 31",
					"action": "Delete Cloud Front Origin Access Identity 2020 05 31",
					"description": "Delete an origin access identity.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/origin-access-identity/cloudfront/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Cloud Front Origin Access Identity 2020 05 31",
					"value": "Get Cloud Front Origin Access Identity 2020 05 31",
					"action": "Get Cloud Front Origin Access Identity 2020 05 31",
					"description": "Get the information about an origin access identity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-identity/cloudfront/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Continuous Deployment Policy 2020 05 31",
					"value": "Delete Continuous Deployment Policy 2020 05 31",
					"action": "Delete Continuous Deployment Policy 2020 05 31",
					"description": "<p>Deletes a continuous deployment policy.</p> <p>You cannot delete a continuous deployment policy that's attached to a primary distribution. First update your distribution to remove the continuous deployment policy, then you can delete the policy.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/continuous-deployment-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Continuous Deployment Policy 2020 05 31",
					"value": "Get Continuous Deployment Policy 2020 05 31",
					"action": "Get Continuous Deployment Policy 2020 05 31",
					"description": "Gets a continuous deployment policy, including metadata (the policy's identifier and the date and time when the policy was last modified).",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/continuous-deployment-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Update Continuous Deployment Policy 2020 05 31",
					"value": "Update Continuous Deployment Policy 2020 05 31",
					"action": "Update Continuous Deployment Policy 2020 05 31",
					"description": "<p>Updates a continuous deployment policy. You can update a continuous deployment policy to enable or disable it, to change the percentage of traffic that it sends to the staging distribution, or to change the staging distribution that it sends traffic to.</p> <p>When you update a continuous deployment policy configuration, all the fields are updated with the values that are provided in the request. You cannot update some fields independent of others. To update a continuous deployment policy configuration:</p> <ol> <li> <p>Use <code>GetContinuousDeploymentPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the continuous deployment policy configuration that you want to update.</p> </li> <li> <p>Use <code>UpdateContinuousDeploymentPolicy</code>, providing the entire continuous deployment policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/continuous-deployment-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Distribution 2020 05 31",
					"value": "Delete Distribution 2020 05 31",
					"action": "Delete Distribution 2020 05 31",
					"description": "Delete a distribution.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/distribution/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Distribution 2020 05 31",
					"value": "Get Distribution 2020 05 31",
					"action": "Get Distribution 2020 05 31",
					"description": "Get the information about a distribution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distribution/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Field Level Encryption Config 2020 05 31",
					"value": "Delete Field Level Encryption Config 2020 05 31",
					"action": "Delete Field Level Encryption Config 2020 05 31",
					"description": "Remove a field-level encryption configuration.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/field-level-encryption/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Field Level Encryption 2020 05 31",
					"value": "Get Field Level Encryption 2020 05 31",
					"action": "Get Field Level Encryption 2020 05 31",
					"description": "Get the field-level encryption configuration information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Field Level Encryption Profile 2020 05 31",
					"value": "Delete Field Level Encryption Profile 2020 05 31",
					"action": "Delete Field Level Encryption Profile 2020 05 31",
					"description": "Remove a field-level encryption profile.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/field-level-encryption-profile/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Field Level Encryption Profile 2020 05 31",
					"value": "Get Field Level Encryption Profile 2020 05 31",
					"action": "Get Field Level Encryption Profile 2020 05 31",
					"description": "Get the field-level encryption profile information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption-profile/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Function 2020 05 31",
					"value": "Delete Function 2020 05 31",
					"action": "Delete Function 2020 05 31",
					"description": "<p>Deletes a CloudFront function.</p> <p>You cannot delete a function if it's associated with a cache behavior. First, update your distributions to remove the function association from all cache behaviors, then delete the function.</p> <p>To delete a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}#If-Match"
						}
					}
				},
				{
					"name": "Update Function 2020 05 31",
					"value": "Update Function 2020 05 31",
					"action": "Update Function 2020 05 31",
					"description": "<p>Updates a CloudFront function.</p> <p>You can update a function's code or the comment that describes the function. You cannot update a function's name.</p> <p>To update a function, you provide the function's name and version (<code>ETag</code> value) along with the updated function code. To get the name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}#If-Match"
						}
					}
				},
				{
					"name": "Delete Key Group 2020 05 31",
					"value": "Delete Key Group 2020 05 31",
					"action": "Delete Key Group 2020 05 31",
					"description": "<p>Deletes a key group.</p> <p>You cannot delete a key group that is referenced in a cache behavior. First update your distributions to remove the key group from all cache behaviors, then delete the key group.</p> <p>To delete a key group, you must provide the key group's identifier and version. To get these values, use <code>ListKeyGroups</code> followed by <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/key-group/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Key Group 2020 05 31",
					"value": "Get Key Group 2020 05 31",
					"action": "Get Key Group 2020 05 31",
					"description": "<p>Gets a key group, including the date and time when the key group was last modified.</p> <p>To get a key group, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/key-group/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Update Key Group 2020 05 31",
					"value": "Update Key Group 2020 05 31",
					"action": "Update Key Group 2020 05 31",
					"description": "<p>Updates a key group.</p> <p>When you update a key group, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update a key group:</p> <ol> <li> <p>Get the current key group with <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.</p> </li> <li> <p>Locally modify the fields in the key group that you want to update. For example, add or remove public key IDs.</p> </li> <li> <p>Call <code>UpdateKeyGroup</code> with the entire key group object, including the fields that you modified and those that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/key-group/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Origin Access Control 2020 05 31",
					"value": "Delete Origin Access Control 2020 05 31",
					"action": "Delete Origin Access Control 2020 05 31",
					"description": "<p>Deletes a CloudFront origin access control.</p> <p>You cannot delete an origin access control if it's in use. First, update all distributions to remove the origin access control from all origins, then delete the origin access control.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/origin-access-control/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Origin Access Control 2020 05 31",
					"value": "Get Origin Access Control 2020 05 31",
					"action": "Get Origin Access Control 2020 05 31",
					"description": "Gets a CloudFront origin access control, including its unique identifier.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-control/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Origin Request Policy 2020 05 31",
					"value": "Delete Origin Request Policy 2020 05 31",
					"action": "Delete Origin Request Policy 2020 05 31",
					"description": "<p>Deletes an origin request policy.</p> <p>You cannot delete an origin request policy if it's attached to any cache behaviors. First update your distributions to remove the origin request policy from all cache behaviors, then delete the origin request policy.</p> <p>To delete an origin request policy, you must provide the policy's identifier and version. To get the identifier, you can use <code>ListOriginRequestPolicies</code> or <code>GetOriginRequestPolicy</code>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/origin-request-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Origin Request Policy 2020 05 31",
					"value": "Get Origin Request Policy 2020 05 31",
					"action": "Get Origin Request Policy 2020 05 31",
					"description": "<p>Gets an origin request policy, including the following metadata:</p> <ul> <li> <p>The policy's identifier.</p> </li> <li> <p>The date and time when the policy was last modified.</p> </li> </ul> <p>To get an origin request policy, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-request-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Update Origin Request Policy 2020 05 31",
					"value": "Update Origin Request Policy 2020 05 31",
					"action": "Update Origin Request Policy 2020 05 31",
					"description": "<p>Updates an origin request policy configuration.</p> <p>When you update an origin request policy configuration, all the fields are updated with the values provided in the request. You cannot update some fields independent of others. To update an origin request policy configuration:</p> <ol> <li> <p>Use <code>GetOriginRequestPolicyConfig</code> to get the current configuration.</p> </li> <li> <p>Locally modify the fields in the origin request policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateOriginRequestPolicy</code> by providing the entire origin request policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/origin-request-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Public Key 2020 05 31",
					"value": "Delete Public Key 2020 05 31",
					"action": "Delete Public Key 2020 05 31",
					"description": "Remove a public key you previously added to CloudFront.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/public-key/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Public Key 2020 05 31",
					"value": "Get Public Key 2020 05 31",
					"action": "Get Public Key 2020 05 31",
					"description": "Gets a public key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/public-key/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Realtime Log Config 2020 05 31",
					"value": "Delete Realtime Log Config 2020 05 31",
					"action": "Delete Realtime Log Config 2020 05 31",
					"description": "<p>Deletes a real-time log configuration.</p> <p>You cannot delete a real-time log configuration if it's attached to a cache behavior. First update your distributions to remove the real-time log configuration from all cache behaviors, then delete the real-time log configuration.</p> <p>To delete a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to delete.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/delete-realtime-log-config/"
						}
					}
				},
				{
					"name": "Delete Response Headers Policy 2020 05 31",
					"value": "Delete Response Headers Policy 2020 05 31",
					"action": "Delete Response Headers Policy 2020 05 31",
					"description": "<p>Deletes a response headers policy.</p> <p>You cannot delete a response headers policy if it's attached to a cache behavior. First update your distributions to remove the response headers policy from all cache behaviors, then delete the response headers policy.</p> <p>To delete a response headers policy, you must provide the policy's identifier and version. To get these values, you can use <code>ListResponseHeadersPolicies</code> or <code>GetResponseHeadersPolicy</code>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/response-headers-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Response Headers Policy 2020 05 31",
					"value": "Get Response Headers Policy 2020 05 31",
					"action": "Get Response Headers Policy 2020 05 31",
					"description": "<p>Gets a response headers policy, including metadata (the policy's identifier and the date and time when the policy was last modified).</p> <p>To get a response headers policy, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/response-headers-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Update Response Headers Policy 2020 05 31",
					"value": "Update Response Headers Policy 2020 05 31",
					"action": "Update Response Headers Policy 2020 05 31",
					"description": "<p>Updates a response headers policy.</p> <p>When you update a response headers policy, the entire policy is replaced. You cannot update some policy fields independent of others. To update a response headers policy configuration:</p> <ol> <li> <p>Use <code>GetResponseHeadersPolicyConfig</code> to get the current policy's configuration.</p> </li> <li> <p>Modify the fields in the response headers policy configuration that you want to update.</p> </li> <li> <p>Call <code>UpdateResponseHeadersPolicy</code>, providing the entire response headers policy configuration, including the fields that you modified and those that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/response-headers-policy/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Delete Streaming Distribution 2020 05 31",
					"value": "Delete Streaming Distribution 2020 05 31",
					"action": "Delete Streaming Distribution 2020 05 31",
					"description": "<p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html\">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/2020-05-31/streaming-distribution/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Streaming Distribution 2020 05 31",
					"value": "Get Streaming Distribution 2020 05 31",
					"action": "Get Streaming Distribution 2020 05 31",
					"description": "Gets information about a specified RTMP distribution, including the distribution configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/streaming-distribution/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Describe Function 2020 05 31",
					"value": "Describe Function 2020 05 31",
					"action": "Describe Function 2020 05 31",
					"description": "<p>Gets configuration information and metadata about a CloudFront function, but not the function's code. To get a function's code, use <code>GetFunction</code>.</p> <p>To get configuration information and metadata about a function, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}/describe"
						}
					}
				},
				{
					"name": "Get Cache Policy Config 2020 05 31",
					"value": "Get Cache Policy Config 2020 05 31",
					"action": "Get Cache Policy Config 2020 05 31",
					"description": "<p>Gets a cache policy configuration.</p> <p>To get a cache policy configuration, you must provide the policy's identifier. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/cache-policy/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Cloud Front Origin Access Identity Config 2020 05 31",
					"value": "Get Cloud Front Origin Access Identity Config 2020 05 31",
					"action": "Get Cloud Front Origin Access Identity Config 2020 05 31",
					"description": "Get the configuration information about an origin access identity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-identity/cloudfront/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Cloud Front Origin Access Identity 2020 05 31",
					"value": "Update Cloud Front Origin Access Identity 2020 05 31",
					"action": "Update Cloud Front Origin Access Identity 2020 05 31",
					"description": "Update an origin access identity.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/origin-access-identity/cloudfront/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Continuous Deployment Policy Config 2020 05 31",
					"value": "Get Continuous Deployment Policy Config 2020 05 31",
					"action": "Get Continuous Deployment Policy Config 2020 05 31",
					"description": "Gets configuration information about a continuous deployment policy.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/continuous-deployment-policy/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Distribution Config 2020 05 31",
					"value": "Get Distribution Config 2020 05 31",
					"action": "Get Distribution Config 2020 05 31",
					"description": "Get the configuration information about a distribution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distribution/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Distribution 2020 05 31",
					"value": "Update Distribution 2020 05 31",
					"action": "Update Distribution 2020 05 31",
					"description": "<p>Updates the configuration for a CloudFront distribution.</p> <p>The update process includes getting the current distribution configuration, updating it to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Use <code>GetDistributionConfig</code> to get the current configuration, including the version identifier (<code>ETag</code>).</p> </li> <li> <p>Update the distribution configuration that was returned in the response. Note the following important requirements and restrictions:</p> <ul> <li> <p>You must rename the <code>ETag</code> field to <code>IfMatch</code>, leaving the value unchanged. (Set the value of <code>IfMatch</code> to the value of <code>ETag</code>, then remove the <code>ETag</code> field.)</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>.</p> </li> </ul> </li> <li> <p>Submit an <code>UpdateDistribution</code> request, providing the distribution configuration. The new configuration replaces the existing configuration. The values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. Make sure to include all fields: the ones that you modified and also the ones that you didn't.</p> </li> </ol>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/distribution/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Field Level Encryption Config 2020 05 31",
					"value": "Get Field Level Encryption Config 2020 05 31",
					"action": "Get Field Level Encryption Config 2020 05 31",
					"description": "Get the field-level encryption configuration information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Field Level Encryption Config 2020 05 31",
					"value": "Update Field Level Encryption Config 2020 05 31",
					"action": "Update Field Level Encryption Config 2020 05 31",
					"description": "Update a field-level encryption configuration.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/field-level-encryption/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Field Level Encryption Profile Config 2020 05 31",
					"value": "Get Field Level Encryption Profile Config 2020 05 31",
					"action": "Get Field Level Encryption Profile Config 2020 05 31",
					"description": "Get the field-level encryption profile configuration information.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/field-level-encryption-profile/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Field Level Encryption Profile 2020 05 31",
					"value": "Update Field Level Encryption Profile 2020 05 31",
					"action": "Update Field Level Encryption Profile 2020 05 31",
					"description": "Update a field-level encryption profile.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/field-level-encryption-profile/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Function 2020 05 31",
					"value": "Get Function 2020 05 31",
					"action": "Get Function 2020 05 31",
					"description": "<p>Gets the code of a CloudFront function. To get configuration information and metadata about a function, use <code>DescribeFunction</code>.</p> <p>To get a function's code, you must provide the function's name and stage. To get these values, you can use <code>ListFunctions</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}"
						}
					}
				},
				{
					"name": "Get Invalidation 2020 05 31",
					"value": "Get Invalidation 2020 05 31",
					"action": "Get Invalidation 2020 05 31",
					"description": "Get the information about an invalidation.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distribution/{{$parameter[\"DistributionId\"]}}/invalidation/{{$parameter[\"Id\"]}}"
						}
					}
				},
				{
					"name": "Get Key Group Config 2020 05 31",
					"value": "Get Key Group Config 2020 05 31",
					"action": "Get Key Group Config 2020 05 31",
					"description": "<p>Gets a key group configuration.</p> <p>To get a key group configuration, you must provide the key group's identifier. If the key group is referenced in a distribution's cache behavior, you can get the key group's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the key group is not referenced in a cache behavior, you can get the identifier using <code>ListKeyGroups</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/key-group/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Origin Access Control Config 2020 05 31",
					"value": "Get Origin Access Control Config 2020 05 31",
					"action": "Get Origin Access Control Config 2020 05 31",
					"description": "Gets a CloudFront origin access control configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-access-control/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Origin Access Control 2020 05 31",
					"value": "Update Origin Access Control 2020 05 31",
					"action": "Update Origin Access Control 2020 05 31",
					"description": "Updates a CloudFront origin access control.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/origin-access-control/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Origin Request Policy Config 2020 05 31",
					"value": "Get Origin Request Policy Config 2020 05 31",
					"action": "Get Origin Request Policy Config 2020 05 31",
					"description": "<p>Gets an origin request policy configuration.</p> <p>To get an origin request policy configuration, you must provide the policy's identifier. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/origin-request-policy/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Public Key Config 2020 05 31",
					"value": "Get Public Key Config 2020 05 31",
					"action": "Get Public Key Config 2020 05 31",
					"description": "Gets a public key configuration.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/public-key/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Public Key 2020 05 31",
					"value": "Update Public Key 2020 05 31",
					"action": "Update Public Key 2020 05 31",
					"description": "Update public key information. Note that the only value you can change is the comment.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/public-key/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Realtime Log Config 2020 05 31",
					"value": "Get Realtime Log Config 2020 05 31",
					"action": "Get Realtime Log Config 2020 05 31",
					"description": "<p>Gets a real-time log configuration.</p> <p>To get a real-time log configuration, you can provide the configuration's name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to get.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/get-realtime-log-config/"
						}
					}
				},
				{
					"name": "Get Response Headers Policy Config 2020 05 31",
					"value": "Get Response Headers Policy Config 2020 05 31",
					"action": "Get Response Headers Policy Config 2020 05 31",
					"description": "<p>Gets a response headers policy configuration.</p> <p>To get a response headers policy configuration, you must provide the policy's identifier. If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/response-headers-policy/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Get Streaming Distribution Config 2020 05 31",
					"value": "Get Streaming Distribution Config 2020 05 31",
					"action": "Get Streaming Distribution Config 2020 05 31",
					"description": "Get the configuration information about a streaming distribution.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/streaming-distribution/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "Update Streaming Distribution 2020 05 31",
					"value": "Update Streaming Distribution 2020 05 31",
					"action": "Update Streaming Distribution 2020 05 31",
					"description": "Update a streaming distribution.",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/streaming-distribution/{{$parameter[\"Id\"]}}/config"
						}
					}
				},
				{
					"name": "List Conflicting Aliases 2020 05 31",
					"value": "List Conflicting Aliases 2020 05 31",
					"action": "List Conflicting Aliases 2020 05 31",
					"description": "<p>Gets a list of aliases (also called CNAMEs or alternate domain names) that conflict or overlap with the provided alias, and the associated CloudFront distributions and Amazon Web Services accounts for each conflicting alias. In the returned list, the distribution and account IDs are partially hidden, which allows you to identify the distributions and accounts that you own, but helps to protect the information of ones that you don't own.</p> <p>Use this operation to find aliases that are in use in CloudFront that conflict or overlap with the provided alias. For example, if you provide <code>www.example.com</code> as input, the returned list can include <code>www.example.com</code> and the overlapping wildcard alternate domain name (<code>*.example.com</code>), if they exist. If you provide <code>*.example.com</code> as input, the returned list can include <code>*.example.com</code> and any alternate domain names covered by that wildcard (for example, <code>www.example.com</code>, <code>test.example.com</code>, <code>dev.example.com</code>, and so on), if they exist.</p> <p>To list conflicting aliases, you provide the alias to search and the ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias. For more information, including how to set up the distribution and certificate, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/CNAMEs.html#alternate-domain-names-move\">Moving an alternate domain name to a different distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/conflicting-alias#DistributionId&Alias"
						}
					}
				},
				{
					"name": "List Distributions By Cache Policy Id 2020 05 31",
					"value": "List Distributions By Cache Policy Id 2020 05 31",
					"action": "List Distributions By Cache Policy Id 2020 05 31",
					"description": "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified cache policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributionsByCachePolicyId/{{$parameter[\"CachePolicyId\"]}}"
						}
					}
				},
				{
					"name": "List Distributions By Key Group 2020 05 31",
					"value": "List Distributions By Key Group 2020 05 31",
					"action": "List Distributions By Key Group 2020 05 31",
					"description": "<p>Gets a list of distribution IDs for distributions that have a cache behavior that references the specified key group.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributionsByKeyGroupId/{{$parameter[\"KeyGroupId\"]}}"
						}
					}
				},
				{
					"name": "List Distributions By Origin Request Policy Id 2020 05 31",
					"value": "List Distributions By Origin Request Policy Id 2020 05 31",
					"action": "List Distributions By Origin Request Policy Id 2020 05 31",
					"description": "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified origin request policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributionsByOriginRequestPolicyId/{{$parameter[\"OriginRequestPolicyId\"]}}"
						}
					}
				},
				{
					"name": "List Distributions By Realtime Log Config 2020 05 31",
					"value": "List Distributions By Realtime Log Config 2020 05 31",
					"action": "List Distributions By Realtime Log Config 2020 05 31",
					"description": "<p>Gets a list of distributions that have a cache behavior that's associated with the specified real-time log configuration.</p> <p>You can specify the real-time log configuration by its name or its Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the name to identify the real-time log configuration to list distributions for.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/distributionsByRealtimeLogConfig/"
						}
					}
				},
				{
					"name": "List Distributions By Response Headers Policy Id 2020 05 31",
					"value": "List Distributions By Response Headers Policy Id 2020 05 31",
					"action": "List Distributions By Response Headers Policy Id 2020 05 31",
					"description": "<p>Gets a list of distribution IDs for distributions that have a cache behavior that's associated with the specified response headers policy.</p> <p>You can optionally specify the maximum number of items to receive in the response. If the total number of items in the list exceeds the maximum that you specify, or the default maximum, the response is paginated. To get the next page of items, send a subsequent request that specifies the <code>NextMarker</code> value from the current response as the <code>Marker</code> value in the subsequent request.</p>",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributionsByResponseHeadersPolicyId/{{$parameter[\"ResponseHeadersPolicyId\"]}}"
						}
					}
				},
				{
					"name": "List Distributions By Web ACL Id 2020 05 31",
					"value": "List Distributions By Web ACL Id 2020 05 31",
					"action": "List Distributions By Web ACL Id 2020 05 31",
					"description": "List the distributions that are associated with a specified WAF web ACL.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/distributionsByWebACLId/{{$parameter[\"WebACLId\"]}}"
						}
					}
				},
				{
					"name": "List Tags For Resource 2020 05 31",
					"value": "List Tags For Resource 2020 05 31",
					"action": "List Tags For Resource 2020 05 31",
					"description": "List tags for a CloudFront resource.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/2020-05-31/tagging#Resource"
						}
					}
				},
				{
					"name": "Publish Function 2020 05 31",
					"value": "Publish Function 2020 05 31",
					"action": "Publish Function 2020 05 31",
					"description": "<p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code> stage to <code>LIVE</code>. This automatically updates all cache behaviors that are using this function to use the newly published copy in the <code>LIVE</code> stage.</p> <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to a distribution's cache behavior, using the function's Amazon Resource Name (ARN).</p> <p>To publish a function, you must provide the function's name and version (<code>ETag</code> value). To get these values, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}/publish#If-Match"
						}
					}
				},
				{
					"name": "Tag Resource 2020 05 31",
					"value": "Tag Resource 2020 05 31",
					"action": "Tag Resource 2020 05 31",
					"description": "Add tags to a CloudFront resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/tagging#Operation=Tag&Resource"
						}
					}
				},
				{
					"name": "Test Function 2020 05 31",
					"value": "Test Function 2020 05 31",
					"action": "Test Function 2020 05 31",
					"description": "<p>Tests a CloudFront function.</p> <p>To test a function, you provide an <i>event object</i> that represents an HTTP request or response that your CloudFront distribution could receive in production. CloudFront runs the function, passing it the event object that you provided, and returns the function's result (the modified event object) in the response. The response also contains function logs and error messages, if any exist. For more information about testing functions, see <a href=\"https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function\">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p>To test a function, you provide the function's name and version (<code>ETag</code> value) along with the event object. To get the function's name and version, you can use <code>ListFunctions</code> and <code>DescribeFunction</code>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/function/{{$parameter[\"Name\"]}}/test#If-Match"
						}
					}
				},
				{
					"name": "Untag Resource 2020 05 31",
					"value": "Untag Resource 2020 05 31",
					"action": "Untag Resource 2020 05 31",
					"description": "Remove tags from a CloudFront resource.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/2020-05-31/tagging#Operation=Untag&Resource"
						}
					}
				},
				{
					"name": "Update Distribution With Staging Config 2020 05 31",
					"value": "Update Distribution With Staging Config 2020 05 31",
					"action": "Update Distribution With Staging Config 2020 05 31",
					"description": "<p>Copies the staging distribution's configuration to its corresponding primary distribution. The primary distribution retains its <code>Aliases</code> (also known as alternate domain names or CNAMEs) and <code>ContinuousDeploymentPolicyId</code> value, but otherwise its configuration is overwritten to match the staging distribution.</p> <p>You can use this operation in a continuous deployment workflow after you have tested configuration changes on the staging distribution. After using a continuous deployment policy to move a portion of your domain name's traffic to the staging distribution and verifying that it works as intended, you can use this operation to copy the staging distribution's configuration to the primary distribution. This action will disable the continuous deployment policy and move your domain's traffic back to the primary distribution.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/distribution/{{$parameter[\"Id\"]}}/promote-staging-config"
						}
					}
				},
				{
					"name": "Update Realtime Log Config 2020 05 31",
					"value": "Update Realtime Log Config 2020 05 31",
					"action": "Update Realtime Log Config 2020 05 31",
					"description": "<p>Updates a real-time log configuration.</p> <p>When you update a real-time log configuration, all the parameters are updated with the values provided in the request. You cannot update some parameters independent of others. To update a real-time log configuration:</p> <ol> <li> <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log configuration.</p> </li> <li> <p>Locally modify the parameters in the real-time log configuration that you want to update.</p> </li> <li> <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire real-time log configuration, including the parameters that you modified and those that you didn't.</p> </li> </ol> <p>You cannot update a real-time log configuration's <code>Name</code> or <code>ARN</code>.</p>",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/2020-05-31/realtime-log-config/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "PUT /2020-05-31/distribution/{TargetDistributionId}/associate-alias#Alias",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Alias 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Target Distribution Id",
			"name": "TargetDistributionId",
			"required": true,
			"description": "The ID of the distribution that you're associating the alias with.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Alias 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Alias",
			"name": "Alias",
			"required": true,
			"description": "The alias (also known as a CNAME) to add to the target distribution.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Alias",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Alias 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Associate Alias 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution/{PrimaryDistributionId}/copy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Primary Distribution Id",
			"name": "PrimaryDistributionId",
			"required": true,
			"description": "The identifier of the primary distribution whose configuration you are copying. To get a distribution ID, use <code>ListDistributions</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Staging",
			"name": "Staging",
			"description": "The type of distribution that your primary distribution will be copied to. The only valid value is <code>True</code>, indicating that you are copying to a staging distribution.",
			"default": true,
			"type": "boolean",
			"routing": {
				"request": {
					"headers": {
						"Staging": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version identifier of the primary distribution whose configuration you are copying. This is the <code>ETag</code> value returned in the response to <code>GetDistribution</code> and <code>GetDistributionConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution/{PrimaryDistributionId}/copy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Copy Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/cache-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/cache-policy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/cache-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cache Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "<p>A filter to return only the specified kinds of cache policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>",
			"default": "managed",
			"type": "options",
			"options": [
				{
					"name": "Managed",
					"value": "managed"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cache Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of cache policies. The response includes cache policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cache Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of cache policies that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cache Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cache Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-access-identity/cloudfront",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-access-identity/cloudfront<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-identity/cloudfront",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cloud Front Origin Access Identities 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this when paginating results to indicate where to begin in your list of origin access identities. The results include identities in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last identity on that page).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cloud Front Origin Access Identities 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of origin access identities you want in the response body.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cloud Front Origin Access Identities 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cloud Front Origin Access Identities 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/continuous-deployment-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/continuous-deployment-policy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/continuous-deployment-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Continuous Deployment Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of continuous deployment policies. The response includes policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Continuous Deployment Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of continuous deployment policies that you want returned in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Continuous Deployment Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Continuous Deployment Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distribution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this when paginating results to indicate where to begin in your list of distributions. The results include distributions in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last distribution on that page).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distributions you want in the response body.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution#WithTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "With Tags",
			"name": "WithTags",
			"required": true,
			"default": true,
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": true
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "WithTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution#WithTags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/field-level-encryption",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/field-level-encryption<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of field-level encryption configurations you want in the response body.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/field-level-encryption-profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/field-level-encryption-profile<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption-profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Profiles 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Profiles 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of field-level encryption profiles you want in the response body. ",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Profiles 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Field Level Encryption Profiles 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/function",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/function<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/function",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Functions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of functions. The response includes functions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Functions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of functions that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Functions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "Stage",
			"description": "An optional filter to return only the functions that are in the specified stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.",
			"default": "DEVELOPMENT",
			"type": "options",
			"options": [
				{
					"name": "DEVELOPMENT",
					"value": "DEVELOPMENT"
				},
				{
					"name": "LIVE",
					"value": "LIVE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Functions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Functions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution/{DistributionId}/invalidation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The distribution's id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distribution/{DistributionId}/invalidation<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distribution/{DistributionId}/invalidation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Invalidations 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The distribution's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Invalidations 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response. This value is the same as the ID of the last invalidation batch on that page.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Invalidations 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of invalidation batches that you want in the response body.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Invalidations 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Invalidations 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/key-group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/key-group<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/key-group",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Groups 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of key groups. The response includes key groups in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Groups 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of key groups that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Groups 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Key Groups 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distributions/{DistributionId}/monitoring-subscription/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The ID of the distribution that you are enabling metrics for.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distributions/{DistributionId}/monitoring-subscription/<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/distributions/{DistributionId}/monitoring-subscription/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The ID of the distribution that you are disabling metrics for.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributions/{DistributionId}/monitoring-subscription/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The ID of the distribution that you are getting metrics information for.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Monitoring Subscription 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-access-control",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-access-control<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-control",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Access Controls 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of origin access controls. The response includes the items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Access Controls 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of origin access controls that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Access Controls 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Access Controls 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-request-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/origin-request-policy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-request-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Request Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "<p>A filter to return only the specified kinds of origin request policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Returns only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Returns only the custom policies created in your Amazon Web Services account.</p> </li> </ul>",
			"default": "managed",
			"type": "options",
			"options": [
				{
					"name": "Managed",
					"value": "managed"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Request Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of origin request policies. The response includes origin request policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Request Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of origin request policies that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Request Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Origin Request Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/public-key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/public-key<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/public-key",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the <code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page).",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of public keys you want in the response body.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Public Keys 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/realtime-log-config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/realtime-log-config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/realtime-log-config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Realtime Log Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of real-time log configurations that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Realtime Log Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of real-time log configurations. The response includes real-time log configurations in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Realtime Log Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Realtime Log Configs 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/response-headers-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/response-headers-policy<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/response-headers-policy",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Response Headers Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "<p>A filter to get only the specified kind of response headers policies. Valid values are:</p> <ul> <li> <p> <code>managed</code> – Gets only the managed policies created by Amazon Web Services.</p> </li> <li> <p> <code>custom</code> – Gets only the custom policies created in your Amazon Web Services account.</p> </li> </ul>",
			"default": "managed",
			"type": "options",
			"options": [
				{
					"name": "Managed",
					"value": "managed"
				},
				{
					"name": "Custom",
					"value": "custom"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Response Headers Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of response headers policies. The response includes response headers policies in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Response Headers Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of response headers policies that you want to get in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Response Headers Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Response Headers Policies 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/streaming-distribution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/streaming-distribution<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/streaming-distribution",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Streaming Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "The value that you provided for the <code>Marker</code> request parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Streaming Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The value that you provided for the <code>MaxItems</code> request parameter.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Streaming Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Streaming Distributions 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/streaming-distribution#WithTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "With Tags",
			"name": "WithTags",
			"required": true,
			"default": true,
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": true
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "WithTags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/streaming-distribution#WithTags<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Streaming Distribution With Tags 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/cache-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the cache policy that you are deleting. To get the identifier, you can use <code>ListCachePolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the cache policy that you are deleting. The version is the cache policy's <code>ETag</code> value, which you can get using <code>ListCachePolicies</code>, <code>GetCachePolicy</code>, or <code>GetCachePolicyConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/cache-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/cache-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the cache policy that you are updating. The identifier is returned in a cache behavior's <code>CachePolicyId</code> field in the response to <code>GetDistributionConfig</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the cache policy that you are updating. The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetCachePolicyConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/cache-policy/{Id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cache Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/origin-access-identity/cloudfront/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The origin access identity's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header you received from a previous <code>GET</code> or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-identity/cloudfront/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identity's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/continuous-deployment-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the continuous deployment policy that you are deleting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The current version (<code>ETag</code> value) of the continuous deployment policy that you are deleting.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/continuous-deployment-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the continuous deployment policy that you are getting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/continuous-deployment-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the continuous deployment policy that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The current version (<code>ETag</code> value) of the continuous deployment policy that you are updating.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/continuous-deployment-policy/{Id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Continuous Deployment Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/distribution/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The distribution ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when you disabled the distribution. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distribution/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The distribution's ID. If the ID is empty, an empty distribution configuration is returned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/field-level-encryption/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The ID of the configuration you want to delete from CloudFront.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "Request the ID for the field-level encryption configuration information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/field-level-encryption-profile/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "Request the ID of the profile you want to delete from CloudFront.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption-profile/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "Get the ID for the field-level encryption profile information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/function/{Name}#If-Match",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function that you are deleting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "The current version (<code>ETag</code> value) of the function that you are deleting, which you can get using <code>DescribeFunction</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/function/{Name}#If-Match",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "The current version (<code>ETag</code> value) of the function that you are updating, which you can get using <code>DescribeFunction</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/function/{Name}#If-Match<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/key-group/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the key group that you are deleting. To get the identifier, use <code>ListKeyGroups</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the key group that you are deleting. The version is the key group's <code>ETag</code> value. To get the <code>ETag</code>, use <code>GetKeyGroup</code> or <code>GetKeyGroupConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/key-group/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the key group that you are getting. To get the identifier, use <code>ListKeyGroups</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/key-group/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the key group that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the key group that you are updating. The version is the key group's <code>ETag</code> value.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/key-group/{Id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/origin-access-control/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier of the origin access control that you are deleting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The current version (<code>ETag</code> value) of the origin access control that you are deleting.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-control/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier of the origin access control.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/origin-request-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the origin request policy that you are deleting. To get the identifier, you can use <code>ListOriginRequestPolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the origin request policy that you are deleting. The version is the origin request policy's <code>ETag</code> value, which you can get using <code>ListOriginRequestPolicies</code>, <code>GetOriginRequestPolicy</code>, or <code>GetOriginRequestPolicyConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-request-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-request-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the origin request policy that you are updating. The identifier is returned in a cache behavior's <code>OriginRequestPolicyId</code> field in the response to <code>GetDistributionConfig</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The version of the origin request policy that you are updating. The version is returned in the origin request policy's <code>ETag</code> field in the response to <code>GetOriginRequestPolicyConfig</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-request-policy/{Id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Request Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/public-key/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The ID of the public key you want to remove from CloudFront.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/public-key/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the public key you are getting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/delete-realtime-log-config/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/delete-realtime-log-config/<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/response-headers-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "<p>The identifier for the response headers policy that you are deleting.</p> <p>To get the identifier, you can use <code>ListResponseHeadersPolicies</code>.</p>",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "<p>The version of the response headers policy that you are deleting.</p> <p>The version is the response headers policy's <code>ETag</code> value, which you can get using <code>ListResponseHeadersPolicies</code>, <code>GetResponseHeadersPolicy</code>, or <code>GetResponseHeadersPolicyConfig</code>.</p>",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/response-headers-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/response-headers-policy/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier for the response headers policy that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "<p>The version of the response headers policy that you are updating.</p> <p>The version is returned in the cache policy's <code>ETag</code> field in the response to <code>GetResponseHeadersPolicyConfig</code>.</p>",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/response-headers-policy/{Id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Response Headers Policy 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "DELETE /2020-05-31/streaming-distribution/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The distribution ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when you disabled the streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/streaming-distribution/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The streaming distribution's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/function/{Name}/describe",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function that you are getting information about.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "Stage",
			"description": "The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.",
			"default": "DEVELOPMENT",
			"type": "options",
			"options": [
				{
					"name": "DEVELOPMENT",
					"value": "DEVELOPMENT"
				},
				{
					"name": "LIVE",
					"value": "LIVE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/cache-policy/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the cache policy. If the cache policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the cache policy is not attached to a cache behavior, you can get the identifier using <code>ListCachePolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cache Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identity's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cloud Front Origin Access Identity Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-access-identity/cloudfront/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identity's id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-access-identity/cloudfront/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cloud Front Origin Access Identity 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/continuous-deployment-policy/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the continuous deployment policy whose configuration you are getting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Continuous Deployment Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distribution/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The distribution's ID. If the ID is empty, an empty distribution configuration is returned.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/distribution/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The distribution's id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/distribution/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "Request the ID for the field-level encryption configuration information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/field-level-encryption/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The ID of the configuration you want to update.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/field-level-encryption/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/field-level-encryption-profile/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "Get the ID for the field-level encryption profile configuration information.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Field Level Encryption Profile Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/field-level-encryption-profile/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The ID of the field-level encryption profile request.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/field-level-encryption-profile/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Field Level Encryption Profile 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/function/{Name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function whose code you are getting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Stage",
			"name": "Stage",
			"description": "The function's stage, either <code>DEVELOPMENT</code> or <code>LIVE</code>.",
			"default": "DEVELOPMENT",
			"type": "options",
			"options": [
				{
					"name": "DEVELOPMENT",
					"value": "DEVELOPMENT"
				},
				{
					"name": "LIVE",
					"value": "LIVE"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Stage",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distribution/{DistributionId}/invalidation/{Id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The distribution's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier for the invalidation request, for example, <code>IDFDVBD632BHDS5</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Invalidation 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/key-group/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the key group whose configuration you are getting. To get the identifier, use <code>ListKeyGroups</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Key Group Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-access-control/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier of the origin access control.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Access Control Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-access-control/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier of the origin access control that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The current version (<code>ETag</code> value) of the origin access control that you are updating.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/origin-access-control/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Origin Access Control 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/origin-request-policy/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The unique identifier for the origin request policy. If the origin request policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the origin request policy is not attached to a cache behavior, you can get the identifier using <code>ListOriginRequestPolicies</code>.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Origin Request Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/public-key/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the public key whose configuration you are getting.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Public Key Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/public-key/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the public key that you are updating.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the public key to update. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/public-key/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Public Key 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/get-realtime-log-config/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/get-realtime-log-config/<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/response-headers-policy/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "<p>The identifier for the response headers policy.</p> <p>If the response headers policy is attached to a distribution's cache behavior, you can get the policy's identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the response headers policy is not attached to a cache behavior, you can get the identifier using <code>ListResponseHeadersPolicies</code>.</p>",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Response Headers Policy Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/streaming-distribution/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The streaming distribution's ID.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Streaming Distribution Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/streaming-distribution/{Id}/config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The streaming distribution's id.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/streaming-distribution/{Id}/config<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Streaming Distribution 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/conflicting-alias#DistributionId&Alias",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Distribution Id",
			"name": "DistributionId",
			"required": true,
			"description": "The ID of a distribution in your account that has an attached SSL/TLS certificate that includes the provided alias.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DistributionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Alias",
			"name": "Alias",
			"required": true,
			"description": "The alias (also called a CNAME) to search for conflicting aliases.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Alias",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in the list of conflicting aliases. The response includes conflicting aliases in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of conflicting aliases that you want in the response.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Conflicting Aliases 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributionsByCachePolicyId/{CachePolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Cache Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Cache Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distribution IDs that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Cache Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Cache Policy Id",
			"name": "CachePolicyId",
			"required": true,
			"description": "The ID of the cache policy whose associated distribution IDs you want to list.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Cache Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Cache Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributionsByKeyGroupId/{KeyGroupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distribution IDs that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Key Group Id",
			"name": "KeyGroupId",
			"required": true,
			"description": "The ID of the key group whose associated distribution IDs you are listing.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Key Group 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributionsByOriginRequestPolicyId/{OriginRequestPolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Origin Request Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Origin Request Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distribution IDs that you want in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Origin Request Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Origin Request Policy Id",
			"name": "OriginRequestPolicyId",
			"required": true,
			"description": "The ID of the origin request policy whose associated distribution IDs you want to list.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Origin Request Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Origin Request Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distributionsByRealtimeLogConfig/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/distributionsByRealtimeLogConfig/<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributionsByResponseHeadersPolicyId/{ResponseHeadersPolicyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Response Headers Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use this field when paginating results to indicate where to begin in your list of distribution IDs. The response includes distribution IDs in the list that occur after the marker. To get the next page of the list, set this field's value to the value of <code>NextMarker</code> from the current page's response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Response Headers Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distribution IDs that you want to get in the response.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Response Headers Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Response Headers Policy Id",
			"name": "ResponseHeadersPolicyId",
			"required": true,
			"description": "The ID of the response headers policy whose associated distribution IDs you want to list.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Response Headers Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Response Headers Policy Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/distributionsByWebACLId/{WebACLId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Web ACL Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Marker",
			"name": "Marker",
			"description": "Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If you have more than <code>MaxItems</code> distributions that satisfy the request, the response includes a <code>NextMarker</code> element. To get the next page of results, submit another request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code> from the last response. (For the first request, omit <code>Marker</code>.)",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Marker",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Web ACL Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Max Items",
			"name": "MaxItems",
			"description": "The maximum number of distributions that you want CloudFront to return in the response body. The maximum and default values are both 100.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxItems",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Web ACL Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Web ACL Id",
			"name": "WebACLId",
			"required": true,
			"description": "The ID of the WAF web ACL that you want to list the associated distributions. If you specify \"null\" for the ID, the request returns a list of the distributions that aren't associated with a web ACL.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Web ACL Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Distributions By Web ACL Id 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "GET /2020-05-31/tagging#Resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "Resource",
			"required": true,
			"description": "An ARN of a CloudFront resource.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/function/{Name}/publish#If-Match",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function that you are publishing.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "The current version (<code>ETag</code> value) of the function that you are publishing, which you can get using <code>DescribeFunction</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Publish Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/tagging#Operation=Tag&Resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "Resource",
			"required": true,
			"description": "An ARN of a CloudFront resource.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "Operation",
			"required": true,
			"default": "Tag",
			"type": "options",
			"options": [
				{
					"name": "Tag",
					"value": "Tag"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/tagging#Operation=Tag&Resource<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/function/{Name}/test#If-Match",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Test Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"required": true,
			"description": "The name of the function that you are testing.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Test Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"required": true,
			"description": "The current version (<code>ETag</code> value) of the function that you are testing, which you can get using <code>DescribeFunction</code>.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Test Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/function/{Name}/test#If-Match<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Test Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Test Function 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/tagging#Operation=Untag&Resource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Resource",
			"name": "Resource",
			"required": true,
			"description": "An ARN of a CloudFront resource.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Resource",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Operation",
			"name": "Operation",
			"required": true,
			"default": "Untag",
			"type": "options",
			"options": [
				{
					"name": "Untag",
					"value": "Untag"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Operation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "POST /2020-05-31/tagging#Operation=Untag&Resource<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/distribution/{Id}/promote-staging-config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution With Staging Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Id",
			"name": "Id",
			"required": true,
			"description": "The identifier of the primary distribution to which you are copying a staging distribution's configuration.",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution With Staging Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Staging Distribution Id",
			"name": "StagingDistributionId",
			"description": "The identifier of the staging distribution whose configuration you are copying to the primary distribution.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "StagingDistributionId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution With Staging Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "If Match",
			"name": "If-Match",
			"description": "<p>The current versions (<code>ETag</code> values) of both primary and staging distributions. Provide these in the following format:</p> <p> <code>&lt;primary ETag&gt;, &lt;staging ETag&gt;</code> </p>",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"If-Match": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution With Staging Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Distribution With Staging Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/realtime-log-config/",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "PUT /2020-05-31/realtime-log-config/<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Realtime Log Config 2020 05 31"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Realtime Log Config 2020 05 31"
					]
				}
			}
		},
];
