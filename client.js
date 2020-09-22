const grpc = require('grpc');
const PROTO_PATH = __dirname + '/notes.proto';
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const listen = grpc.loadPackageDefinition(packageDefinition);

const client = new listen.NoteService('127.0.0.1:50051', grpc.credentials.createInsecure());

module.exports = client;