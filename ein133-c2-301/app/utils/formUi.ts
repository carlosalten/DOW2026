export const formFieldUi = {
  label: 'block text-sm font-medium text-heading mb-1.5'
} as const

export const formInputUi = {
  base: 'ring-0 border border-divider rounded-xl px-4 py-2.5 text-sm text-heading placeholder:text-muted bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand focus-visible:border-brand transition-colors'
} as const

export const formButtonResetUi = {
  base: 'ring-0 bg-white border border-divider rounded-xl px-5 py-2.5 text-sm text-muted hover:bg-surface hover:text-heading'
} as const

export const formButtonSubmitUi = {
  base: 'bg-brand text-white hover:bg-brand-dark rounded-xl px-6 py-2.5 font-semibold shadow-sm'
} as const

export const formSelectUi = {
  base: 'bg-course-surface text-course-text ring-course-line hover:bg-course-surface focus:bg-course-surface data-[state=open]:bg-course-surface focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-course-line-accent',
  value: 'text-course-text',
  placeholder: 'text-course-text-muted',
  input: 'border-course-line-soft bg-course-surface-soft text-course-text placeholder:text-course-text-muted',
  content: 'bg-course-surface-soft ring-course-line shadow-lg',
  viewport: 'divide-y divide-course-line-soft',
  item: 'text-course-text before:bg-course-surface-soft data-highlighted:not-data-disabled:text-course-text data-highlighted:not-data-disabled:before:bg-course-surface-accent',
  itemLabel: 'text-course-text',
  itemDescription: 'text-course-text-muted group-data-highlighted:text-course-text-soft',
  itemTrailingIcon: 'text-course-accent',
  trailingIcon: 'text-course-text-muted'
} as const