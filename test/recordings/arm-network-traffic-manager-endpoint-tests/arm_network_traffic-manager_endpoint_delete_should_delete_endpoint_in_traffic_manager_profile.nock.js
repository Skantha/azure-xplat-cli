// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"foobartest-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '486',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1f21a61a-8d2f-47fc-8e55-f0bd49dc30bc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'acfc719d-c495-4725-aca8-561ff09c3a19',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093459Z:acfc719d-c495-4725-aca8-561ff09c3a19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "{\"id\":\"\\/subscriptions\\/2c224e7e-3ef5-431d-a57b-e71f4662e3a6\\/resourceGroups\\/xplat-test-traffic-manager-profile\\/providers\\/Microsoft.Network\\/trafficManagerProfiles\\/test-profile\\/externalEndpoints\\/test-enpoint\",\"name\":\"test-enpoint\",\"type\":\"Microsoft.Network\\/trafficManagerProfiles\\/externalEndpoints\",\"properties\":{\"endpointStatus\":\"Disabled\",\"endpointMonitorStatus\":\"Disabled\",\"target\":\"foobartest-profile-dns.azure.com\",\"weight\":101,\"priority\":202,\"endpointLocation\":\"East US\"}}", { 'cache-control': 'private',
  'content-length': '486',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': '1f21a61a-8d2f-47fc-8e55-f0bd49dc30bc',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': 'acfc719d-c495-4725-aca8-561ff09c3a19',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093459Z:acfc719d-c495-4725-aca8-561ff09c3a19',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:34:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'bc9867fd-85d6-47e2-bc1e-fe5f34ae14b4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd57728c4-e3dc-4f63-9047-93a4358de4e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093502Z:d57728c4-e3dc-4f63-9047-93a4358de4e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:35:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(200, "", { 'cache-control': 'private',
  'content-length': '0',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'bc9867fd-85d6-47e2-bc1e-fe5f34ae14b4',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'd57728c4-e3dc-4f63-9047-93a4358de4e9',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093502Z:d57728c4-e3dc-4f63-9047-93a4358de4e9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:35:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-enpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ab515a89-24b6-404c-be82-d86f0cec5b1d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5ffc4190-2739-4db5-8d86-e0522de041ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093504Z:5ffc4190-2739-4db5-8d86-e0522de041ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:35:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-traffic-manager-profile/providers/Microsoft.Network/trafficmanagerprofiles/test-profile/ExternalEndpoints/test-enpoint?api-version=2015-11-01')
  .reply(404, "{\"code\":\"NotFound\",\"message\":\"The endpoint 'test-enpoint' of type 'externalendpoints' does not exist in the profile 'test-profile'.\"}", { 'cache-control': 'private',
  'content-length': '133',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'x-ms-request-id': 'ab515a89-24b6-404c-be82-d86f0cec5b1d',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '5ffc4190-2739-4db5-8d86-e0522de041ff',
  'x-ms-routing-request-id': 'WESTEUROPE:20160218T093504Z:5ffc4190-2739-4db5-8d86-e0522de041ff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 18 Feb 2016 09:35:03 GMT',
  connection: 'close' });
 return result; }]];