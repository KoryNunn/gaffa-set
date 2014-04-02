gaffa-set
=========

set action for gaffa

## Install:

    npm i gaffa-set

## Add to gaffa:

    gaffa.registerConstructor(require('gaffa-set'));

# API

## Properties (instanceof Gaffa.Property)

### target

Where in the model to set to

### source

What to set from

### clone

Whether to clone the data from its source

Default: true

### cleans

Whether to make the target model location as clean.

Default: true