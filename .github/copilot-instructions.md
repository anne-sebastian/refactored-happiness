# Copilot Instructions

## Language & Runtime

- TypeScript 5.x with strict mode enabled. No implicit `any`.

## Code Style

- Functional components with named exports. No default exports except for pages.
- Pure functions preferred. Avoid side effects in utility modules.
- Maximum function length: 50 lines. Extract if longer.
- Add comments for all functions and complex logic. Use JSDoc style for public functions.
- Use `const` for all variables unless reassignment is required.
- Use `camelCase` for variables and functions, `PascalCase` for types and components, and `UPPER_SNAKE_CASE` for constants.
- For Mui components, import components in a ui components folder and use them in the main components. Avoid using Mui components directly in the main components.
- Customization of Mui components should be done in the ui components folder.

## Error Handling

- All async functions must use try/catch. Never swallow errors silently.
- Return typed Result objects `{ data, error }` from service layer functions — do not throw across layer boundaries.

## Testing

- Jest + React Testing Library for unit/integration tests.
- Playwright for end-to-end tests. Cover: happy path, error state, empty state.
- Never mock the module under test.

## Security

- Never suggest hardcoded secrets, API keys, or tokens. Always use `process.env`.
- Sanitize all user-supplied strings before using in database queries. Use parameterized queries only.

## Prohibited Patterns

- No `var`. No `eval()`. No `dangerouslySetInnerHTML` without explicit sanitization.
- Do not use deprecated React lifecycle methods.
- Do not install new npm packages without confirming with the team first.
