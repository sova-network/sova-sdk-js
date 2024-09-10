// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var searcher_pb = require('./searcher_pb.js');
var dto_pb = require('./dto_pb.js');

function serialize_dto_Bundle(arg) {
  if (!(arg instanceof dto_pb.Bundle)) {
    throw new Error('Expected argument of type dto.Bundle');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dto_Bundle(buffer_arg) {
  return dto_pb.Bundle.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_dto_MempoolPacket(arg) {
  if (!(arg instanceof dto_pb.MempoolPacket)) {
    throw new Error('Expected argument of type dto.MempoolPacket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_dto_MempoolPacket(buffer_arg) {
  return dto_pb.MempoolPacket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_BundleResult(arg) {
  if (!(arg instanceof searcher_pb.BundleResult)) {
    throw new Error('Expected argument of type searcher.BundleResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_BundleResult(buffer_arg) {
  return searcher_pb.BundleResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetTipAddressesRequest(arg) {
  if (!(arg instanceof searcher_pb.GetTipAddressesRequest)) {
    throw new Error('Expected argument of type searcher.GetTipAddressesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetTipAddressesRequest(buffer_arg) {
  return searcher_pb.GetTipAddressesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_GetTipAddressesResponse(arg) {
  if (!(arg instanceof searcher_pb.GetTipAddressesResponse)) {
    throw new Error('Expected argument of type searcher.GetTipAddressesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_GetTipAddressesResponse(buffer_arg) {
  return searcher_pb.GetTipAddressesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_MempoolSubscription(arg) {
  if (!(arg instanceof searcher_pb.MempoolSubscription)) {
    throw new Error('Expected argument of type searcher.MempoolSubscription');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_MempoolSubscription(buffer_arg) {
  return searcher_pb.MempoolSubscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_SendBundleResponse(arg) {
  if (!(arg instanceof searcher_pb.SendBundleResponse)) {
    throw new Error('Expected argument of type searcher.SendBundleResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_SendBundleResponse(buffer_arg) {
  return searcher_pb.SendBundleResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_searcher_SubscribeBundleResultsRequest(arg) {
  if (!(arg instanceof searcher_pb.SubscribeBundleResultsRequest)) {
    throw new Error('Expected argument of type searcher.SubscribeBundleResultsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_searcher_SubscribeBundleResultsRequest(buffer_arg) {
  return searcher_pb.SubscribeBundleResultsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Service definition for MEV searchers on the TON blockchain.
var SearcherServiceService = exports.SearcherServiceService = {
  // Subscribe to bundle results.
subscribeBundleResults: {
    path: '/searcher.SearcherService/SubscribeBundleResults',
    requestStream: false,
    responseStream: true,
    requestType: searcher_pb.SubscribeBundleResultsRequest,
    responseType: searcher_pb.BundleResult,
    requestSerialize: serialize_searcher_SubscribeBundleResultsRequest,
    requestDeserialize: deserialize_searcher_SubscribeBundleResultsRequest,
    responseSerialize: serialize_searcher_BundleResult,
    responseDeserialize: deserialize_searcher_BundleResult,
  },
  // Subscribe to mempool messages based on specific criteria.
subscribeMempool: {
    path: '/searcher.SearcherService/SubscribeMempool',
    requestStream: false,
    responseStream: true,
    requestType: searcher_pb.MempoolSubscription,
    responseType: dto_pb.MempoolPacket,
    requestSerialize: serialize_searcher_MempoolSubscription,
    requestDeserialize: deserialize_searcher_MempoolSubscription,
    responseSerialize: serialize_dto_MempoolPacket,
    responseDeserialize: deserialize_dto_MempoolPacket,
  },
  // Send a bundle of messages.
sendBundle: {
    path: '/searcher.SearcherService/SendBundle',
    requestStream: false,
    responseStream: false,
    requestType: dto_pb.Bundle,
    responseType: searcher_pb.SendBundleResponse,
    requestSerialize: serialize_dto_Bundle,
    requestDeserialize: deserialize_dto_Bundle,
    responseSerialize: serialize_searcher_SendBundleResponse,
    responseDeserialize: deserialize_searcher_SendBundleResponse,
  },
  // Get the tip address for message inclusion.
getTipAddresses: {
    path: '/searcher.SearcherService/GetTipAddresses',
    requestStream: false,
    responseStream: false,
    requestType: searcher_pb.GetTipAddressesRequest,
    responseType: searcher_pb.GetTipAddressesResponse,
    requestSerialize: serialize_searcher_GetTipAddressesRequest,
    requestDeserialize: deserialize_searcher_GetTipAddressesRequest,
    responseSerialize: serialize_searcher_GetTipAddressesResponse,
    responseDeserialize: deserialize_searcher_GetTipAddressesResponse,
  },
};

exports.SearcherServiceClient = grpc.makeGenericClientConstructor(SearcherServiceService);
