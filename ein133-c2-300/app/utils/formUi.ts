export const fieldUi = {
  wrapper: 'flex flex-col gap-2',
  label: 'text-sm font-semibold text-gray-700',
} as const

export const inputUi = {
  base: 'w-full rounded-xl border border-gray-200 bg-surface px-4 py-3 text-sm font-medium text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-brand focus:ring-4 focus:ring-brand/10',
} as const

export const submitButtonUi = {
  base: 'w-full md:w-auto bg-brand text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-brand-deep transition-colors cursor-pointer',
} as const
