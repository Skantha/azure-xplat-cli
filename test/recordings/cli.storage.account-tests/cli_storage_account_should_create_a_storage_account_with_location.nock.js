// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_STORAGE_TEST_LOCATION'] = 'West Europe';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
  process.env['AZURE_SITE_TEST_LOCATION'] = 'West Europe';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/storage/xcliaccount530',
  server: '1.0.6198.353 (rd_rdfe_stable.160407-1306) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'c6b680e9cd3c9f12b45bf03acae4a381',
  date: 'Thu, 14 Apr 2016 05:11:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/storageservices', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  'content-length': '0',
  location: 'https://management.core.windows.net/subscriptions/a0d901ba-9956-4f7d-830c-2d7974c36666/storage/xcliaccount530',
  server: '1.0.6198.353 (rd_rdfe_stable.160407-1306) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': 'c6b680e9cd3c9f12b45bf03acae4a381',
  date: 'Thu, 14 Apr 2016 05:11:09 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/operations/c6b680e9cd3c9f12b45bf03acae4a381')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>c6b680e9-cd3c-9f12-b45b-f03acae4a381</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.353 (rd_rdfe_stable.160407-1306) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '9fa5b8ae6e6a9f6a839760a3a9f9feee',
  date: 'Thu, 14 Apr 2016 05:11:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/operations/c6b680e9cd3c9f12b45bf03acae4a381')
  .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>c6b680e9-cd3c-9f12-b45b-f03acae4a381</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", { 'cache-control': 'no-cache',
  'content-length': '232',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.353 (rd_rdfe_stable.160407-1306) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'x-ms-request-id': '9fa5b8ae6e6a9f6a839760a3a9f9feee',
  date: 'Thu, 14 Apr 2016 05:11:42 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['xcliaccount530'];};