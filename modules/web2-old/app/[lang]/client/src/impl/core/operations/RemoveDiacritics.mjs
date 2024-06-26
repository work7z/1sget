// Date: Sun, 14 Jan 2024
// Second Author: Ryan Laf
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

/**
 * @author Klaxon [klaxon@veyr.com]
 * @copyright Crown Copyright 2018
 * @license Apache-2.0
 */

import Operation from "../Operation.tsx";

/**
 * Remove Diacritics operation
 */
class RemoveDiacritics extends Operation {
  /**
   * RemoveDiacritics constructor
   */
  constructor() {
    super();

    this.name = "Remove Diacritics";
    this.module = "Default";
    this.description =
      "Replaces accented characters with their latin character equivalent. Accented characters are made up of Unicode combining characters, so unicode text formatting such as strikethroughs and underlines will also be removed.";
    this.infoURL = "https://wikipedia.org/wiki/Diacritic";
    this.inputType = "string";
    this.outputType = "string";
    this.args = [];
  }

  /**
   * @param {string} input
   * @param {Object[]} args
   * @returns {string}
   */
  run(input, args) {
    // reference: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463
    return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
}

export default RemoveDiacritics;
