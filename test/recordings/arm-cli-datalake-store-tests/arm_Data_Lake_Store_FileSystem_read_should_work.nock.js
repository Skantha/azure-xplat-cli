// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '46153750-fa3b-4140-bf57-8beb7d5c971a',
    name: 'KonaMDI3_697842',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://xplattestadls7625.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=OPEN&offset=0&length=23&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls cli test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': 'ab0aadce-2eb5-4587-aeea-fd4e53b4d62a',
  'set-cookie': [ 'UserPrincipalSession=3593aa25-f971-41bd-9855-68149f69a957; path=/; secure; HttpOnly' ],
  'server-perf': '[ab0aadce2eb54587aeeafd4e53b4d62a][ AuthTime::1821.97818929584::PostAuthTime::398625.732319755 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:073 ms]%0a[OpenNewHandle :: 00:00:073 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:073 ms]%0a[Open :: 00:00:073 ms]%0a[FsReadStream :: 00:00:017 ms]%0a[OPEN :: 00:00:091 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:42 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7625.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=OPEN&offset=0&length=23&read=true&api-version=2015-10-01-preview')
  .reply(200, "adls cli test content!a", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'transfer-encoding': 'chunked',
  'content-type': 'application/octet-stream',
  expires: '-1',
  'x-ms-request-id': 'ab0aadce-2eb5-4587-aeea-fd4e53b4d62a',
  'set-cookie': [ 'UserPrincipalSession=3593aa25-f971-41bd-9855-68149f69a957; path=/; secure; HttpOnly' ],
  'server-perf': '[ab0aadce2eb54587aeeafd4e53b4d62a][ AuthTime::1821.97818929584::PostAuthTime::398625.732319755 ][GetCacheEntry :: 00:00:000 ms]%0a[FsOpenStream :: 00:00:073 ms]%0a[OpenNewHandle :: 00:00:073 ms]%0a[CreateCacheEntry :: 00:00:000 ms]%0a[GetOrCreateHandle :: 00:00:073 ms]%0a[Open :: 00:00:073 ms]%0a[FsReadStream :: 00:00:017 ms]%0a[OPEN :: 00:00:091 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:42 GMT',
  connection: 'close' });
 return result; }]];