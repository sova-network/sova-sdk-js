protoLoader.load(protoFileName, options).then(packageDefinition => {
  const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);
});
// OR
const packageDefinition = protoLoader.loadSync(protoFileName, options);
const packageObject = grpcLibrary.loadPackageDefinition(packageDefinition);