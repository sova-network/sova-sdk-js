// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var block_engine_pb = require('./block_engine_pb.js');
var dto_pb = require('./dto_pb.js');

function serialize_block_engine_StreamMempoolResponse(arg) {
  if (!(arg instanceof block_engine_pb.StreamMempoolResponse)) {
    throw new Error('Expected argument of type block_engine.StreamMempoolResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_StreamMempoolResponse(buffer_arg) {
  return block_engine_pb.StreamMempoolResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_block_engine_SubscribeBundlesRequest(arg) {
  if (!(arg instanceof block_engine_pb.SubscribeBundlesRequest)) {
    throw new Error('Expected argument of type block_engine.SubscribeBundlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_block_engine_SubscribeBundlesRequest(buffer_arg) {
  return block_engine_pb.SubscribeBundlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

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


// / Validators can connect to Block Engines to receive packets and bundles.
var BlockEngineValidatorService = exports.BlockEngineValidatorService = {
  // / Validators can submit message to the block engine
streamMempool: {
    path: '/block_engine.BlockEngineValidator/StreamMempool',
    requestStream: true,
    responseStream: false,
    requestType: dto_pb.MempoolPacket,
    responseType: block_engine_pb.StreamMempoolResponse,
    requestSerialize: serialize_dto_MempoolPacket,
    requestDeserialize: deserialize_dto_MempoolPacket,
    responseSerialize: serialize_block_engine_StreamMempoolResponse,
    responseDeserialize: deserialize_block_engine_StreamMempoolResponse,
  },
  // / Validators can subscribe to the block engine to receive a stream of simulated and profitable bundles
subscribeBundles: {
    path: '/block_engine.BlockEngineValidator/SubscribeBundles',
    requestStream: false,
    responseStream: true,
    requestType: block_engine_pb.SubscribeBundlesRequest,
    responseType: dto_pb.Bundle,
    requestSerialize: serialize_block_engine_SubscribeBundlesRequest,
    requestDeserialize: deserialize_block_engine_SubscribeBundlesRequest,
    responseSerialize: serialize_dto_Bundle,
    responseDeserialize: deserialize_dto_Bundle,
  },
};

exports.BlockEngineValidatorClient = grpc.makeGenericClientConstructor(BlockEngineValidatorService);
