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
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=MSCONCAT&deletesourcedirectory=false&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e9a9fe64-b331-4a2f-af08-cccc820c55ad',
  'server-perf': '[e9a9fe64b3314a2faf08cccc820c55ad][ AuthTime::864.371512949534::PostAuthTime::205.721275471908 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:035 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:00:751 ms]%0a[MSCONCAT :: 00:00:787 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:40 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7625.azuredatalakestore.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=MSCONCAT&deletesourcedirectory=false&api-version=2015-10-01-preview', '*')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'e9a9fe64-b331-4a2f-af08-cccc820c55ad',
  'server-perf': '[e9a9fe64b3314a2faf08cccc820c55ad][ AuthTime::864.371512949534::PostAuthTime::205.721275471908 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:035 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[FsMultiModifyStream :: 00:00:751 ms]%0a[MSCONCAT :: 00:00:787 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:40 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7625.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1450378960890,\"modificationTime\":1450378960940,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '225afff2-7411-4fb8-8e18-b056d6e58bd3',
  'server-perf': '[225afff274114fb88e18b056d6e58bd3][ AuthTime::903.720222247599::PostAuthTime::203.15527949248 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:046 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:047 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:41 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7625.azuredatalakestore.net:443')
  .get('/webhdfs/v1/adlsclifolder01%2Fconcatfile.txt?op=GETFILESTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"FileStatus\":{\"length\":44,\"pathSuffix\":\"\",\"type\":\"FILE\",\"blockSize\":268435456,\"accessTime\":1450378960890,\"modificationTime\":1450378960940,\"replication\":0,\"permission\":\"777\",\"owner\":\"NotSupportYet\",\"group\":\"NotSupportYet\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '225afff2-7411-4fb8-8e18-b056d6e58bd3',
  'server-perf': '[225afff274114fb88e18b056d6e58bd3][ AuthTime::903.720222247599::PostAuthTime::203.15527949248 ][IsExist :: 00:00:000 ms]%0a[HdfsGetFileStatus :: 00:00:046 ms]%0a[SS Response Process :: 00:00:000 ms]%0a[GETFILESTATUS :: 00:00:047 ms]%0a',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 17 Dec 2015 19:02:41 GMT',
  connection: 'close',
  'content-length': '223' });
 return result; }]];