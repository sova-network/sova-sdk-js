# prerequisites

- NodeJs

# Getting started



install grpc tools globally in your machine

```sh
npm install -g grpc-tools
```

# generating proto.
<!-- 
```sh
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../../src/proto/ --grpc_out=../../src/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./auth.proto
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../../src/proto/ --grpc_out=../../src/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./block_engine.proto
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../../src/proto/ --grpc_out=../../src/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./dto.proto
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../../src/proto/ --grpc_out=../../src/proto --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./searcher.proto
``` -->

```bash
# after install dependencies
npx proto-loader-gen-types \
  --longs=String \
  --enums=String \
  --defaults \
  --oneofs \
  --grpcLib=@grpc/grpc-js \
  --outDir=src/proto/ mevton-grpc-proto/proto/*.proto \
  --includeDirs 
```