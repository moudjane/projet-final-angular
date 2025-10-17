import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'ts/consistent-type-definitions': 'off',
      'ts/consistent-type-imports': 'off',
      'ts/no-empty-object-type': 'off',
      'ts/no-namespace': 'off',
      'antfu/no-top-level-await': 'off',
      'antfu/top-level-function': 'off',
    },
  },
})
