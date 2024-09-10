// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var auth_pb = require('./auth_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_auth_GenerateAuthChallengeRequest(arg) {
  if (!(arg instanceof auth_pb.GenerateAuthChallengeRequest)) {
    throw new Error('Expected argument of type auth.GenerateAuthChallengeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GenerateAuthChallengeRequest(buffer_arg) {
  return auth_pb.GenerateAuthChallengeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_GenerateAuthChallengeResponse(arg) {
  if (!(arg instanceof auth_pb.GenerateAuthChallengeResponse)) {
    throw new Error('Expected argument of type auth.GenerateAuthChallengeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GenerateAuthChallengeResponse(buffer_arg) {
  return auth_pb.GenerateAuthChallengeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_GenerateAuthTokensRequest(arg) {
  if (!(arg instanceof auth_pb.GenerateAuthTokensRequest)) {
    throw new Error('Expected argument of type auth.GenerateAuthTokensRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GenerateAuthTokensRequest(buffer_arg) {
  return auth_pb.GenerateAuthTokensRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_GenerateAuthTokensResponse(arg) {
  if (!(arg instanceof auth_pb.GenerateAuthTokensResponse)) {
    throw new Error('Expected argument of type auth.GenerateAuthTokensResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_GenerateAuthTokensResponse(buffer_arg) {
  return auth_pb.GenerateAuthTokensResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RefreshAccessTokenRequest(arg) {
  if (!(arg instanceof auth_pb.RefreshAccessTokenRequest)) {
    throw new Error('Expected argument of type auth.RefreshAccessTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RefreshAccessTokenRequest(buffer_arg) {
  return auth_pb.RefreshAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_RefreshAccessTokenResponse(arg) {
  if (!(arg instanceof auth_pb.RefreshAccessTokenResponse)) {
    throw new Error('Expected argument of type auth.RefreshAccessTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_RefreshAccessTokenResponse(buffer_arg) {
  return auth_pb.RefreshAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Authentication service definition
var AuthServiceService = exports.AuthServiceService = {
  generateAuthChallenge: {
    path: '/auth.AuthService/GenerateAuthChallenge',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GenerateAuthChallengeRequest,
    responseType: auth_pb.GenerateAuthChallengeResponse,
    requestSerialize: serialize_auth_GenerateAuthChallengeRequest,
    requestDeserialize: deserialize_auth_GenerateAuthChallengeRequest,
    responseSerialize: serialize_auth_GenerateAuthChallengeResponse,
    responseDeserialize: deserialize_auth_GenerateAuthChallengeResponse,
  },
  generateAuthTokens: {
    path: '/auth.AuthService/GenerateAuthTokens',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.GenerateAuthTokensRequest,
    responseType: auth_pb.GenerateAuthTokensResponse,
    requestSerialize: serialize_auth_GenerateAuthTokensRequest,
    requestDeserialize: deserialize_auth_GenerateAuthTokensRequest,
    responseSerialize: serialize_auth_GenerateAuthTokensResponse,
    responseDeserialize: deserialize_auth_GenerateAuthTokensResponse,
  },
  refreshAccessToken: {
    path: '/auth.AuthService/RefreshAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.RefreshAccessTokenRequest,
    responseType: auth_pb.RefreshAccessTokenResponse,
    requestSerialize: serialize_auth_RefreshAccessTokenRequest,
    requestDeserialize: deserialize_auth_RefreshAccessTokenRequest,
    responseSerialize: serialize_auth_RefreshAccessTokenResponse,
    responseDeserialize: deserialize_auth_RefreshAccessTokenResponse,
  },
};

exports.AuthServiceClient = grpc.makeGenericClientConstructor(AuthServiceService);
