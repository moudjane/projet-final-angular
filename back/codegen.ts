import type { CodegenConfig } from '@graphql-codegen/cli'

export default {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        useIndexSignature: true,
        mappers: {},
        scalars: {
          DateTime: 'Date',
        },
      },
    },
  },
} satisfies CodegenConfig
