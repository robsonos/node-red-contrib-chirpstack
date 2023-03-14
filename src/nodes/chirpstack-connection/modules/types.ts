import { ChirpstackConnectionOptions } from "../shared/types";
import * as grpc from "@grpc/grpc-js";
import { Node, NodeDef } from "node-red";

export interface ChirpstackConnectionNodeDef
  extends NodeDef,
    ChirpstackConnectionOptions {}

export interface ChirpstackConnectionNode
  extends Node,
    ChirpstackConnectionOptions {
  fullAddress: string;
  grpcMetadata: grpc.Metadata;
  throwError: string;
}

// export type ChirpstackConnectionNode = Node;
