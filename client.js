const grpc = require('grpc');
const PROTO_PATH = __dirname + '/notes.proto';
const protoLoader = require('@grpc/proto-loader');
require('dotenv').config();

const { MODE, PORT } = process.env;
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

const client = new listen.NoteService(MODE + PORT, grpc.credentials.createInsecure());

module.exports = client;