import ReactSelect, { GroupBase, Props } from 'react-select'

import { useTheme } from '@emotion/react'

const Select = <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(
  props: Props<Option, IsMulti, Group>,
) => {
  const theme = useTheme()

  return (
      <ReactSelect
        classNamePrefix="react-select"
        {...props}
        theme={(t) => ({
          ...t,
          borderRadius: 8,
          colors: {
            ...t.colors,
            primary: theme.accent,
            primary75: `${theme.accent}bf`,
            primary50: `${theme.accent}80`,
            primary25: `${theme.accent}40`,
          },
        })}
        styles={{
          control: (base) => ({
            ...base,
            borderColor: 'transparent',
            boxShadow: 'none',
          }),
          option: (base) => ({
            ...base,
            color: theme.name === 'dark' ? theme.background : theme.primary,
          })
        }}
      />
  )
}

export default Select
