
// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author n1474335 [n1474335@gmail.com]
 * @copyright Crown Copyright 2016
 * @license Apache-2.0
 */
'use client'

import Operation, { OptDetail } from "../../../core/Operation.tsx";
import JSSHA3 from "js-sha3";
import OperationError from "../../../core/errors/OperationError.mjs";
import { Dot } from "@/app/__CORE__/utils/cTranslationUtils.tsx";
import { TEXT_INPUT_EXAMPLE_HELLO_WORLD } from "./_constants.tsx";

/**
 * SHA3 operation
 */
class SHA3 extends Operation {
  public getOptDetail(): OptDetail {
    return {
      relatedID: 'sha3s',

      config: {
        "module": "Crypto",
        "description": "The SHA-3 (Secure Hash Algorithm 3) hash functions were released by NIST on August 5, 2015. Although part of the same series of standards, SHA-3 is internally quite different from the MD5-like structure of SHA-1 and SHA-2.<br><br>SHA-3 is a subset of the broader cryptographic primitive family Keccak designed by Guido Bertoni, Joan Daemen, Michaël Peeters, and Gilles Van Assche, building upon RadioGatún.",
        "infoURL": "https://wikipedia.org/wiki/SHA-3",
        "inputType": "ArrayBuffer",
        "outputType": "string",
        "flowControl": false,
        "manualBake": false,
        "args": [
          {
            "name": "Size",
            "type": "option",
            "value": [
              "512",
            ]
          }
        ]
      },
      optDescription: Dot("OMrIvzpf5", "The SHA-3 (Secure Hash Algorithm 3) hash functions were released by NIST on August 5, 2015. Although part of the same series of standards, SHA-3 is internally quite different from the MD5-like structure of SHA-1 and SHA-2.<br><br>SHA-3 is a subset of the broader cryptographic primitive family Keccak designed by Guido Bertoni, Joan Daemen, Micha\xebl Peeters, and Gilles Van Assche, building upon RadioGat\xfan."),
      nousenouseID: 'nouse',
      infoURL: "https://wikipedia.org/wiki/SHA-3",
      optName: "SHA512",
      exampleInput: TEXT_INPUT_EXAMPLE_HELLO_WORLD,
      exampleOutput: "32400b5e89822de254e8d5d94252c52bdcb27a3562ca593e980364d9848b8041b98eabe16c1a6797484941d2376864a1b0e248b0f7af8b1555a778c336a5bf48",
    }
  }
  /**
   * SHA3 constructor
   */
  constructor() {
    super();

    this.name = "SHA512";
    this.module = "Crypto";
    this.inputType = "ArrayBuffer";
    this.outputType = "string";
    this.args = [
      {
        name: "Size",
        type: "option",
        value: ["512"],
      },
    ];
  }

  /**
   * @param {ArrayBuffer} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    const size = parseInt(args[0], 10);
    let algo;

    switch (size) {
      case 224:
        algo = JSSHA3.sha3_224;
        break;
      case 384:
        algo = JSSHA3.sha3_384;
        break;
      case 256:
        algo = JSSHA3.sha3_256;
        break;
      case 512:
        algo = JSSHA3.sha3_512;
        break;
      default:
        throw new OperationError("Invalid size");
    }

    return algo(input);
  }
}

export default SHA3;