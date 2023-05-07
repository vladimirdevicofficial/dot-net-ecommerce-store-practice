/*
 * Build: Build system or external dependencies changes (example scopes: gulp, broccoli, npm)
 * core: Core changes
 * ci: CI changes
 * docs: Documentation changes
 * feat: New feature
 * fix: Bug fix
 * speed: Performance improvements
 * refactor: Readability | Maintainability | Reusability | Extensibility improvements that do not affect functionality
 * revert: Reverted to a previous version (Git)
 * style: Formatting | Styles improvements / changes
 * test: Adding missing tests or correcting existing tests
 * translation: Translation system changes
 * security: Security improvements / changes
 * backend: Made changes to backend configuration
 */

/*
 * To anable this configuration file after customization completed run the following command
 * npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'core',
        'ci',
        'docs',
        'feat',
        'fix',
        'speed',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'backend',
      ],
    ],
  },
};
