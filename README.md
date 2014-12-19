Installing & Running
--------------------

Run like this:

    npm install
    grunt

Both karma tasks provide the same configuration to the TypeScript compiler.

- `karma:preCompiledTest` executes tests compiled by the `typescript` task and passes.
- `karma:test` uses the karma-typescript-preprocessor and fails.
