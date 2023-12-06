/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { FieldMask } from "./google/protobuf/field_mask";

export const protobufPackage = "";

export interface Example {
  mask?: string[] | undefined;
}

function createBaseExample(): Example {
  return { mask: undefined };
}

export const Example = {
  encode(message: Example, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mask !== undefined) {
      FieldMask.encode(FieldMask.wrap(message.mask), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Example {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseExample();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.mask = FieldMask.unwrap(FieldMask.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Example {
    return { mask: isSet(object.mask) ? FieldMask.unwrap(FieldMask.fromJSON(object.mask)) : undefined };
  },

  toJSON(message: Example): unknown {
    const obj: any = {};
    if (message.mask !== undefined) {
      obj.mask = FieldMask.toJSON(FieldMask.wrap(message.mask));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Example>, I>>(base?: I): Example {
    return Example.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Example>, I>>(object: I): Example {
    const message = createBaseExample();
    message.mask = object.mask ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}