Minimal example
===============

This is a minimal example showing the potentially broken compilation by karma-typescript-preprocessor, when compiling using the Asynchronouse Module Definition (AMD).

Installing & Running
--------------------

Run like this:

    npm install
    grunt

Both karma tasks provide the same configuration to the TypeScript compiler.

- `karma:preCompiledTest` executes tests compiled by the `typescript` task and passes.
- `karma:test` uses the karma-typescript-preprocessor and fails.

Why is it so?
