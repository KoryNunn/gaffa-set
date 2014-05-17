# gaffa-set

Set action for [gaffa](https://github.com/gaffa-tape/gaffa-js). Set a value into the model.

## Install:

    npm i gaffa-set

## Add to gaffa:

    var Set = require('gaffa-set');

    gaffa.regeisterConstructor(Set);

## Usage:

    var set = new Set();
    set.source.binding = '(+ [number] 1)';
    set.target.binding = '[number]';

    // Assign the set action to be triggered by another viewItem

# API

## Properties (instanceof Gaffa.Property)

### source (get)

The data to set

### target (set)

The location to set the data

### clone (get) default: false

Whether to clone the value or not. Set this to true if you dont want to pass objects by reference.

### cleans (get) default: false

Whether to mark the target model location as clean.